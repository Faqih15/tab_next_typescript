"use client";
import { useState } from "react";
import { MdClose } from "react-icons/md";

type KeyClass = {
  nama: string;
  code: number;
  id: string;
};

export default function EditClass({ paramsId }) {
  // if i add {tabItem: KeySantri} in props, tabItem is not defined
  const [openNewTab, setOpenNT] = useState<boolean>(false);
  const [kelasEdit, setKelasEdit] = useState<KeyClass>();

  async function getClassId() {
    const res = await fetch(`http://localhost:5000/listclass/${paramsId}`, {
      cache: "no-store",
    });
    console.log("123 res", paramsId);
    return res.json();
    // to get value from localhost:5000 you must run the json-server on terminal with
    // npm run server
  }

  const showmodal = async () => {
    if (openNewTab === false) {
      const newData = await getClassId();
      setKelasEdit(newData);
      setOpenNT(true);
      console.log("1", newData);
    } else {
      console.log("else openNewTab");
      setOpenNT(false);
    }
  };

  return (
    <section>
      {/* <!-- Modal toggle --> */}
      <button
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        // className="bg-blue-600 hover:bg-blue-700  text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2 text-center"
        className="bg-blue-600 hover:bg-blue-700  text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        type="button"
        onClick={showmodal}>
        Edit Class
      </button>

      {/* <!-- Main modal --> */}
      <div className={openNewTab === false ? "hidden" : "block"}>
        <div
          id="default-modal"
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed inset-x-0 top-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-700/75">
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg border border-blue-400 shadow">
              {/* <!-- Modal header --> */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                <h3 className="text-xl font-semibold text-gray-900">
                  Edit Class {kelasEdit?.nama}
                </h3>
                <button
                  type="submit"
                  className="text-gray-700 bg-transparent hover:bg-gray-200 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  data-modal-hide="default-modal"
                  onClick={showmodal}>
                  <MdClose />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              {!!kelasEdit ? (
                <h1 className="text-lg text-blue-700 font-semibold text-center px-2 py-5">kelasEdit is defined</h1>
              ) : (
                <h1 className="text-lg text-red-500">kelasEdit is undefined</h1>
              )}
              <form>
                <div className="max-w-sm mx-auto py-5">
                  <div className="mb-4">
                    <label className="block mb-1 text-sm font-medium text-gray-900">
                      Edit Class
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
                    <label className="block mb-1 text-sm font-medium text-gray-900">
                      Edit Code
                    </label>
                    <input
                      type="number"
                      id="notab"
                      className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                      placeholder="nim"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700  text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Submit Edit Class
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
