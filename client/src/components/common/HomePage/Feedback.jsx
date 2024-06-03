import React from "react";
import imgFeedback from "../../../assets/images/feedback.jpg";
import FeedbackSlider from "./FeedbackSlider";
const Feedback = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-10 gap-y-2">
          <div className="lg:max-w-[50%]">
            <h2 className="title mb-9">What people are saying about us</h2>
            {/* slide */}
            <FeedbackSlider />
          </div>
          <div className="order-1">
            <img  className="rounded-xl" src={imgFeedback} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
