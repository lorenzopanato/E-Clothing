import { LuFacebook, LuInstagram, LuTwitter } from "react-icons/lu";
import { LuPhoneCall } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { LuMapPin } from "react-icons/lu";
import MastercardLogo from "../../assets/mastercard.png";
import VisaLogo from "../../assets/visa.png";
import PaypalLogo from "../../assets/paypal.png";
import EloLogo from "../../assets/elo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-secondary px-7">
      <section className="container mx-auto">
        <div className="flex flex-wrap gap-7 py-6 border-b border-secondary border-opacity-50 w-full justify-between">
          <div className="flex flex-col gap-8">
            <strong className="font-medium text-2xl">E Clothing</strong>
            <div className="flex flex-col gap-5">
              <div className="flex gap-3 items-center">
                <LuPhoneCall size={24} />
                (51) 3330-7281
              </div>
              <div className="flex gap-3 items-center">
                <LuMail size={24} />
                eclothing@example.com
              </div>
              <div className="flex gap-3 items-center">
                <LuMapPin size={24} />
                9101 Oak Lane - Porto Alegre, RS
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-9 justify-between sm:flex-nowrap">
            <ul className="flex flex-col gap-4">
              <li className="font-bold">Company</li>
              <li>About us</li>
              <li>Blog</li>
              <li>Partners</li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="font-bold">Help and Support</li>
              <li>FAQ</li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="font-bold">Terms</li>
              <li>Service terms</li>
              <li>Privacy policy</li>
              <li>Cookies policy</li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="font-bold">Comunidade</li>
              <li>Github</li>
              <li>Discord</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <div className="py-6 flex justify-between flex-col md:flex-row items-center gap-5">
          <div className="flex gap-3">
            <div className="w-11 h-7 rounded-sm flex items-center justify-center bg-white">
              <img
                src={MastercardLogo}
                className="max-w-8"
                alt="logo da bandeira mastercard"
              />
            </div>
            <div className="w-11 h-7 rounded-sm flex items-center justify-center bg-white">
              <img
                src={VisaLogo}
                className="max-w-8"
                alt="logo da bandeira visa"
              />
            </div>
            <div className="w-11 h-7 rounded-sm flex items-center justify-center bg-white">
              <img
                src={PaypalLogo}
                className="max-w-8"
                alt="logo da bandeira paypal"
              />
            </div>
            <div className="w-11 h-7 rounded-sm flex items-center justify-center bg-white">
              <img
                src={EloLogo}
                className="max-w-8"
                alt="logo da bandeira elo"
              />
            </div>
          </div>
          <p>Copyright © 2024 • All Rights Reserved</p>
          <div className="flex gap-3">
            <LuFacebook size={24} />
            <LuInstagram size={24} />
            <LuTwitter size={24} />
          </div>
        </div>
      </section>
    </footer>
  );
}
