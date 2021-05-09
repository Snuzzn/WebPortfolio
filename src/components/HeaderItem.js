import React from "react";
function HeaderItem({ title, Icon, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Icon
        className="transform hover:-translate-y-2 transition-all duration-150 z-12 cursor-pointer "
        size="3em"
      />
    </a>
  );
}

export default HeaderItem;
