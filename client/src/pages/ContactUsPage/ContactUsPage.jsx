import React from "react";
import "../ContactUsPage/ContactUsPage.css";
import { FaPhoneVolume, FaQuestion, FaNewspaper } from "react-icons/fa6";
import { MdBugReport } from "react-icons/md";
const listContacts = [
  {
    icon: <FaPhoneVolume className="size-6" />,
    name: "Technical support",
    mail: "grteenagesupport@example.com",
    phone: "+84 234-567-89",
  },
  {
    icon: <FaQuestion className="size-6" />,
    name: "Sales questions",
    mail: "grteenagesales@example.com",
    phone: "+84 234-567-89",
  },
  {
    icon: <FaNewspaper className="size-6" />,
    name: "Press",
    mail: "grteenagepress@example.com",
    phone: "+84 234-567-89",
  },
  {
    icon: <MdBugReport className="size-6" />,
    name: "Bug report",
    mail: "grteenagereport@example.com",
    phone: "+84 234-567-89",
  },
];

const ContactUsPage = () => {
  return (
    <div className="container  py-[74px] mb-12 mx-auto px-2 md:px-4">
      <section className="mb-32">
        <div className="flex justify-center">
          <div className="text-center">
            <h1 className="text-center my-10 text-5xl italic font-extrabold font-primary text-four">
              CONTACT US
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap">
          <form className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-6/12 lg:px-6">
            <div className="mb-6 w-full">
              <label
                className="block font-medium mb-[2px] text-teal-600"
                htmlFor="exampleInput90"
              >
                Name
              </label>
              <input
                type="text"
                className="px-2 py-2 border w-full outline-none rounded-md"
                id="exampleInput90"
                placeholder="Name"
              />
            </div>

            <div className="mb-6 w-full">
              <label
                className="block font-medium mb-[2px] text-teal-600"
                htmlFor="exampleInput90"
              >
                Email
              </label>
              <input
                type="email"
                className="px-2 py-2 border w-full outline-none rounded-md"
                id="exampleInput90"
                placeholder="Enter your email address"
              />
            </div>

            <div className="mb-6 w-full">
              <label
                className="block font-medium mb-[2px] text-teal-600"
                htmlFor="exampleInput90"
              >
                Message
              </label>
              <textarea
                className="px-2 py-2 border rounded-[5px] w-full outline-none"
                name=""
                id=""
              ></textarea>
            </div>

            <button
              type="button"
              className="mb-6 inline-block w-full rounded bg-teal-400 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-teal-500"
            >
              Send
            </button>
          </form>

          <div className="flex items-center w-full shrink-0 grow-0 basis-auto lg:w-6/12">
            <div className="flex flex-wrap">
              {listContacts.map((contact, index) => {
                return (
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-teal-400-100 px-4 text-teal-600">
                          {contact.icon}
                        </div>
                      </div>
                      <div className="ml-2 grow">
                        <p className="mb-2 font-bold">{contact.name}</p>
                        <p className="text-neutral-500 ">{contact.mail}</p>
                        <p className="text-neutral-500 ">{contact.phone}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
