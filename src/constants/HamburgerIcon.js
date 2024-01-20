import React from 'react';

const HamburgerIcon = ({showNav,handleShowNav}) => {
  

  return (
    <div className="cursor-pointer " onClick={handleShowNav}>
      <div
        className={`w-6 h-[4px] bg-headingColor transition-transform ${
          showNav ? 'rotate-45 translate-y-2' : ''
        }`}
      ></div>
      <div
        className={`w-3 h-[4px] bg-headingColor my-1 transition-opacity ${
          showNav ? 'opacity-0' : ''
        }`}
      ></div>
      <div
        className={`w-6 h-[4px] text-2xl bg-headingColor transition-transform ${
          showNav ? '-rotate-45 -translate-y-3' : ''
        }`}
      ></div>
    </div>
  );
};

export default HamburgerIcon;
