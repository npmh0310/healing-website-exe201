const nodemailer = require('nodemailer')
const WorkShop = require('../models/WorkShop')

const sendTicketToMail = async (email, workshopId) => {

    const workshop = await WorkShop.findById(workshopId)

    try {
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            service: "Gmail",
            auth: {
                user: "duyan3k@gmail.com",
                pass: "ctxtzyhcvwznvubg"
            }
        })

        const info = await transporter.sendMail({
            from: "duyan3k@gmail.com",
            to: email,
            subject: `Information of Ticket`,
            text: 'Hello mình là Lĩnh Đẹp trai nè',
            html:
                `
                <h1>Lĩnh đẹp trai quá</h1>
                <h2>${workshop.name}</h2>
                <span>Thời gian: ${workshop.openDate}</span>
                <span>Địa chỉ: ${workshop.location}</span>
            ` // thêm html code ở đây nghe thg lz
        })

        console.log("oke mail send roi nghe")
        console.log(info)

        return {
            status: 200,
            data: {
                success: true,
                message: "Send mail Successfully",
            }
        }
    } catch (error) {
        console.log(error)
        return {
            status: 400,
            data: { message: 'Loi roi' }
        }
    }
}

const guimail = async (req, res) => {
    const email = req.user.email;
    const result = await sendTicketToMail(email, '66523a5c89814c6d969e4d2a');
    res.status(result.status).json(result.data);
};

module.exports = { sendTicketToMail, guimail }