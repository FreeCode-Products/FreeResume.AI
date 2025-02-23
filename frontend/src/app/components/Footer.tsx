import Image from "next/image";
import React from "react";
import logo from "../assests/Yellow and Green Modern Logo (1).jpg";

export default function Footer() {
  return (
    <footer className="p-4 sm:p-6 bg-gray-800">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com" className="flex items-center">
              <Image
                src={logo}
                className="mr-3 h-20 w-44 object-cover rounded-xl"
                alt="FlowBite Logo"
              />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h2 className="mb-6 text-sm font-semibold  uppercase  text-white">
                  {section.title}
                </h2>
                <ul className="  text-gray-400">
                  {section.links.map((link) => (
                    <li className="mb-4" key={link.href}>
                      <a href={link.href} className="hover:underline">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6  sm:mx-auto  border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center  text-gray-400">
            © 2022{" "}
            <a href="https://flowbite.com" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                className=" hover:text-gray-900 text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerLinks = [
  {
    title: "Resources",
    links: [
      { text: "Flowbite", href: "https://flowbite.com" },
      { text: "Tailwind CSS", href: "https://tailwindcss.com/" },
    ],
  },
  {
    title: "Follow us",
    links: [
      { text: "Github", href: "https://github.com/themesberg/flowbite" },
      { text: "Discord", href: "https://discord.gg/4eeurUVvTy" },
    ],
  },
  {
    title: "Legal",
    links: [
      { text: "Privacy Policy", href: "#" },
      { text: "Terms & Conditions", href: "#" },
    ],
  },
];

const socialLinks = [
  {
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];
