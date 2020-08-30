import React from "react";
import HireStyles from "../../styles/hireStyles.module.css";
export default function Hire() {
  return (
    <div className={HireStyles.hireContainer}>
      <h2>Let's schedule some time to talk,</h2>
      <h2>I can help you with your problems!</h2>
      <h4>&bull; Do you have an idea that you want to make a reality?</h4>
      <h4>&bull; Are you struggling with your App or Website?</h4>
      <h4>&bull; Or, just need some help learning to code?</h4>
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
