import React from "react";
import Head from "next/head";
import Link from "next/link";
import NavBar from "../organisms/Navbar";
import layoutStyles from "../../styles/layout.module.css";

export default function Layout({ children }) {
  const [wasFooterClicked, setWasFooterClicked] = React.useState(false);
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Ryan Trainor | React and React Native Engineer</title>
        <meta
          name="description"
          content="Ryan Trainor a freelance React and React Native Software Engineer"
        />
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
        <script
          id="mcjs"
          dangerouslySetInnerHTML={{
            __html: `
            !function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/0d8032ce5a1cdac3dbed01835/dfbf7f47dbe49c37ec78b1d46.js");
                `,
          }}
        />
      </Head>
      <div className={layoutStyles.container}>
        <img src="/images/ryan.jpeg" alt="Ryan Trainor" className="avatar" />
        <h2>Hello, I Am</h2>
        <h1>Ryan Trainor</h1>
        <h3>React &amp; React Native Software Engineer</h3>
        <NavBar />
      </div>
      <main>{children}</main>
      <footer
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a
          href="mailto:ryan@ryanptrainor.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setWasFooterClicked(true)}
        >
          {wasFooterClicked ? (
            <p>ryan@ryanptrainor.com</p>
          ) : (
            <p>Send me an email &amp; let's get your project going! 🚀</p>
          )}
        </a>
      </footer>
    </div>
  );
}
