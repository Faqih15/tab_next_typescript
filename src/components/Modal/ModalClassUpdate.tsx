/* eslint-disable react/no-unescaped-entities */
"use client";
import { MdClose } from "react-icons/md";

type KeyClass = {
  nama: string;
  code: number;
  id: string;
};

export default function UpdateClass({dataUpClass, onClose} :any) {
  console.log('item', dataUpClass)
  return (
    <section>
      {/* <!-- Main modal --> */}
      <div>
        <div
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full max-h-full bg-gray-700/75"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg border border-blue-400 shadow">
              {/* <!-- Modal header --> */}
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Edit Class <span className="bg-yellow-300 rounded-md p-2">{ dataUpClass.nama }</span>
                  </h3>
                  <button
                    type="button"
                    className="text-gray-700 bg-transparent hover:bg-gray-200 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                    onClick={onClose}>
                    <MdClose />
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                {/* <!-- Modal body --> */}
                {!!dataUpClass ? (
                  <form autoComplete="off">
                    <div className="max-w-sm mx-auto py-5">
                      <div className="mb-4">
                        <label className="block mb-1 text-sm font-medium text-gray-900">
                          Edit Class
                        </label>
                        <input
                          type="text"
                          id="username"
                          defaultValue={dataUpClass.nama}
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
                          defaultValue={dataUpClass.code}
                          className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                          placeholder="nim"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700  text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        Submit Edit Class
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="text-2xl text-red-600 text-bold py-5 px-4 text-center"> error when sending 'dataUpClass' as props </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
