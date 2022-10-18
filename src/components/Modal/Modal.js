import { AnimatePresence, motion } from "framer-motion"
import { useEffect } from "react"
import styles from "./Modal.module.scss"

export default function Modal({ children, isOpen, close, title, subTitle }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const closeOnEscapeKey = (e) =>
      e.key === "Escape" && close ? close() : null

    document.body.addEventListener("keydown", closeOnEscapeKey)

    return () => document.body.removeEventListener("keydown", closeOnEscapeKey)
  }, [close])

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className={styles.Modal}
        >
          <div className={styles.ModalOverlay} onClick={close}></div>
          <div className={styles.ModalContent}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 absolute top-0 right-0 cursor-pointer hover:text-ash transition-all duration-150 ease-linear"
              onClick={close}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>

            <div className="mt-2">
              <p>{subTitle}</p>
              <h2 className="max-w-[445px]">{title}</h2>
              <div className="pt-11">{children}</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
