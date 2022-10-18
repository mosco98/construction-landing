import cn from "classnames"
import { useEffect, useLayoutEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useAppContext } from "../../utils/AppContext"
import Button from "../Button/Button"
import Logo from "../Logo/Logo"
import styles from "./Navbar.module.scss"

export default function Navbar({ position, openMobileMenu }) {
  const [scrolled, setScrolled] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  const navbarClassnames = cn(
    styles.Navbar,
    "transition-all duration-150 ease-linear",
    position === "absolute" && "fixed w-full top-0 left-0",
    scrolled ? "bg-white shadow-md" : "bg-transparent"
  )

  useEffect(() => {
    const checkScrolled = () => {
      if (typeof window !== "undefined") {
        if (window.pageYOffset > 0) {
          setScrolled(true)
        } else {
          setScrolled(false)
        }
      }
    }

    window.addEventListener("scroll", checkScrolled)

    return () => window.removeEventListener("scroll", checkScrolled)
  }, [])

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      if (window.pageYOffset > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
  }, [])

  const { setIsContactModalOpen } = useAppContext()

  useEffect(() => {
    if (location.hash) {
      const a = document.createElement("a")
      a.href = location.hash
      a.click()
    }

    console.log(location.hash)
  }, [location.hash])

  const scrollBackToTop = () => {
    navigate("/")
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }

  const isActive = (hash) => (hash === location.hash ? styles.isActive : "")

  return (
    <nav className={navbarClassnames}>
      <div className="md:px-12 px-6">
        <div>
          <Logo onClick={scrollBackToTop} />

          <ul>
            <li className={isActive("#services")}>
              <a href="#services">Services</a>
            </li>
            <li className={isActive("#projects")}>
              <a href="#projects">Projects</a>
            </li>
            <li className={isActive("#about")}>
              <a href="#about">About us</a>
            </li>
          </ul>
        </div>

        <Button
          className={"hidden md:block"}
          text={"Contact us"}
          type="outline"
          variant={scrolled ? "black" : "white"}
          onClick={() => setIsContactModalOpen(true)}
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 text-primary md:hidden block"
          onClick={openMobileMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </div>
    </nav>
  )
}
