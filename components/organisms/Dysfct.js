import React from "react";

export default function Dysfct() {
  return (
    <div>
      <h1>Pushquery iOS App</h1>
      <img src="/images/dysfct/screenshot1.png" />
      <img src="/images/dysfct/screenshot2.png" />
      <img src="/images/dysfct/screenshot3.png" />
      <h2>Functionality Built:</h2>
      <ul>
        <li>Fully mobile responsive Progressive Web Application (PWA)</li>
        <li>
          Users are greated with a prompt to enter their Minnesota zip code and
          are returned a page that provides details about how thier particular
          state senator voted on a bill
        </li>
        <li>
          Was able to populate the application's file system with all of the
          data using an excel spreadsheet, by using Gatsby
        </li>
      </ul>
      <h2>Tech Stack:</h2>
      <ul>
        <li>React</li>
        <li>Mobile Responsive CSS</li>
        <li>Styled Components</li>
        <li>Gatsby</li>
        <li>Gatsby CSV Data Source</li>
        <li>Gatsby Programmatically Creating Pages</li>
        <li>Continuous Integration / Continuous Deployment (CI/CD)</li>
      </ul>
      <h3>
        Link:{" "}
        <a href="https://DidYourSenatorFightConversionTherapy.com">
          DidYourSenatorFightConversionTherapy.com
        </a>
      </h3>
    </div>
  );
}
