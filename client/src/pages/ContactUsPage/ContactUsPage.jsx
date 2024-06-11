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
];

const ContactUsPage = () => {
  return (
    <div className="container pt-32 mb-12 mx-auto px-4 md:px-8">
      <section className="mb-32">
        <div className="flex justify-center mb-10">
          <h1 className="text-5xl italic font-semibold font-logoTitle text-four">
            CONTACT US
          </h1>
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:space-x-6">
          <form className="mb-12 w-full lg:w-5/12">
            <div className="mb-6">
              <label
                className="block font-medium mb-2 text-teal-600"
                htmlFor="nameInput"
              >
                Name
              </label>
              <input
                type="text"
                className="px-4 py-3 border w-full outline-none rounded-md shadow-sm focus:border-teal-400"
                id="nameInput"
                placeholder="Name"
              />
            </div>

            <div className="mb-6">
              <label
                className="block font-medium mb-2 text-teal-600"
                htmlFor="emailInput"
              >
                Email
              </label>
              <input
                type="email"
                className="px-4 py-3 border w-full outline-none rounded-md shadow-sm focus:border-teal-400"
                id="emailInput"
                placeholder="Enter your email address"
              />
            </div>

            <div className="mb-6">
              <label
                className="block font-medium mb-2 text-teal-600"
                htmlFor="messageInput"
              >
                Message
              </label>
              <textarea
                className="px-4 py-3 border rounded-md w-full outline-none shadow-sm focus:border-teal-400"
                id="messageInput"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="button"
              className="mb-6 w-full rounded bg-teal-500 px-6 py-3 font-medium uppercase leading-normal text-white shadow-md hover:bg-teal-600"
            >
              Send
            </button>
          </form>

          <div className="w-full lg:w-5/12">
            <div className="space-y-6">
              {listContacts.map((contact, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
                >
                  <div className="shrink-0">
                    <div className="inline-block rounded-full bg-teal-100 p-4 text-teal-600">
                      {contact.icon}
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="mb-1 font-bold text-lg text-teal-700">
                      {contact.name}
                    </p>
                    <p className="text-neutral-500">{contact.mail}</p>
                    <p className="text-neutral-500">{contact.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
