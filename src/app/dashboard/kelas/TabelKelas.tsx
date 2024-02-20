'use client'
import { useEffect, useState } from "react";
import UpdateClass from "./ModalUpdateClass";

type KeyClass = {
  nama: string;
  code: number;
  id: string;
};

export default function TabelKelas() {
  const headClass = [
    {
      nama: "nama",
      code: "kode kelas",
    }
  ]

  const [modal, setModal]: any = useState(null);
  const [dataClass, setDataClass] = useState([]);

  const getClass = async () => {
    const res = await fetch("http://localhost:5000/listclass");
    const data = await res.json();
    if (data?.length) setDataClass(data);
  };

  useEffect(() => {
    getClass();
  }, []);
  // console.log('dataClass 37', dataClass)  

  return (
    <section className="">
      <div className="relative overflow-x-auto">
        <table className="w-full text-left rtl:text-right text-gray-500">
          <thead className="text-lg font-semibold text-gray-700 uppercase bg-gray-50">
              {headClass.map((itemHead, index) => {
                return (
                  <tr key={index} className="">
                    <td className="px-6 py-2">{itemHead.nama}</td>
                    <td className="px-6 py-2">{itemHead.code}</td>
                    <td className="px-6 py-2 flex justify-start">Action</td>
                  </tr>
                )
              })}
          </thead>
          <tbody className="text-base capitalize">
              {dataClass.map((itemClass: KeyClass, index: number) => {
                return (
                  <tr key={index} className="">
                    <td className="px-5">{itemClass.nama}</td>
                    <td className="px-5">{itemClass.code}</td>
                    <td className="px-5 flex justify-start gap-2">
                      <button
                        className="bg-yellow-300 hover:bg-yellow-400  text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                        type="button"
                        onClick={() => { setModal(itemClass) }}
                      >
                        Update Class
                      </button>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
      {!!modal && <UpdateClass item={modal} onClose={()=>setModal(null)}/>}
    </section>
  );
}
  