import React from "react";
import ProjectCoverStyles from "../../styles/projectCoverStyles.module.css";

export default function ProjectCover({
  logoUrl,
  logoAlt,
  title,
  platformList,
  urlParam,
}) {
  return (
    <div className={ProjectCoverStyles.projectCover}>
      <img src={logoUrl} alt={logoAlt} />
      <p>{title}</p>
      <p>{platformList}</p>
    </div>
  );
}
