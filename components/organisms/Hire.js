import React from "react";
import HireStyles from "../../styles/hireStyles.module.css";
export default function Hire() {
  return (
    <div className={HireStyles.hireContainer}>
      <h4>
        Let's schedule some time to talk, I can help you with your problems!
      </h4>
      <h4>&bull; Do you have an idea that you want to make a reality?</h4>
      <h4>&bull; Are you struggling with your App or Website?</h4>
      <h4>&bull; Or, just need some help learning to code?</h4>
      <h3>Ways to reach out to me:</h3>
      <a href="mailto:ryan@ryanptrainor.com">ryan@ryanptrainor.com</a>
      <a
        href="https://twitter.com/messages/compose?recipient_id=834404942"
        data-screen-name="@rptrainor"
      >
        @rptrainor
      </a>
      <a href="https://wa.me/16127475815?text=How%20can%20you%20help%20me?">+1.612.747.5815</a>
    </div>
  );
}
