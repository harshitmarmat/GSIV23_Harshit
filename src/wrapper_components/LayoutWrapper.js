import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from '@mui/icons-material/Search';
const LayoutWrapper = ({ children, search = true }) => {
  return (
    <React.Fragment>
      <header className="w-full h-[60px] shadow-[rgba(0,0,0,0.24)_0px_3px_8px] flex items-center justify-between px-4">
        {search && (
          <div className="w-[60%]">
            <SearchIcon className="absolute top-[18px] left-[21px]"/>
            <input placeholder="Search" className="w-full pl-8 rounded-[5px] h-[35px] bg-[#DFDFDE] pr-2" type="text" />
          </div>
        )}
        <HomeIcon className=" cursor-pointer" />
      </header>
      <body>{children}</body>
      <footer></footer>
    </React.Fragment>
  );
};

export default LayoutWrapper;
