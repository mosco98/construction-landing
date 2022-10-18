import { AnimatePresence, motion } from "framer-motion"
import { useEffect } from "react"
import styles from "./MobileMenu.module.scss"

export default function MobileMenu({ isOpen, close, openContactModal }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.25 }}
          className={styles.MobileMenu}
        >
          <div className={styles.content}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 text-white absolute top-0 right-0 m-6"
              onClick={close}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>

            <ul className="text-center space-y-10 text-[16px] text-white">
              <li onClick={close}>
                <a href="#services">Services</a>
              </li>
              <li onClick={close}>
                <a href="#projects">Projects</a>
              </li>
              <li onClick={close}>
                <a href="#about">About us</a>
              </li>
              <li onClick={openContactModal}>Contact us</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
