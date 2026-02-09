import React from "react";
import { IMAGES } from "../assets/Images";
import { LINK } from "../data";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-10 py-12">
      <footer className="relative bg-white/10 backdrop-blur-2xl border border-white/20 text-white rounded-3xl overflow-hidden shadow-2xl">

        {/* MAIN CONTENT */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-6 py-14">

          {/* BRAND / LOGO */}
          <div className="flex flex-col gap-9 lg:col-span-2">
            <a href="/">
              <img
                src={IMAGES.AACHARYALOGO}
                alt="Acharya Logo"
                className="w-40 sm:w-72"
              />
            </a>

            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
            Acharya Habba, launched in 2006, is an annual college fest known for its diverse social and cultural experiences, featuring talent displays, music, sports, and collaborative events.
            </p>

            {/* SOCIAL ICONS (ALL SCREENS) */}
            <div className="flex gap-7 text-2xl">
              <a href={LINK.insta} target="_blank" rel="noreferrer">
                <FaInstagram className="hover:scale-125 hover:text-pink-500 transition" />
              </a>
              <a href={`https://wa.me/91${LINK.whatsapp}`} target="_blank" rel="noreferrer">
                <FaWhatsapp className="hover:scale-125 hover:text-green-400 transition" />
              </a>
              <a href={`mailto:${LINK.email}`}>
                <MdEmail className="hover:scale-125 hover:text-cyan-400 transition" />
              </a>
              <a href={LINK.youtube} target="_blank" rel="noreferrer">
                <FaYoutube className="hover:scale-125 hover:text-red-500 transition" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-white/80">
              {[
                { name: "Home", path: "/" },
                { name: "Events", path: "/events" },
                { name: "Teams", path: "/teams" },
                { name: "Contact Us", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-3 text-white/70 text-sm leading-relaxed">
              <li className="hover:underline hover:text-blue-400 transition"><a href={LINK.email}>Email: acharyahabba@acharya.ac.in</a></li>
              <li className="hover:underline hover:text-blue-400 transition"><a  href={`tel:+91${LINK.mobile}`}>Phone: +91-{LINK.mobile}</a></li>
              <li className="hover:underline hover:text-blue-400 transition"><a
                    href="https://maps.app.goo.gl/SezduUwNxU7hVVev5"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Acharya Dr. Sarvepalli Radhakrishnan Road, Acharya Post,
                    Soladevanahalli, Bangalore, Karnataka 560107
                  </a>
</li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-[1px] bg-white/20 w-[90%] mx-auto" />

        {/* COPYRIGHT */}
        <div className="text-center py-6 text-sm text-white/60">
          © 2026 <span className="font-semibold text-white">Acharya Habba</span>. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
