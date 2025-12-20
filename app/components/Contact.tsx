"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { formSubmit } from "../lib/apis/formSubmit";
import Success from "./common/Success";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      message,
    };

    const result = await formSubmit(formData);
    if (result?.success === "true") {
      setIsSuccess(result.message);
      setName("");
      setEmail("");
      setMessage("");
      alert("Message sent successfully!");
    } else {
    }
    return result;
  };

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);
  return (
    <section className="py-16 px-10 md:px-20 space-y-14 my-24" id="contact">
      <h2 className="text-center text-4xl font-bold dark:[text-shadow:2px_2px_4px_#1966D2] [text-shadow:2px_2px_4px_#000000] mb-10 text-[#023E8A] dark:text-amber-50">
        CONTACT ME
      </h2>

      <form
        className="max-w-md mx-auto flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        {isSuccess && <Success errorMessage={isSuccess} />}
        <div>
          {" "}
          <label className="block text-sm font-medium mb-3">Name*</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border px-4 py-4 dark:bg-[#222632] bg-[#faf9f6] border-none focus:border-[#023E8A] focus:ring-2 focus:ring-[#023E8A] text-[#1966D2] font-semibold placeholder:font-normal placeholder:text-neutral-500 rounded outline-none"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          {" "}
          <label className="block text-sm font-medium mb-3">Email*</label>
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full border px-4 py-4 dark:bg-[#222632] bg-[#faf9f6]  border-none focus:border-[#023E8A] focus:ring-2 focus:ring-[#023E8A] text-[#1966D2] font-semibold placeholder:font-normal placeholder:text-neutral-500 rounded outline-none"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          {" "}
          <label className="block text-sm font-medium mb-3">Message*</label>
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full border px-4 py-4 dark:bg-[#222632] bg-[#faf9f6] border-none focus:border-[#023E8A] focus:ring-2 focus:ring-[#023E8A] text-[#1966D2] font-semibold placeholder:font-normal placeholder:text-neutral-500 rounded outline-none"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="p-3 px-7 bg-[#023E8A] hover:bg-transparent border-2 border-[#023E8A] hover:text-[#023E8A] dark:hover:text-amber-50 text-amber-50 rounded transition-colors duration-300 cursor-pointer mt-4"
        >
          Send Message
        </button>
      </form>
      <div className="text-center">
        {/* <h3 className="text-center text-2xl font-semibold mb-4 dark:text-amber-50 text-[#023E8A]">
            Connect with me
          </h3> */}
        <Link
          href="https://github.com/senatorash"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            size={30}
            className="mx-4 inline-block text-[#023E8A] hover:text-black dark:hover:text-amber-50 shadow-2xl cursor-pointer"
          />
        </Link>
        <Link
          href="https://linkedin.com/in/ashimi-seide-96797a289"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn
            size={30}
            className="mx-4 inline-block text-[#023E8A] hover:text-black dark:hover:text-amber-50 shadow-2xl cursor-pointer"
          />
        </Link>
        <Link
          href="https://wa.me/2349076275708"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp
            size={30}
            className="mx-4 inline-block text-[#023E8A] hover:text-black dark:hover:text-amber-50 shadow-2xl cursor-pointer"
          />
        </Link>
      </div>
    </section>
  );
};
export default Contact;
