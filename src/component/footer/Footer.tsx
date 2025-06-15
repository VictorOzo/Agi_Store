import Image from "next/image";
import facebook from "@/assets/images/facebook.png";
import instagram from "@/assets/images/instagram.png";
import tiktok from "@/assets/images/tiktok.png";
import twitter from "@/assets/images/twitter.png";
import whatsapp from "@/assets/images/whatsapp.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#293544] text-white py-8 px-4 sm:px-8 lg:px-8">
        <div className="container mx-auto">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
            {/* Customer Service */}
            <div>
              <h3 className="font-bold text-lg mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/help" className="hover:text-gray-600">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="/returns" className="hover:text-gray-600">
                    Size Guide
                  </a>
                </li>
                <li>
                  <a href="/shipping" className="hover:text-gray-600">
                    Privacy & Policies
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-gray-600">
                    Shipping & Return
                  </a>
                </li>
              </ul>
            </div>

            {/* Collections */}
            <div>
              <h3 className="font-bold text-lg mb-4">Collections</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/men" className="hover:text-gray-600">
                    Men
                  </a>
                </li>
                <li>
                  <a href="/women" className="hover:text-gray-600">
                    Women
                  </a>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-bold text-lg mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/sets" className="hover:text-gray-600">
                    Sets
                  </a>
                </li>
                <li>
                  <a href="/bottoms" className="hover:text-gray-600">
                    Bottoms
                  </a>
                </li>
                <li>
                  <a href="/denim" className="hover:text-gray-600">
                    Denim
                  </a>
                </li>
                <li>
                  <a href="/tops" className="hover:text-gray-600">
                    Tops
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <div className="space-y-2">
                <p>+234812234567</p>
                <p>No. 23 Lawson street, Ikeja, Lagos State.</p>
                <p>AgibyAgi@gmail.com</p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="text-center md:text-left">
              <h3 className="font-bold text-lg mb-4">Newsletter</h3>
              <p className="mb-4">
                Subscribe to our newsletter to get the latest updates on our
                products.
              </p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="px-4 py-2 border rounded-lg flex-grow"
                  required
                />
                <button
                  type="submit"
                  className="bg-black text-white px-4 rounded-lg hover:bg-gray-800 transition">
                  Register
                </button>
              </form>
            </div>
          </div>

          {/* Socials */}
          <div className="text-center mb-6">
            <div className="flex justify-center gap-4">
              <a href="#">
                <Image src={whatsapp} alt="WhatsApp" width={24} height={24} />
              </a>
              <a href="#">
                <Image src={instagram} alt="Instagram" width={24} height={24} />
              </a>
              <a href="#">
                <Image src={tiktok} alt="TikTok" width={24} height={24} />
              </a>
              <a href="#">
                <Image src={twitter} alt="Twitter" width={24} height={24} />
              </a>
              <a href="#">
                <Image src={facebook} alt="Facebook" width={24} height={24}  />
              </a>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-gray-300 my-6" />

          {/* Copyright */}
          <div className="text-center">
            <p>
              © {new Date().getFullYear()}, Agi by Agi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
