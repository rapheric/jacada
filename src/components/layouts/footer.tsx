import React from "react";
import { vpnFooterData } from "./footerData";

interface FooterLinkProps {
  label: string;
  url: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ label, url }) => (
  <li className="mb-2">
    <a href={url} className="hover:text-blue-400 transition-colors">
      {label}
    </a>
  </li>
);

interface FooterSectionProps {
  title: string;
  items: FooterLinkProps[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, items }) => (
  <div className="mb-6 md:mb-0">
    <h5 className="text-lg font-semibold text-white mb-4">{title}</h5>
    <ul>
      {items.map((item, idx) => (
        <FooterLink key={idx} {...item} />
      ))}
    </ul>
  </div>
);

const Footer: React.FC = () => {
  return (
    <div className="w-screen bg-gray-800">
      <footer className="bg-gray-800 text-gray-300 py-12 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {vpnFooterData.sections.map((section, index) => (
            <FooterSection
              key={index}
              title={section.title}
              items={section.items.map((item) =>
                typeof item === "string" ? { label: item, url: "#" } : item
              )}
            />
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          <div>{vpnFooterData.companyAddress.name}</div>
          <div>{vpnFooterData.companyAddress.address}</div>
          <div className="mt-2">
            {vpnFooterData.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="inline-block mx-2 hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-4">
            © {new Date().getFullYear()} Jacada VPN All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
