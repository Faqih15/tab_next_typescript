"use client";
import { useState } from "react";
import { MdClose } from "react-icons/md";

type KeyTabSantri = {
  nama: string;
  nim: number;
  id_kelas: number;
  no_tabungan: string;
  orangtua: string;
  alamat: string;
  id_card: number;
  saldo: number;
};

export default function NewSantri() {
  // const [first, setfirst] = useState<string>();
  const [isOpen, setOpen] = useState<boolean>(false);
  const [dataInput, setDataInput] = useState<KeyTabSantri>({
    nama: '',
    nim: 0,
    id_kelas: 0,
    no_tabungan: '',
    orangtua: '',
    alamat: '',
    id_card: 0,
    saldo: 0,
  });

  const showmodal = (e: any) => {
    if (isOpen === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
    e.target.reset();
  };

  const onInput = (e: any) => {
    setDataInput({ ...dataInput, [e.target.id]: e.target.value });
    console.log("dataInput", dataInput);
    // console.log("e.target.id", e.target.id);
  };

  const sendFormData = (e: any) => {
    e.preventDefault();
    const newsantri = async () => {
      const sendData = {
        nama: dataInput.nama,
        nim: dataInput.nim,
        id_kelas: dataInput.id_kelas,
        no_tabungan: dataInput.no_tabungan,
        orangtua: dataInput.orangtua,
        alamat: dataInput.alamat,
        id_card: dataInput.id_card,
        saldo: dataInput.saldo,
      };
      const response = await fetch("http://localhost:5000/santri", {
        method: "POST",
        body: JSON.stringify(sendData),
      });
      // console.log(sendData, "data 68");
      return response.json();
    };
    newsantri().then((data) => {
      console.log(data, "data.message");
      // alert(data.message);
    });
    e.target.reset();
    setOpen(false);
  };

  return (
    <section className="my-5">
      {/* <!-- Modal toggle --> */}
      <button
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        className="bg-blue-600 hover:bg-blue-700  text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center"
        type="button"
        onClick={showmodal}
      >
        Add New Profil
      </button>
      {/* <!-- Main modal --> */}
      <div className={isOpen === false ? "hidden" : "block"}>
        <div
          id="default-modal"
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full max-h-full bg-gray-700/75"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg border border-blue-400 shadow">
              {/* <!-- Modal header --> */}
              <form autoComplete="off" onSubmit={sendFormData} >
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Add New Profil
                  </h3>
                  <button
                    type="button"
                    className="text-gray-700 bg-transparent hover:bg-gray-200 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                    data-modal-hide="default-modal"
                    onClick={showmodal}
                  >
                    <MdClose />
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                {/* <!-- Modal body --> */}
                <div className="max-w-sm mx-auto py-5">
                  <div className="mb-3">
                    <label className="text-base font-medium text-gray-900">
                      Your Name
                    </label>
                    <input
                      onChange={onInput}
                      type="text"
                      id="nama"
                      className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                      placeholder="nama"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="text-base font-medium text-gray-900">
                      NIM
                    </label>
                    <input
                      onChange={onInput}
                      type="number"
                      id="nim"
                      className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                      placeholder="nim"
                      required
                      min="10001"
                      max="99999"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="text-base font-medium text-gray-900">
                      Kelas
                    </label>
                    <input
                      onChange={onInput}
                      type="number"
                      id="id_kelas"
                      className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                      placeholder="kelas"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="text-base font-medium text-gray-900">
                      No Tabungan
                    </label>
                    <input
                      onChange={onInput}
                      type="text"
                      id="no_tabungan"
                      className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                      placeholder="no tabungan"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="text-base font-medium text-gray-900">
                      Nama Orangtua
                    </label>
                    <input
                      onChange={onInput}
                      type="text"
                      id="orangtua"
                      className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                      placeholder="nama orangtua"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="text-base font-medium text-gray-900">
                      Alamat
                    </label>
                    <input
                      onChange={onInput}
                      type="text"
                      id="alamat"
                      className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                      placeholder="alamat"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="text-base font-medium text-gray-900">
                      ID Card
                    </label>
                    <input
                      onChange={onInput}
                      type="number"
                      id="id_card"
                      className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                      placeholder="id card"
                    />
                  </div>
                  <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-blue-400 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                        required
                      />
                    </div>
                    <label className="ms-2 text-base font-medium text-gray-900">
                      I agree with the{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        terms and conditions
                      </a>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700  text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center"
                  >
                    Register new account
                  </button>
                  <button
                    type="button"
                    onClick={onInput}
                    className="mt-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-base px-5 py-2.5 text-center"
                  >
                    Test Show State from Input field
                  </button>
                </div>
              </form>
              {/* <!-- Modal footer --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
