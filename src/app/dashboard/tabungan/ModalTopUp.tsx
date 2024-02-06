"use client";
import { MdClose } from "react-icons/md";

type KeySantri = {
  nama: string;
  nim: number;
  orangtua: string;
  id_kelas: number;
  alamat: string;
  id_card: number;
  saldo: number;
  id: string;
  no_tabungan: string;
};

export default function AddSaldo({item, onClose} :any) {
  console.log(item)
  return (
    <section>
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
                  Top Up Tabungan of {item?.nama}
                </h3>
                <button
                  type="submit"
                  className="text-gray-700 bg-transparent hover:bg-gray-200 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  data-modal-hide="default-modal"
                  onClick={onClose}
                >
                  <MdClose />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              {!!item ? (
                <form>
                  <div className="max-w-sm mx-auto py-5">
                    <div className="mb-3">
                      <label className="block text-base font-medium text-gray-900">
                        Nama Santri
                      </label>
                      <input
                        type="text"
                        id="username"
                        defaultValue={item?.nama}
                        className="shadow-sm bg-gray-50 border border-gray-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                        placeholder="nama"
                        required
                        disabled
                        readOnly
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block text-base font-medium text-gray-900">
                        No Tabungan
                      </label>
                      <input
                        type="text"
                        id="no_tabungan"
                        defaultValue={item?.no_tabungan}
                        className="shadow-sm bg-gray-50 border border-gray-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                        placeholder="nim"
                        required
                        disabled
                        readOnly
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block text-base font-medium text-gray-900">
                        NIM
                      </label>
                      <input
                        type="number"
                        id="nim"
                        defaultValue={item?.nim}
                        className="shadow-sm bg-gray-50 border border-gray-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                        placeholder="nim"
                        required
                        disabled
                        readOnly
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block text-base font-medium text-gray-900">
                        Uang masuk
                      </label>
                      <input
                        type="number"
                        id="saldoin"
                        defaultValue="0"
                        className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                        placeholder="nim"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700  text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Submit Nabung
                    </button>
                    {/* <div className="text-2xl text-red-600 text-bold uppercase py-5 px-4 text-center">error</div> */}
                  </div>
                </form>
              ) : (
                <div className="text-2xl text-red-600 text-bold py-5 px-4 text-center">error item undefined</div>
              )}
          </div>
        </div>
      </div>
    </section>
  );
}
