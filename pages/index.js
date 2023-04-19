import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Splash from "@/components/Splash-Screen/Splash";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | NEXTGEN Doctors</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Splash />
        <section className="lg:pt-28 pt-12 flex flex-col items-center justify-start w-full h-full gap-10">
          <div className="w-full flex flex-col items-center px-4 sm: px-20">
            <Image
              src={"/landingPage.svg"}
              width={400}
              height={400}
              alt="placeholderImg"
            />
          </div>
          <div className="w-full flex flex-col text-black dark:text-white items-center px-4 sm:px-20">
            <h1 className="text-4xl font-bold w-full text-center">
              Get Medical Consultation from Home
            </h1>
            <br />
            <p className="w-full text-center text-xl">
              Welcome to <b className="text-[#2A9988]">NextGen Doctors</b> where
              you can receive medical care from the comfort of your own home.
            </p>
            <button className="p-2 w-1/2 bg-[#2A9988] mt-6 sm:mt-10 rounded-md text-white font-semibold text-xl">
              <Link href="/">Get Started</Link>
            </button>
          </div>
          <div className="w-full flex flex-col items-end text-black dark:text-white">
            <div className="w-full flex flex-col items-center px-4 sm:px-20">
              <h1 className="text-xl font-bold w-full text-center">
                Expert Care from Trusted Medical Professionals
              </h1>
              <p className="w-full text-center text-md sm:text-lg font-light sm:font-normal">
                Our medical professionals undergo a rigorous screening and
                selection process before they join our team. When you receive an
                online medical consultation through our service, you can trust
                that you're getting expert advice and guidance from a qualified
                medical professional.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-end pb-20 sm:pb-24 bg-[#2A9988] text-white py-10 overflow-hidden relative">
            <Image
              src={"/stetoscope.svg"}
              width={600}
              height={600}
              alt="placeholderImg"
              className="absolute blur-sm overflow-hidden"
            />
            <h1 className="w-full text-left text-2xl font-bold px-5 sm:px-20">
              FAQs:
            </h1>
            <br />
            <ul className="px-5 sm:px-20 z-10">
              <li className="text-xl">
                How do I sign up for an online medical consultation?
              </li>
              <li className="font-light text-sm">
                Signing up is easy! Simply create an account on our website and
                provide some basic information about yourself. Once you've
                created an account, you can schedule a consultation with one of
                our medical professionals at a time that's convenient for you.
              </li>
              <br />
              <li className="text-xl">
                How do I pay for my online medical consultation?
              </li>
              <li className="font-light text-sm">
                We accept a variety of payment methods, including debit cards,
                and Bank Transfers. You'll be asked to provide payment
                information when you schedule your consultation.
              </li>
              <br />
              <li className="text-xl">
                Is my personal and medical information secure?
              </li>
              <li className="font-light text-sm">
                Yes! We take the security and privacy of your personal and
                medical information very seriously.
              </li>
              <br />
              <li className="text-xl">
                What if I need to cancel or reschedule my consultation?
              </li>
              <li className="font-light text-sm">
                If you need to cancel or reschedule your consultation, simply
                log in to your account and make the changes. Please note that we
                have a 24-hour cancellation policy, so be sure to cancel or
                reschedule at least 24 hours before your scheduled consultation.
              </li>
            </ul>
          </div>
        </section>
        <Nav />
      </main>
    </>
  );
}
