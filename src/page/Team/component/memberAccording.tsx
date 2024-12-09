import { useState } from "react";
import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
} from "@mui/icons-material";
type MemberAccordingType = {
  name: string;
  picture: string;
  describe: string;
};
const MemberAccording = (props: MemberAccordingType) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={` bg-bgmain rounded-tl-[48px] lg:rounded-tl-[68px] ${
        isOpen ? "rounded-bl-lg" : "rounded-bl-[80px]"
      } rounded-r-lg`}
    >
      <div className="flex gap-3 md:gap-4">
        <img
          src={props.picture}
          alt={props.name}
          className="rounded-full w-16 h-16 md:w-20 md:h-20"
        />
        <div className="flex gap-5 md:justify-between w-full">
          <div>
            <h4 className="text-color10 font-semibold mt-2 lg:mt-3">
              {props.name}
            </h4>
            <p
              className={`leading-loose text-sm font-light md:w-[200px] lg:w-[750px] hidden md:block ${
                isOpen
                  ? "pb-3"
                  : "overflow-hidden whitespace-nowrap text-ellipsis"
              }`}
            >
              {props.describe}
            </p>
          </div>
          <div className="my-auto mr-5">
            {isOpen ? (
              <KeyboardArrowUpOutlined
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <KeyboardArrowDownOutlined
                className="cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>
      </div>
      <div className="mx-4">
        <p
          className={`leading-loose text-xs font-light md:hidden ${
            isOpen ? "py-3" : "hidden"
          }`}
        >
          {props.describe}
        </p>
      </div>
    </div>
  );
};
export default MemberAccording;
