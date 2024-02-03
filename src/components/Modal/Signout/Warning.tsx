"use client";
import { useEffect, useState } from "react";
import { MdLogout } from "react-icons/md";

export default function WarningSignout() {
  // const [first, setfirst] = useState<string>();
  const [isOpen, setOpen] = useState<boolean>(false);
  // const [colorize, setColorize] = useState<boolean>(false);

  const showmodal = (e: any) => {
    e.preventDefault()
    if (isOpen === false) {
      console.log(isOpen, "isOpen status");
      setOpen(true);
    } else {
      console.log("else isOpen");
      setOpen(false);
    }
  };
  
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setColorize((prevColorize) => !prevColorize);
  //     console.log("colorize", colorize);
  //   }, 1000);
  //   // Clear the interval when the component unmounts
  //   return () => clearInterval(intervalId);
  // }, []); // Empty dependency array to run the effect only once on mount

  return (
    <section>
      {/* <!-- Modal toggle --> */}
      <button
        onClick={(e)=>showmodal(e)}
        className="flex items-center w-full p-2 text-red-700 rounded-lg hover:bg-gray-100 group"
      >
        <MdLogout className="w-8 h-8 transition duration-75 group-hover:text-red-600" />
        <span className="ms-3 text-lg font-semibold whitespace-nowrap group-hover:text-red-600">
          Sign Out
        </span>
      </button>
      {/* <!-- Main modal --> */}
      <div className={isOpen === false ? "hidden" : "block"}>
        <div
          id="default-modal"
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed inset-x-0 top-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg border border-blue-400 shadow">
              {/* <!-- Modal header --> */}
              <form>
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                  <h3 className="text-xl font-semibold text-red-500">
                    Are You Sure to Sign Out?
                  </h3>
                </div>
                {/* <!-- Modal body --> */}
                <div className="max-w-sm py-5 flex flex-col gap-3 px-3">
                  <a
                    href="/auth"
                    className="button-red text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-base px-5 py-2.5 text-center"
                  >
                    Sign Out
                  </a>
                  <button 
                    type="button"
                    className="button-gray text-black focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-base px-5 py-2.5 mb-2 text-center"
                    onClick={showmodal}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
