'use client'
import { useState } from "react";
import { MdLogout } from "react-icons/md";

export default function WarningSignout() {
  // const [first, setfirst] = useState<string>();
  const [isOpen, setOpen] = useState<boolean>(false);
  const showmodal = () => {
    if (isOpen === false) {
      console.log(isOpen, 'isOpen status');
      setOpen(true)
    } else {
      console.log("else isOpen");
      setOpen(false)
    }
  }
  return (
    <section>
      {/* <!-- Modal toggle --> */}
      <button onClick={showmodal} className="flex items-start w-full p-2 text-red-700 rounded-lg hover:bg-gray-100 group">
        <MdLogout className="w-6 h-6 transition duration-75 group-hover:text-red-600"/>
        <span className="ms-3 whitespace-nowrap group-hover:text-red-600">Sign Out</span>
      </button>
      {/* <!-- Main modal --> */}
      <div className={(isOpen === false ? "hidden" : "block")}>
        <div id="default-modal" aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed inset-x-0 top-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" >
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
                  <a href="/auth" className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center">Sign Out</a>
                  <button type="submit" className=" bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center" onClick={showmodal} >Cancel</button>
                </div>
              </form>
              {/* <!-- Modal footer --> */}
              {/* <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
                <button data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">I accept</button>
                <button data-modal-hide="default-modal" type="button" className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Decline</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
  