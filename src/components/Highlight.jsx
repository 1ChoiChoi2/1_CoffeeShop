import React from "react";

const Highlight = ({ icon, title, para }) => {
  return (
    <div className="landing__highlight">
      {icon}
      <h3>{title}</h3>
      <p>{para}</p>
    </div>
  );
};

export default Highlight;
