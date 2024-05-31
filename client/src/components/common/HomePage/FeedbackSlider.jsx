import React from "react";
import Avatar1Img from '../../../assets/images/avatar/avatar-1.png'
import Avatar2Img from '../../../assets/images/avatar/avatar-2.png'
import Avatar3Img from '../../../assets/images/avatar/avatar-3.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

const FeedbackSlider = () => {
  const testimonial = {
    persons: [
      {
        avatar: <Avatar1Img />,
        name: "Josh Smith",
        occupation: "Manager of The New York Times",
        message:
          "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
      },
      {
        avatar: <Avatar2Img />,
        name: "Brandi Johns",
        occupation: "Manager of The New York Times",
        message:
          "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
      },
      {
        avatar: <Avatar3Img />,
        name: "Paula Pfeffer",
        occupation: "Manager of The New York Times",
        message:
          "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
      },
    ],
  };

  return (
    <Swiper
      className="testimonialSlider"
      modules={[Navigation, Autoplay]}
      navigation={true}
    >
      {testimonial.persons.map((person, index) => {
        const { avatar, name, occupation, message } = person;
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col min-h-[250px] ">
              <div className="flex items-center gap-x-5 mb-9">
                <img src={avatar.type} alt="" />
                <div>
                  <div className="text-xl font-semibold">{name}</div>
                  <div className="text-gray-500">{occupation}</div>
                </div>
              </div>
              <div className="text-xl max-w-[570px]">{message}</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default FeedbackSlider;
