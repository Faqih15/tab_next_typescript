"use client";
import { useState } from "react";

export default function NewClass() {
  // const [first, setfirst] = useState<string>();
  const [isOpen, setOpen] = useState<boolean>(false);
  const showmodal = () => {
    if (isOpen === false) {
      console.log(isOpen, "isOpen status");
      setOpen(true);
    } else {
      console.log("else isOpen");
      setOpen(false);
    }
  };
  return (
    <section className="my-5">
      {/* <!-- Modal toggle --> */}
      <button
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        className="button-blue block text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center"
        type="button"
        onClick={showmodal}>
        Add New Class
      </button>
      {/* <!-- Main modal --> */}
      <div className={isOpen === false ? "hidden" : "block"}>
        <div
          id="default-modal"
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed inset-x-0 top-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-700/75">
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg border border-blue-400 shadow">
              {/* <!-- Modal header --> */}
              <form>
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {" "}
                    Add New Class
                  </h3>
                  <button
                    type="submit"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                    data-modal-hide="default-modal"
                    onClick={showmodal}>
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14">
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                {/* <!-- Modal body --> */}
                <div className="max-w-sm mx-auto py-5">
                  <div className="mb-4">
                    <label className="block text-base font-medium text-gray-900">
                      New Class
                    </label>
                    <input
                      type="text"
                      id="username"
                      className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                      placeholder="nama"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-base font-medium text-gray-900">
                      Code
                    </label>
                    <input
                      type="number"
                      id="code"
                      className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                      placeholder="nim"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center">
                    Register new Class
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
