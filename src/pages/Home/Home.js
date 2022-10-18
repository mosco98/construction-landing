import classNames from "classnames"
import Button from "../../components/Button/Button"
import Layout from "../../components/Layout"
import styles from "./Home.module.scss"

import Afterpay from "../../assets/images/Afterpay.svg"
import Airbnb from "../../assets/images/Airbnb.svg"
import Attentive from "../../assets/images/Attentive.svg"
import Hopin from "../../assets/images/Hopin.svg"
import Stripe from "../../assets/images/Stripe.svg"

import AboutImg from "../../assets/images/about.png"
import HeroImg from "../../assets/images/hero.png"
import SectionImg from "../../assets/images/section-bg.png"

import { motion } from "framer-motion"
import Project1 from "../../assets/images/project-1.png"
import Project2 from "../../assets/images/project-2.png"
import Project3 from "../../assets/images/project-3.png"
import { useAppContext } from "../../utils/AppContext"

export default function Home() {
  const { setIsContactModalOpen } = useAppContext()

  return (
    <Layout navPosition={"absolute"}>
      <div className={classNames(styles.Home)}>
        <div className={styles.Hero}>
          <div className="md:px-12 px-6 self-center md:pt-40 pt-32 md:pb-20 pb-12">
            <div>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="max-w-[693px]"
              >
                Bring your vision to life with skill and expertise
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="mt-4 text-ash max-w-[553px]"
              >
                You have the vision for a stunning digital experience. we are
                the engineering team to bring it to life.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <Button
                  text={"Send inquiry"}
                  className="md:mt-14 mt-7"
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
                  onClick={() => setIsContactModalOpen(true)}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex items-center space-x-6 pt-16 md:pb-6"
              >
                <div className="text-center">
                  <h3>300+</h3>
                  <p className="md:text-[14px] text-[12px] md:mt-0 mt-1">
                    Project complete
                  </p>
                </div>

                <div className="text-center">
                  <h3>25+</h3>
                  <p className="md:text-[14px] text-[12px] md:mt-0 mt-1">
                    Professional team
                  </p>
                </div>

                <div className="text-center">
                  <h3>10+</h3>
                  <p className="md:text-[14px] text-[12px] md:mt-0 mt-1">
                    Years experience
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          <div className={styles.has_bg}>
            <motion.img
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
              src={HeroImg}
              alt=""
            />
          </div>
        </div>

        <section className="bg-primary">
          <div className="container flex items-center justify-between py-6 overflow-x-auto md:space-x-0 space-x-6">
            <img className="object-contain" src={Airbnb} alt="Airbnb" />
            <img className="object-contain" src={Afterpay} alt="Afterpay" />
            <img className="object-contain" src={Stripe} alt="Stripe" />
            <img className="object-contain" src={Hopin} alt="Hopin" />
            <img className="object-contain" src={Attentive} alt="Attentive" />
          </div>
        </section>

        <section className="grid md:grid-cols-2 grid-cols-1 overflow-hidden">
          <div className="second-section-has_bg">
            <motion.img
              initial={{ scale: 1.5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              src={SectionImg}
              alt=""
            />
          </div>
          <div className="md:px-11 px-6 md:pt-24 pt-8 pb-9">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2>Entrust us with your construction!</h2>

              <p className="text-ash max-w-[445px] mt-5">
                Trust us to make your idea come to real life with our
                engineering team.
              </p>

              <div className="space-y-8 mt-9">
                <div className="flex md:space-x-8 space-x-6">
                  <div className="pt-1">
                    <div className={styles.number_ctn}>
                      <span className="text-[20px] text-white">1</span>
                    </div>
                  </div>

                  <div>
                    <h5>High quality materials</h5>

                    <p className="text-[12px] text-ash max-w-[386px] mt-2">
                      We utilize premium materials because we value quality
                      above quantity when building.
                    </p>
                  </div>
                </div>

                <div className="flex md:space-x-8 space-x-6">
                  <div className="pt-1">
                    <div className={styles.number_ctn}>
                      <span className="text-[20px] text-white">2</span>
                    </div>
                  </div>

                  <div>
                    <h5>Professional designers</h5>

                    <p className="text-[12px] text-ash max-w-[386px] mt-2">
                      To provide high-quality services, we have professional
                      engineers on our team.
                    </p>
                  </div>
                </div>

                <div className="flex md:space-x-8 space-x-6">
                  <div className="pt-1">
                    <div className={styles.number_ctn}>
                      <span className="text-[20px] text-white">3</span>
                    </div>
                  </div>

                  <div>
                    <h5>Minimized time</h5>

                    <p className="text-[12px] text-ash max-w-[386px] mt-2">
                      We work efficiently because we are reliant and quick in
                      providing services.
                    </p>
                  </div>
                </div>

                <div className="flex md:space-x-8 space-x-6">
                  <div className="pt-1">
                    <div
                      className={classNames(styles.number_ctn, styles.no_dots)}
                    >
                      <span className="text-[20px] text-white">4</span>
                    </div>
                  </div>

                  <div>
                    <h5>Affordable price</h5>

                    <p className="text-[12px] text-ash max-w-[386px] mt-2">
                      We work efficiently because we are reliant and quick in
                      providing services.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                text={"Learn more"}
                className="mt-14"
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
                onClick={() => setIsContactModalOpen(true)}
              />
            </motion.div>
          </div>
        </section>

        <section className="md:py-28 py-14">
          <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="container"
            id="services"
          >
            <div className="text-center md:mb-16 mb-8">
              <h2>Our services</h2>
              <p className="mt-5 text-ash max-w-[619px] mx-auto">
                To make sure our clients reach their real estate goals, we
                provide a variety of services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="flex py-7"
              >
                <p className="pt-1 text-ash">01</p>
                <div className="px-5">
                  <h4>Architecture</h4>
                  <p className="text-[14px] max-w-[621px] text-ash md:mt-0 mt-2">
                    The practice of architecture is employed to fulfill both
                    practical and expressive requirements, and thus it serves
                    both utilitarian and aesthetic ends. As part of our
                    services, we provide architectural services.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex py-7"
              >
                <p className="pt-1 text-ash">02</p>
                <div className="px-5">
                  <h4>Renovation</h4>
                  <p className="text-[14px] max-w-[621px] text-ash md:mt-0 mt-2">
                    We provide quality work while keeping our renovation
                    services affordable. we are fast and reliable.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex py-7"
              >
                <p className="pt-1 text-ash">03</p>
                <div className="px-5">
                  <h4>Design and build</h4>
                  <p className="text-[14px] max-w-[621px] text-ash md:mt-0 mt-2">
                    As a forward-thinking building and construction firm, we
                    draw on the breadth of our design and technical knowledge to
                    produce an effective
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="flex py-7"
              >
                <p className="pt-1 text-ash">04</p>
                <div className="px-5">
                  <h4>General contracting</h4>
                  <p className="text-[14px] max-w-[621px] text-ash md:mt-0 mt-2">
                    Through proven safety, quality, and planning procedures, we
                    manage a powerful team in an inspiring environment.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section className="bg-primary text-white py-16 relative" id="projects">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="container relative"
          >
            <div className="text-center">
              <h2>Our projects</h2>

              <p className="text-[14px] max-w-[498px] text-white text-opacity-70 mt-4 mx-auto">
                Facilisis ac mattis nisi elementum. At feugiat vulputate amet,
                condimentum risus quam.
              </p>
            </div>

            <div className="mt-10 relative">
              <div className="max-w-[1200px] min-h-[568px] bg-[#EDEDED] mx-auto md:sticky md:top-0 text-primary grid grid-cols-12 group mb-8 md:mb-0">
                <div className="md:col-span-7 col-span-12 self-center md:px-16 px-4 md:py-0 py-4 md:order-1 order-2">
                  <h2>University of denmark</h2>
                  <p className="text-[14px] max-w-[498px] text-ash mt-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Faucibus tellus aenean sodales mattis id nisl. Facilisis ac
                    mattis nisi elementum. At feugiat vulputate amet,
                    condimentum risus quam. Tortor aliquam neque, vivamus non
                    massa purus cursus vitae.
                  </p>

                  <svg
                    viewBox="0 0 88 88"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="md:mt-24 mt-8 hover:opacity-80 transition-all duration-150 ease-linear cursor-pointer md:w-[88px] md:h-[88px] w-12 h-12"
                  >
                    <path
                      d="M14.6666 43.9999H73.3333M73.3333 43.9999L47.6666 18.3333M73.3333 43.9999L47.6666 69.6666"
                      stroke="black"
                      strokeWidth="8.58333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="md:col-span-5 col-span-12 overflow-hidden relative md:order-2 order-1">
                  <img
                    className="object-cover group-hover:transform group-hover:scale-150 transition-all duration-200 ease-linear"
                    src={Project1}
                    alt=""
                  />

                  <div className="absolute right-0 md:bottom-0 top-0 md:top-auto bg-white flex items-center space-x-8 py-2 px-5">
                    <div>
                      <p className="text-[14px] text-ash mb-1">Area</p>
                      <h4>46,5 ha</h4>
                    </div>
                    <div>
                      <p className="text-[14px] text-ash mb-1">Style</p>
                      <h4>Futuristic</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-[1200px] min-h-[568px] bg-[#F7F7F7] mx-auto md:sticky md:top-0 text-primary grid grid-cols-12 group mb-8 md:mb-0">
                <div className="md:col-span-7 col-span-12 self-center md:px-16 px-4 md:py-0 py-4 md:order-1 order-2">
                  <h2>Oxburgh Hall</h2>
                  <p className="text-[14px] max-w-[498px] text-ash mt-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Faucibus tellus aenean sodales mattis id nisl. Facilisis ac
                    mattis nisi elementum. At feugiat vulputate amet,
                    condimentum risus quam. Tortor aliquam neque, vivamus non
                    massa purus cursus vitae.
                  </p>

                  <svg
                    viewBox="0 0 88 88"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="md:mt-24 mt-8 hover:opacity-80 transition-all duration-150 ease-linear cursor-pointer md:w-[88px] md:h-[88px] w-12 h-12"
                  >
                    <path
                      d="M14.6666 43.9999H73.3333M73.3333 43.9999L47.6666 18.3333M73.3333 43.9999L47.6666 69.6666"
                      stroke="black"
                      strokeWidth="8.58333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="md:col-span-5 col-span-12 overflow-hidden relative md:order-2 order-1">
                  <img
                    className="object-cover group-hover:transform group-hover:scale-150 transition-all duration-200 ease-linear"
                    src={Project2}
                    alt=""
                  />

                  <div className="absolute right-0 md:bottom-0 top-0 md:top-auto bg-white flex items-center space-x-8 py-2 px-5">
                    <div>
                      <p className="text-[14px] text-ash mb-1">Area</p>
                      <h4>21,3 ha</h4>
                    </div>
                    <div>
                      <p className="text-[14px] text-ash mb-1">Style</p>
                      <h4>Futuristic</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-[1200px] min-h-[568px] bg-[#FFFFFF] mx-auto md:sticky md:top-0 text-primary grid grid-cols-12 group mb-8 md:mb-0">
                <div className="md:col-span-7 col-span-12 self-center md:px-16 px-4 md:py-0 py-4 md:order-1 order-2">
                  <h2>St. Paul’s Cathedral</h2>
                  <p className="text-[14px] max-w-[498px] text-ash mt-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Faucibus tellus aenean sodales mattis id nisl. Facilisis ac
                    mattis nisi elementum. At feugiat vulputate amet,
                    condimentum risus quam. Tortor aliquam neque, vivamus non
                    massa purus cursus vitae.
                  </p>

                  <svg
                    viewBox="0 0 88 88"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="md:mt-24 mt-8 hover:opacity-80 transition-all duration-150 ease-linear cursor-pointer md:w-[88px] md:h-[88px] w-12 h-12"
                  >
                    <path
                      d="M14.6666 43.9999H73.3333M73.3333 43.9999L47.6666 18.3333M73.3333 43.9999L47.6666 69.6666"
                      stroke="black"
                      strokeWidth="8.58333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="md:col-span-5 col-span-12 overflow-hidden relative md:order-2 order-1">
                  <img
                    className="object-cover group-hover:transform group-hover:scale-150 transition-all duration-200 ease-linear"
                    src={Project3}
                    alt=""
                  />

                  <div className="absolute right-0 md:bottom-0 top-0 md:top-auto bg-white flex items-center space-x-8 py-2 px-5">
                    <div>
                      <p className="text-[14px] text-ash mb-1">Area</p>
                      <h4>62,8 ha</h4>
                    </div>
                    <div>
                      <p className="text-[14px] text-ash mb-1">Style</p>
                      <h4>Futuristic</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="py-16" id="about">
          <div className="grid md:grid-cols-2 grid-cols-1 container gap-3">
            <motion.div
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="self-center"
            >
              <p>About us</p>
              <h2 className="mt-1">
                Services made by people who are skilled at creating services for
                people who want services.
              </h2>

              <p className="mt-6 text-ash">
                We have established our company so that we may take an active
                role in each and every project and exercise some degree of
                discretion over the projects we accept. We employ people who are
                energetic, experienced, knowledgeable, and focused. Our team has
                been established based on empathy, industry expertise, practical
                negotiation skills, and trust.
              </p>
            </motion.div>
            <div className="md:pt-0 pt-8">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                src={AboutImg}
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="text-center bg-primary/50 md:py-20 py-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-white">Entrust us with your construction!</h1>
              <Button
                className={"md:mt-12 mt-6 mx-auto"}
                text={"Send inquiry"}
                type="outline"
                variant={"white"}
                onClick={() => setIsContactModalOpen(true)}
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
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              />
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
