import React from "react";

const IconComponant = ({ icon }) => {
  return (
    <a href={icon.lien} className="icon_componant">
      <img src={icon.icon} alt={icon.name} />
    </a>
  );
};

export default IconComponant;
