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
  id: number;
};

export default function UpdateSantri({parameterId}) {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [dataEdit, setdataEdit] = useState<KeySantri>();

  async function getProfilSantri() {
    const res = await fetch(`http://localhost:5000/santri/${parameterId}`);
    return res.json();
    // to get value from localhost:5000 you must run the json-server on terminal with
    // npm run server
  }

  const showmodal = async () => {
    if (isOpen === false) {
      console.log(isOpen, "isOpen status");
      const newData = await getProfilSantri();
      setdataEdit(newData);
      setOpen(true);
      console.log("1", dataEdit);
    } else {
      console.log("else isOpen");
      setOpen(false);
      setdataEdit(undefined);
      console.log("2", dataEdit);
    }
  };

  return (
    <section>
      <button
        type="button"
        className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        onClick={showmodal}
      >
        Update
      </button>
      {/* <!-- Main modal --> */}
      <div className={isOpen === false ? "hidden" : "block"}>
        <div
          id="default-modal"
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed inset-x-0 top-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-700/75"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg border border-blue-400 shadow">
              {/* <!-- Modal header --> */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                <h3 className="text-xl font-semibold text-gray-900">
                  Update Profil of "{dataEdit?.nama}"
                </h3>
                <button
                  type="submit"
                  className="text-gray-700 bg-transparent hover:bg-gray-200 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  data-modal-hide="default-modal"
                  onClick={showmodal}
                >
                  <MdClose />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              {!!dataEdit ? (
                <form>
                  <div className="max-w-sm mx-auto py-5">
                    <div className="mb-3">
                      <label className="block text-base font-medium text-gray-900">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="username"
                        defaultValue={dataEdit?.nama}
                        className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                        placeholder="nama"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block text-base font-medium text-gray-900">
                        NIM
                      </label>
                      <input
                        type="number"
                        id="nim"
                        defaultValue={dataEdit?.nim}
                        className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                        placeholder="nim"
                        required
                        min="5"
                        max="5"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block text-base font-medium text-gray-900">
                        Kelas
                      </label>
                      <input
                        type="text"
                        id="class"
                        defaultValue={dataEdit?.id_kelas}
                        className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                        placeholder="kelas"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block text-base font-medium text-gray-900">
                        No Tabungan
                      </label>
                      <input
                        type="text"
                        id="notab"
                        defaultValue={dataEdit?.no_tabungan}
                        className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                        placeholder="no tabungan"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block text-base font-medium text-gray-900">
                        Nama Orangtua
                      </label>
                      <input
                        type="text"
                        id="ortu"
                        defaultValue={dataEdit?.orangtua}
                        className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                        placeholder="nama orangtua"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block text-base font-medium text-gray-900">
                        Alamat
                      </label>
                      <input
                        type="text"
                        id="address"
                        defaultValue={dataEdit?.alamat}
                        className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                        placeholder="alamat"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block text-base font-medium text-gray-900">
                        ID Card
                      </label>
                      <input
                        type="number"
                        id="idcard"
                        defaultValue={dataEdit?.id_card}
                        className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                        placeholder="id card"
                      />
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
