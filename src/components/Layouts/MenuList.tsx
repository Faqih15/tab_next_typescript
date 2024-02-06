import React from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
// import { RowSpacingIcon, Cross2Icon } from "@radix-ui/react-icons";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

const CollapsibleDemo = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <span
          className="text-violet11 text-[15px] leading-[25px]"
          style={{ color: "red" }}>
          @peduarte starred 3 repositories
        </span>
        <Collapsible.Trigger asChild>
          <button className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 shadow-[0_2px_10px] shadow-blackA4 outline-none data-[state=closed]:bg-white data-[state=open]:bg-violet3 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black">
            {open ? <MdKeyboardArrowRight className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-black" />
                 : 
                  <MdKeyboardArrowDown className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-black" />}
          </button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content>
        <div className="bg-white rounded my-[10px] p-[10px] shadow-[0_2px_10px] shadow-blackA4">
          <span className="text-violet11 text-[15px] leading-[25px]">
            @radix-ui/colors
          </span>
        </div>
        <div className="bg-white rounded my-[10px] p-[10px] shadow-[0_2px_10px] shadow-blackA4">
          <span className="text-violet11 text-[15px] leading-[25px]">
            @stitches/react
          </span>
        </div>
      </Collapsible.Content>

      <div className="bg-white rounded my-[10px] p-[10px] shadow-[0_2px_10px] shadow-blackA4">
        <span className="text-violet11 text-[15px] leading-[25px]">
          @radix-ui/primitives show
        </span>
      </div>
    </Collapsible.Root>
  );
};

export default CollapsibleDemo;
