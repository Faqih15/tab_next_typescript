'use client'
import { useState } from "react";

export default function NewSantri() {
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
    <section className="my-5">
      {/* <!-- Modal toggle --> */}
      <button data-modal-target="default-modal" data-modal-toggle="default-modal" className="button-blue block text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center" type="button" onClick={showmodal}>
        Add New Profil
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
                    <h3 className="text-xl font-semibold text-gray-900">
                        Add New Profil
                    </h3>
                    <button type="submit" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-base w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="default-modal" onClick={showmodal}>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                {/* <!-- Modal body --> */}
                <div className="max-w-sm mx-auto py-5">
                  <div className="mb-3">
                    <label className="block text-base font-medium text-gray-900">Your Name</label>
                    <input type="text" id="username" className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" placeholder="nama" required />
                  </div>
                  <div className="mb-3">
                    <label className="block text-base font-medium text-gray-900">NIM</label>
                    <input type="number" id="nim" className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" placeholder="nim" required min="5" max="5" />
                  </div>
                  <div className="mb-3">
                    <label className="block text-base font-medium text-gray-900">Kelas</label>
                    <input type="text" id="class" className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" placeholder="kelas" />
                  </div>
                  <div className="mb-3">
                    <label className="block text-base font-medium text-gray-900">No Tabungan</label>
                    <input type="number" id="notab" className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" placeholder="no tabungan" required />
                  </div>
                  <div className="mb-3">
                    <label className="block text-base font-medium text-gray-900">Nama Orangtua</label>
                    <input type="text" id="ortu" className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" placeholder="nama orangtua" required />
                  </div>
                  <div className="mb-3">
                    <label className="block text-base font-medium text-gray-900">Alamat</label>
                    <input type="text" id="address" className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" placeholder="alamat" required />
                  </div>
                  <div className="mb-3">
                    <label className="block text-base font-medium text-gray-900">ID Card</label>
                    <input type="number" id="idcard" className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" placeholder="id card" />
                  </div>
                  <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                      <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-blue-400 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                    </div>
                    <label className="ms-2 text-base font-medium text-gray-900">I agree with the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a></label>
                  </div>
                  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center">Register new account</button>
                </div>
              </form>
              {/* <!-- Modal footer --> */}
              {/* <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
                <button data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center">I accept</button>
                <button data-modal-hide="default-modal" type="button" className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-base font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Decline</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
  