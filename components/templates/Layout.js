import React from "react";
import Head from "next/head";
import Link from "next/link";
import NavBar from "../organisms/Navbar";
import layoutStyles from "../../styles/layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Ryan Trainor | React and React Native Engineer</title>
        <meta name="description" content="A portfolio page for Ryan Trainor" />
        <meta
          property="og:image"
          content={`https://res.cloudinary.com/dx35aw3ub/image/upload/v1578940252/ryan_i2wi97.jpg`}
        />
        <meta
          name="og:title"
          content="Ryan Trainor | React and React Native Engineer"
        />
        <meta
          name="twitter:card"
          content={`https://res.cloudinary.com/dx35aw3ub/image/upload/v1578940252/ryan_i2wi97.jpg`}
        />
      </Head>
      <div>
        <div className={layoutStyles.container}>
          <img
            src="/images/ryan.jpeg"
            alt="profile picture of Ryan"
            className={layoutStyles.avatar}
          />
          <h2>Hello, I Am</h2>
          <h1>Ryan Trainor</h1>
          <NavBar />
        </div>
      </div>
      <main>{children}</main>
      <footer>
        <a href="mailto:ryan@ryanptrainor.com">
          <p>{`made with ❤️  by ryan trainor`}</p>
        </a>
      </footer>
    </div>
  );
}
