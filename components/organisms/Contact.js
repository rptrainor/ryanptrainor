import React from "react";
import ContactStyles from "../../styles/contactStyles.module.css";

export default function Contact() {
  return (
    <div className={ContactStyles.contactContainer}>
    <h2>I am really looking forward to discussing your current project with you</h2>
    <h2>Please send me an email or Twitter DM and let's start talking today</h2>
    <h3>Ways to reach out to me:</h3>
    <a href="mailto:ryan@ryanptrainor.com">Email: ryan@ryanptrainor.com</a>
    <a
      href="https://twitter.com/messages/compose?recipient_id=834404942"
      data-screen-name="@rptrainor"
    >
      Twitter: @rptrainor
    </a>
  </div>
  );
}
