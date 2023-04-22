import {auth, db} from "@/firebase/client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { useRouter } from "next/router";

const GetStarted = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const uid = user.uid;

      await setDoc(doc(db, "users", uid), {
        firstname: firstName,
        lastname: lastName,
        phoneno: phoneNumber,
      });

      router.push({
        pathname: "/home",
        query: { firstName: firstName },
      });
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Sign-up | NEXTGEN Doctors</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="GetStarted">
        <section className="hidden xl:block image-section"></section>
        <form className="w-full form xl:w-1/2" onSubmit={handleSignUp}>
          <div className="full">
            <section className="rectangle">
              <h2>Let&apos;s Get Started!</h2>

              <label>
                First Name
                <input
                  type="text"
                  placeholder="John"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </label>

              <label>
                Last Name
                <input
                  type="text"
                  placeholder="Doe"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                />
              </label>

              <label>
                Phone Number
                <input
                  type="tel"
                  placeholder="+2348012345678"
                  value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event.target.value)}
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  placeholder="john.doe@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </label>

              <label>
                Password
                <input
                  type="password"
                  placeholder="**********"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </label>

              {errorMessage && (
                <p className="text-white">{errorMessage}</p>
              )}

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
          </div>
        </form>
      </div>
    </>
  );
};

export default GetStarted;
