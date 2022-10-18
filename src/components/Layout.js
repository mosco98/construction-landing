import { motion } from "framer-motion";
import { useAppContext } from "../utils/AppContext";
import Button from "./Button/Button";
import Footer from "./Footer/Footer";
import Modal from "./Modal/Modal";
import Navbar from "./Navbar/Navbar";

export default function Layout({ children, navPosition }) {
  const { isContactModalOpen, setIsContactModalOpen } = useAppContext();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar
        openContactModal={() => setIsContactModalOpen(true)}
        position={navPosition}
      />

      <main>{children}</main>

      <Footer />

      <Modal
        subTitle={"Contact us"}
        title={`Love to hear from you, Get in touch`}
        isOpen={isContactModalOpen}
        close={() => setIsContactModalOpen(false)}
      >
        <form className="space-y-10">
          <div>
            <label className="text-[14px]">Name*</label>
            <input className="block w-full mt-2" type={"text"} />
          </div>

          <div>
            <label className="text-[14px]">Email*</label>
            <input className="block w-full mt-2" type={"email"} />
          </div>

          <div>
            <label className="text-[14px]">Message*</label>
            <textarea className="block w-full mt-2"></textarea>
          </div>

          <Button
            text={"Send Message"}
            icon={
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12H20M13 5L20 12L13 19"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
        </form>
      </Modal>
    </motion.div>
  );
}
