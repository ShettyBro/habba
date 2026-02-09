"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { IMAGES } from "../assets/Images/index";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";
import { LINK } from "../data";

export default function ContactUs() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
    setForm({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden p-4 py-36 flex items-center justify-center"
      style={{ backgroundImage: `url(${IMAGES.GALLERY11})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-10 rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* LEFT SIDE – CONTACT INFO */}
        <div className="md:col-span-4 p-8 bg-black/70 text-white">
          <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
          <p className="text-gray-300 mb-20">
            Reach out to us anytime. We usually respond within 24 hours.
          </p>

          <div className="space-y-4">
            <a
              href={LINK.insta}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-pink-500 transition"
            >
              <span className="text-2xl"><FaInstagram/></span>
              <span className="text-sm md:text-base">@acharyahabba</span>
            </a>

            <a
              href={`mailto:${LINK.email}`}
              className="flex items-center gap-3 hover:text-cyan-400 transition"
            >
              <span className="text-2xl"><MdEmail /></span>
              <span className="text-sm md:text-base">{LINK.email}</span>
            </a>

            <a
              href={`tel:+91${LINK.mobile}`}
              className="flex items-center gap-3 hover:text-green-400 transition"
            >
              <span className="text-2xl"><HiOutlinePhone/></span>
              <span className="text-sm md:text-base">+91 {LINK.mobile}</span>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE – GLASS FORM */}
        <motion.form
  onSubmit={handleSubmit}
  className="md:col-span-6 p-8 bg-white/15 space-y-4 flex flex-col"
>
  <h3 className="text-2xl font-bold text-white mb-4">Send a Message</h3>

  {/* First & Last Name */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <input
      type="text"
      name="firstName"
      value={form.firstName}
      onChange={handleChange}
      placeholder="First Name"
      required
      className="w-full rounded-xl bg-white/70 px-4 py-3 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-black"
    />
    <input
      type="text"
      name="lastName"
      value={form.lastName}
      onChange={handleChange}
      placeholder="Last Name"
      required
      className="w-full rounded-xl bg-white/70 px-4 py-3 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-black"
    />
  </div>

  {/* Email */}
  <input
    type="email"
    name="email"
    value={form.email}
    onChange={handleChange}
    placeholder="Email address"
    required
    className="w-full rounded-xl bg-white/70 px-4 py-3 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-black"
  />

  {/* Subject */}
  <input
    type="text"
    name="subject"
    value={form.subject}
    onChange={handleChange}
    placeholder="Subject"
    required
    className="w-full rounded-xl bg-white/70 px-4 py-3 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-black"
  />

  {/* Message */}
  <textarea
    name="message"
    value={form.message}
    onChange={handleChange}
    placeholder="Your message"
    rows={5}
    required
    className="w-full rounded-xl bg-white/70 px-4 py-3 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-black"
  />

  {/* Button aligned to the right */}
  <div className="flex justify-end">
    <button
      type="submit"
      className="rounded-xl bg-black text-white px-6 py-3 font-medium hover:opacity-90 transition"
    >
      Submit
    </button>
  </div>
</motion.form>

      </motion.div>
    </section>
  );
}
