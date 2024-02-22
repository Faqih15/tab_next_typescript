"use client";
import { useState } from "react";
import { MdClose } from "react-icons/md";

type KeySantri = {
  nama: string;
  nim: number;
  id_kelas: number;
  no_tabungan: string;
  orangtua: string;
  alamat: string;
  id_card: number;
  saldo: number;
  id: string;
};
export default function UpdateSantri({paramUpdate, onClose}: any) {
  return (
    <section>
      {/* <!-- Main modal --> */}
      <div>
        <div
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full max-h-full bg-gray-700/75"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg border border-blue-400 shadow">
              {/* <!-- Modal header --> */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                <h3 className="text-xl font-semibold text-gray-900">
                  Update Profil of <span className="bg-yellow-300 rounded-md p-2">{paramUpdate?.nama} </span>
                </h3>
                <button
                  type="button"
                  className="text-gray-700 bg-transparent hover:bg-gray-200 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  data-modal-hide="default-modal"
                  onClick={onClose}
                >
                  <MdClose />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              {!!paramUpdate ? (
                <form>
                  <div className="max-w-sm mx-auto py-5">
                    <div className="mb-3 flex flex-col-reverse">
                      <input
                        type="text"
                        id="username"
                        defaultValue={paramUpdate?.nama}
                        className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                        placeholder="nama"
                        required
                      />
                      <label className="text-base font-medium text-gray-900">
                        Your Name
                      </label>
                    </div>
                    <div className="mb-3 flex flex-col-reverse">
                      <input
                        type="number"
                        id="nim"
                        defaultValue={paramUpdate?.nim}
                        className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                        placeholder="nim"
                        required
                        min="10001"
                        max="99999"
                      />
                      <label className="text-base font-medium text-gray-900">
                        NIM
                      </label>
                    </div>
                    <div className="mb-3 flex flex-col-reverse">
                      <input
                        type="text"
                        id="class"
                        defaultValue={paramUpdate?.id_kelas}
                        className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                        placeholder="kelas"
                        required
                      />
                      <label className="text-base font-medium text-gray-900">
                        Kelas
                      </label>
                    </div>
                    <div className="mb-3 flex flex-col-reverse">
                      <input
                        type="text"
                        id="notab"
                        defaultValue={paramUpdate?.no_tabungan}
                        className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                        placeholder="no tabungan"
                        required
                      />
                      <label className="text-base font-medium text-gray-900">
                        No Tabungan
                      </label>
                    </div>
                    <div className="mb-3 flex flex-col-reverse">
                      <input
                        type="text"
                        id="ortu"
                        defaultValue={paramUpdate?.orangtua}
                        className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                        placeholder="nama orangtua"
                        required
                      />
                      <label className="text-base font-medium text-gray-900">
                        Nama Orangtua
                      </label>
                    </div>
                    <div className="mb-3 flex flex-col-reverse">
                      <input
                        type="text"
                        id="address"
                        defaultValue={paramUpdate?.alamat}
                        className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                        placeholder="alamat"
                        required
                      />
                      <label className="text-base font-medium text-gray-900">
                        Alamat
                      </label>
                    </div>
                    <div className="mb-3 flex flex-col-reverse">
                      <input
                        type="number"
                        id="idcard"
                        defaultValue={paramUpdate?.id_card}
                        className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                        placeholder="id card"
                        required
                      />
                      <label className="text-base font-medium text-gray-900">
                        ID Card
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700  text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center"
                    >
                      Save Editing
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-2xl text-red-600 text-bold py-5 px-4 text-center">
                  {" "}
                  error dataEdit undefined{" "}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
