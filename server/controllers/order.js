const PayOS = require("@payos/node");
const express = require("express");
const orderRouter = express.Router();
// const payos = new PayOS(process.env.PAYOS_CLIENT_ID, process.env.PAYOS_API_KEY, process.env.PAYOS_CHECKSUM_KEY)
const payos = new PayOS('482856c1-3fa7-4d8e-8f2d-5a36ecce35ba', 'fc6e29d9-f938-4ffc-a5d1-c5e9f90a3616', '7aa87fcb5c2ad082042a3a9f16e5820e86ffe6879dbec9da177677e526f4d7a9')

orderRouter.post('/create-payment-link', async (req, res) => {
    const YOUR_DOMAIN = 'https://healing-website-exe201-npmh310s-projects.vercel.app';
    const body = {
        orderCode: Number(String(Date.now()).slice(-6)),
        amount: req.body.amount,
        description: 'Thanh toan don hang',
        returnUrl: `${YOUR_DOMAIN}/success`,
        cancelUrl: `${YOUR_DOMAIN}/cancel`
    };

    try {
        const paymentLinkResponse = await payos.createPaymentLink(body);
        // res.redirect(paymentLinkResponse.checkoutUrl);
        res.status(200).json({
            url: paymentLinkResponse.checkoutUrl
        })
    } catch (error) {
        console.error(error);
        res.send('Something went error');
    }
});

orderRouter.post("/create", async function (req, res) {
    // const { description, amount } = req.body;
    const body = {
        orderCode: Number(String(new Date().getTime()).slice(-6)),
        amount: req.body.amount,
        description: 'Thanh toan don hang',
        cancelUrl: 'localhost:3000/cancel',
        returnUrl: 'localhost:3000/paymentsuccess'
    };

    try {
        const paymentLinkRes = await payos.createPaymentLink(body);

        return res.json({
            error: 0,
            message: "Success",
            data: {
                bin: paymentLinkRes.bin,
                checkoutUrl: paymentLinkRes.checkoutUrl,
                accountNumber: paymentLinkRes.accountNumber,
                accountName: paymentLinkRes.accountName,
                amount: paymentLinkRes.amount,
                description: paymentLinkRes.description,
                orderCode: paymentLinkRes.orderCode,
                qrCode: paymentLinkRes.qrCode,
            },
        });
    } catch (error) {
        console.log(error);
        return res.json({
            error: -1,
            message: "fail",
            data: null,
        });
    }
});

orderRouter.get("/:orderId", async function (req, res) {
    try {
        const order = await payos.getPaymentLinkInformation(req.params.orderId);
        if (!order) {
            return res.json({
                error: -1,
                message: "failed",
                data: null,
            });
        }
        return res.json({
            error: 0,
            message: "ok",
            data: order,
        });
    } catch (error) {
        console.log(error);
        return res.json({
            error: -1,
            message: "failed",
            data: null,
        });
    }
});

orderRouter.put("/:orderId", async function (req, res) {
    try {
        const { orderId } = req.params;
        const body = req.body;
        const order = await payos.cancelPaymentLink(orderId, body.cancellationReason);
        if (!order) {
            return res.json({
                error: -1,
                message: "failed",
                data: null,
            });
        }
        return res.json({
            error: 0,
            message: "ok",
            data: order,
        });
    } catch (error) {
        console.error(error);
        return res.json({
            error: -1,
            message: "failed",
            data: null,
        });
    }
});

orderRouter.post("/confirm-webhook", async (req, res) => {
    const { webhookUrl } = req.body;
    try {
        const res = await payos.confirmWebhook(webhookUrl);
        return res.json({
            error: 0,
            message: "ok",
            data: res,
        });
    } catch (error) {
        console.error(error);
        return res.json({
            error: -1,
            message: "failed",
            data: null,
        });
    }
});

orderRouter.post("/receive-hook", async (req, res) => {
    console.log(req.body)
    res.status(200).json({
        message: "oke roi ne",
        data: req.body
    })
})

module.exports = orderRouter;