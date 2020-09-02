import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  // console.log(router.route);
  // const pathname = router.route;
  // console.log(router.route == "/hire");
  return (
    <div className="navbar">
      <Link href="/">
        <a className={router.route == "/" ? "active" : "inactive"}>
          What have I built?
        </a>
      </Link>
      <Link href="/hire">
        <a className={router.route == "/hire" ? "active" : "inactive"}>
          Need help with your App or Website?
        </a>
      </Link>
      <Link href="/contact">
        <a className={router.route == "/contact" ? "active" : "inactive"}>
          Let's talk about your project!
        </a>
      </Link>
    </div>
  );
}
