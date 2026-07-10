import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const footerLinks = [
  { name: "Home", to: "/" },
  { name: "Features", to: "/#features" },
  { name: "Dashboard", to: "/dashboard" },
  { name: "About", to: "/#about" },
  { name: "Contact", to: "/#contact" },
  { name: "Privacy Policy", to: "/" },
];

const Footer = () => {
  return (
    <footer className="border-t border-[#E5DDD3] bg-[#FFFDF9] py-10 dark:border-[#4B5563] dark:bg-[#1F2937]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-xl font-semibold text-[#2F3A32] dark:text-[#F9FAFB]">Growth Prediction</h3>
          <p className="mt-3 text-sm leading-7 text-[#2F3A32]/75 dark:text-[#F9FAFB]/80">
            AI-powered insights for smarter forecasting, healthier business decisions, and confident growth planning.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-[#2F3A32] dark:text-[#F9FAFB]">Quick Links</h4>
          <div className="mt-4 flex flex-col gap-2 text-sm text-[#2F3A32]/75 dark:text-[#F9FAFB]/80">
            {footerLinks.map((link) => (
              <Link key={link.name} to={link.to} className="transition hover:text-[#A3B18A]">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-[#2F3A32] dark:text-[#F9FAFB]">Contact</h4>
          <div className="mt-4 space-y-2 text-sm text-[#2F3A32]/75 dark:text-[#F9FAFB]/80">
            <p>Email: support@growthprediction.com</p>
            <p>Phone: +1 (555) 012-3456</p>
            <p>Location: Remote • Global</p>
          </div>
          <div className="mt-5 flex gap-3">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
              <div key={index} className="rounded-full border border-[#E5DDD3] p-2 text-[#2F3A32] transition hover:bg-[#D9E5D6] dark:border-[#4B5563] dark:text-[#F9FAFB] dark:hover:bg-[#4B5563]">
                <Icon />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-[#E5DDD3] px-4 pt-6 text-center text-sm text-[#2F3A32]/70 dark:border-[#4B5563] dark:text-[#F9FAFB]/70 sm:px-6 lg:px-8">
        ©️ 2026 AI-Powered Business Growth Prediction System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
