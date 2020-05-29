import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <Link href="/">
        <a>My Apps</a>
      </Link>
      <Link href="/hire">
        <a>Want Help?</a>
      </Link>
      <Link href="/contact">
        <a>Let's Chat</a>
      </Link>
    </div>
  );
}
