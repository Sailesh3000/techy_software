"use client";
import { motion } from "framer-motion";
import { Element } from 'react-scroll';
import React from "react";
import { ImagesSlider } from "../components/ui/image-slider";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";



function Home() {
  const content = [
    {
      title: "Custom Software Development",
      description:
        "From concept to deployment, we create custom software solutions that are designed to solve your specific business challenges.",
        content: (
          <div className="h-full w-full  flex items-center justify-center text-white">
            <img
              src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={700}
              height={700}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
    },
    {
      title: "Mobile App Development",
      description:
        "Reach your customers on the go with our user-friendly, high-performance mobile applications for iOS and Android.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={700}
            height={700}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Web Development",
      description:
        "Build a robust online presence with our expertly crafted websites and web applications, tailored to your business needs.",
        content: (
          <div className="h-full w-full  flex items-center justify-center text-white">
            <img
              src="https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={700}
              height={700}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
    },
    {
      title: "Cloud Solutions",
      description:
        "Leverage the power of the cloud with our scalable and secure cloud computing services, designed to optimize your business operations.",
        content: (
          <div className="h-full w-full  flex items-center justify-center text-white">
            <img
              src="https://plus.unsplash.com/premium_photo-1683141114059-aaeaf635dc05?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={700}
              height={700}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
    },
    {
      title: "AI and Machine Learning",
      description:
        "Stay ahead of the competition with our AI and machine learning solutions that provide insightful analytics and automated processes.",
        content: (
          <div className="h-full w-full  flex items-center justify-center text-white">
            <img
              src="https://images.unsplash.com/photo-1535378620166-273708d44e4c?q=80&w=2157&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={700}
              height={700}
              className="h-full w-full object-cover rounded-lg"
              alt="linear board demo"
            />
          </div>
        ),
    },
  ];

  // ---------------------->

  const words1 = `Techy Solutions is a leading software development company that specializes in creating high-performance, scalable, and secure software applications. With years of experience and a passion for technology, we are dedicated to helping businesses thrive in the digital age.`;
  const words2 = `Our mission is to drive business success through innovative technology. We aim to provide top-quality software solutions that enhance productivity, streamline operations, and foster growth.`;
  const images = [
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <>
    <ImagesSlider className="h-[60rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Grow your Business with <br /> Techy Software
        </motion.p>
        <p className="text-white text-xl text-center">Innovative Software Solutions for Modern Businesses</p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-blue-500/10 border-blue-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Contact now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-blue-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
    <marquee className="bg-[#3ABEF9] w-full h-full p-2"><span className="text-2xl font-mono">Join Our Team |</span><span className="text-2xl"> Are you passionate about technology and innovation? Join our team and help us create the future of software solutions. Explore our current job openings and apply today .|</span></marquee>
    {/*About Section*/}
    <Element name="about">
    <section className="px-12">
      <div className="xl:flex xl:flex-row xl:justify-between xl:px-8 xl:py-16 md:flex md:flex-col sm:px-2 sm:py-8">
      <div className="p-4">
      <h1 className="text-center text-[#3ABEF9] text-5xl font-mono">About Us</h1>
      <p className="text-4xl font-serif text-black py-4"> Who we are ?</p>
      <TextGenerateEffect words={words1} />
      <p className="text-4xl font-serif text-black py-4">Our Mission</p>
      <TextGenerateEffect words={words2} />
      </div>
      <div className="p-4">
        <img src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height="1450px" width="1450px" className="md:h-[35rem] md:w-[200rem] xl:w-[180rem]" alt=""/>
      </div>
      </div>
    </section>
    </Element>
    {/* Our Services */}
    <Element name="services">
    <section>
    <div>
    <h1 className="text-5xl text-[#3ABEF9] text-center bg-[#31363F] py-24 font-serif">Our Services</h1>
      <StickyScroll content={content} />
    </div>
    </section>
    </Element>
    {/* Contact US */}
    <Element name="contact">
    <section className="px-12" >
        <div className="xl:flex xl:flex-row xl:justify-between xl:px-8 xl:py-16 md:flex md:flex-col sm:px-2 sm:py-8">
          <div className="p-4 px-8">
            <h1 className="text-center text-[#3ABEF9] text-5xl font-mono">
              Contact Us
            </h1>
            <p className="text-4xl font-serif text-black py-4">Get in touch</p>
            <p className="text-2xl font-serif text-black py-2">
              We'd love to hear from you! Reach out to us through any of the
              following ways:
            </p>
            <p className="text-2xl font-serif text-black py-2">
              <strong>Phone:</strong> +1 (123) 456-7890
            </p>
            <p className="text-2xl font-serif text-black py-2">
              <strong>Email:</strong> contact@techysolutions.com
            </p>
            <p className="text-2xl font-serif text-black py-2">
              <strong>Location:</strong> 123 Techy Lane, Innovation City, TX
            </p>
          </div>
          <div className="p-4 px-8">
            <img
              src="https://images.unsplash.com/photo-1520923642038-b4259acecbd7?q=80&w=2019&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Add the correct path to your uploaded image
              className="md:h-[25rem] md:w-[50rem] xl:w-[35rem] xl:h-[25rem] xl:rounded-full md:rounded-full"
              alt="Contact Us"
            />
          </div>
        </div>
      </section>
      </Element>
    </>
  );
}

export default Home;