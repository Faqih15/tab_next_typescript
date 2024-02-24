"use client";
import { useState } from "react";
import { MdClose } from "react-icons/md";

type KeyClass = {
  nama: string;
  code: string;
};

export default function NewClass() {
  // const [first, setfirst] = useState<string>();
  const [isOpen, setOpen] = useState<boolean>(false);
  const [dataInput, setDataInput] = useState<KeyClass>({
    nama: '',
    code: '',
  });

  const onInput = (e: any) => {
    setDataInput({ ...dataInput, [e.target.id]: e.target.value });
    console.log("dataInput", dataInput);
    // console.log("e.target.id", e.target.id);
  };

  const sendFormData = (e: any) => {
    e.preventDefault();
    const newClass = async () => {
      const sendData = {
        nama: dataInput.nama,
        code: dataInput.code,
      };
      const response = await fetch("http://localhost:5000/listclass", {
        method: "POST",
        body: JSON.stringify(sendData),
      });
      // console.log(sendData, "data 68");
      return response.json();
    };
    newClass().then((data) => {
      console.log(data, "data.message");
      // alert(data.message);
    });
    e.target.reset();
    setOpen(false);
  };

  const showmodal = () => {
    if (isOpen === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  return (
    <section className="my-5">
      {/* <!-- Modal toggle --> */}
      <button
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        className="bg-blue-600 hover:bg-blue-700  block text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center"
        type="button"
        onClick={showmodal}>
        Add New Class
      </button>
      {/* <!-- Main modal --> */}
      <div className={isOpen === false ? "hidden" : "block"}>
        <div
          id="default-modal"
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full max-h-full bg-gray-700/75">
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg border border-blue-400 shadow">
              {/* <!-- Modal header --> */}
              <form autoComplete="off" onSubmit={sendFormData}>
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {" "}
                    Add New Class
                  </h3>
                  <button
                    type="button"
                    className="text-gray-700 bg-transparent hover:bg-gray-200 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                    data-modal-hide="default-modal"
                    onClick={showmodal}>
                    <MdClose />
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
                      onChange={onInput}
                      type="text"
                      id="nama"
                      className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                      placeholder="nama kelas"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-base font-medium text-gray-900">
                      Code
                    </label>
                    <input
                      onChange={onInput}
                      type="text"
                      id="code"
                      className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                      placeholder="nim"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700  text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center">
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
