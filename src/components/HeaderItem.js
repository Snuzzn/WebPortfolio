import React from "react";
function HeaderItem({ title, Icon, link }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 dark:text-white">
      <Icon
        className="transform hover:-translate-y-2 transition-all duration-150 z-12"
        size="2.5em"
      />
      <div className="opacity-0 group-hover:opacity-100 -mt-2 transition-all duration-150">
        {title}
      </div>
    </div>
  );
}

export default HeaderItem;
