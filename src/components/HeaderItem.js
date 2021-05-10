import React from "react";
function HeaderItem({ title, Icon, link }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12">
      <Icon
        className="transform hover:-translate-y-2 transition-all duration-150 z-12"
        size="3em"
      />
      <div className="opacity-0 group-hover:opacity-100 transition-all duration-150">
        {title}
      </div>
    </div>
  );
}

export default HeaderItem;
