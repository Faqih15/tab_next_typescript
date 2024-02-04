"use client";

import { useState } from "react";
import { MdClose } from "react-icons/md";

type KeySantri = {
  nama: string;
  nim: number;
  orangtua: string;
  id_kelas: number;
  alamat: string;
  id_card: number;
  saldo: number;
  id: number;
  no_tabungan: string;
};

export default function AddSaldo(id: any) {
  // if i add {tabItem: KeySantri} in props, tabItem is not defined
  const [openNewTab, setOpenNT] = useState<boolean>(false);
  const [dataForTopup, setDataForTopup] = useState<KeySantri>();
  
  // const [dataForTopup, setDataForTopup] = useState<KeySantri>();
  
  console.log("tabItem id", id)

  async function getTabSantri() {
    const res = await fetch("http://localhost:5000/santri/16f8");
    console.log("123 res", res)
    return res.json();
    // to get value from localhost:5000 you must run the json-server on terminal with
    // npm run server
  }

  const showmodal = async () => {
    if (openNewTab === false) {
      const newData = await getTabSantri();
      setDataForTopup(newData);
      setOpenNT(true);
      console.log("1", dataForTopup);
    } else {
      setOpenNT(false);
      setDataForTopup(undefined);
      console.log("2", dataForTopup);
    }
  };

  // console.log(tabItem, "tabItem")
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch(`/api/santri/getid/${id}`);
  //       const data = await response.json();
  //       setFirstData(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }
  //   fetchData();
  // }, [id]);

  return (
    <section>
      {/* <!-- Modal toggle --> */}
      <button
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        className="bg-blue-600 hover:bg-blue-700  text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        type="button"
        onClick={showmodal}
      >
        Top Up 💰
      </button>
      {/* <!-- Main modal --> */}
      <div className={openNewTab === false ? "hidden" : "block"}>
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
                    Top Up Tabungan of {dataForTopup?.nama}
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
                {!!dataForTopup ? (
                  <form>
                    <div className="max-w-sm mx-auto py-5">
                      <div className="mb-3">
                        <label className="block text-base font-medium text-gray-900">
                          Nama Santri
                        </label>
                        <input
                          type="text"
                          id="username"
                          defaultValue={dataForTopup?.nama}
                          className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                          placeholder="nama"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="block text-base font-medium text-gray-900">
                          No Tabungan
                        </label>
                        <input
                          type="text"
                          id="no_tabungan"
                          defaultValue={dataForTopup?.no_tabungan}
                          className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                          placeholder="nim"
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
                          defaultValue={dataForTopup?.nim}
                          className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                          placeholder="nim"
                          required
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
                  <div className="text-2xl text-red-600 text-bold py-5 px-4 text-center">error dataForTopup undefined</div>
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// type KeySantri = {
//   nama: string;
//   nim: number;
//   orangtua: string;
//   id_kelas: number;
//   alamat: string;
//   id_card: number;
//   saldo: number;
//   id: number;
//   no_tabungan: string;
// };
