import Link from "next/link";
import React from "react";

const GetStarted = () => {
  return (
    <div className="GetStarted">
      <section className="hidden xl:block image-section"></section>
      <form className="w-full xl:w-1/2">
        <section className="rectangle">
          <h2>Let&apos;s Get Started!</h2>

          <label>
            First name
            <input type="text" />
          </label>

          <label>
            Last name
            <input type="text" />
          </label>

          <label>
            Phone no.
            <input type="tel" placeholder="+2348012345678" />
          </label>

          <label>
            Password
            <input type="password" />
          </label>

          <p className="terms">
            Already have an account?&nbsp;
            <Link href={"/login"}>Login</Link>
          </p>

          <p className="terms">
            By continuing, you agree to our&nbsp;
            <span>Terms and conditions</span>
          </p>

          <button type="submit">Continue</button>
        </section>
      </form>
    </div>
  );
};

export default GetStarted;
