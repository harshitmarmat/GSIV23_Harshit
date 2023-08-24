import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import _ from "lodash";

const LayoutWrapper = ({
  children,
  search = false,
  title = "",
  searchTrigger,
}) => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <header className="fixed z-50 top-0 bg-white w-full h-[60px] shadow-[rgba(0,0,0,0.24)_0px_3px_8px] flex items-center justify-between px-4">
        {search && (
          <div className="w-[60%]">
            <SearchIcon className="absolute top-[18px] left-[21px]" />
            <input
              placeholder="Search"
              className="w-full pl-8 rounded-[5px] h-[35px] bg-[#DFDFDE] pr-2"
              type="text"
              onChange={_.debounce(searchTrigger, 500)}
            />
          </div>
        )}
        {title && <p className=" text-[1.6rem] font-semibold">{title}</p>}
        <HomeIcon
          onClick={() => navigate("/list")}
          className=" cursor-pointer"
        />
      </header>
      <div className="mt-[60px]">{children}</div>
      <footer></footer>
    </React.Fragment>
  );
};

export default LayoutWrapper;
