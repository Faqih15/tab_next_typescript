"use client";
import { useEffect, useState } from "react";
import { Santri } from "@/types/santri";
import ModalTopUp from "@/components/Modal/ModalTopUp";

interface IUser {
  nama: string;
  nim: string;
  no_tabungan: string;
  saldo: string;
}

export default function TabelTab() {
  const headClass = [
    {
      nama: "nama",
      nim: "nim",
      no_tabungan: "no tabungan",
      saldo: "saldo",
    },
  ];
  
  const [modal, setModal]: any = useState(null);
  const [dataTabungan, setDataTabungan] = useState([]);

  console.log('check 1', dataTabungan)
  // console.log('check 2', dataTabungan?.length)

  
  const getTabSantri = async () => {
    const res = await fetch("http://localhost:5000/santri");
    const data = await res.json();
    if (data?.length) setDataTabungan(data);
  }
  useEffect(() => {
    getTabSantri();
    // (async () => {
    //   const res = await fetch("http://localhost:5000/santri");
    //   const data = await res.json();
    //   if (data?.length) setDataTabungan(data);
    // })()
  }, []);

  // useEffect(() => {
  //   console.log('modal 1', modal)
  // }, [modal])
  
  // const dataTest = useMemo(() => {
  //   return modal || []
  // }, [modal])

  return (
    <section className="">
      <div className="relative overflow-x-auto">
        <table className="w-full text-left rtl:text-right">
          <thead className="text-lg font-semibold text-gray-700 uppercase bg-gray-100">
            {headClass.map((itemHead, index) => {
              return (
                <tr key={index} className="">
                  <td className="px-6 py-2">{itemHead.nama}</td>
                  <td className="px-6 py-2">{itemHead.nim}</td>
                  <td className="px-6 py-2">{itemHead.no_tabungan}</td>
                  <td className="px-6 py-2">{itemHead.saldo}</td>
                  <td className="px-6 py-2 flex justify-start">Action</td>
                </tr>
              );
            })}
          </thead>
          <tbody className="text-base capitalize text-gray-800">
            {!!dataTabungan?.length &&
              dataTabungan.map((tabItem: Santri, index: number) => {
                return (
                  <tr key={index}>
                    <td className="px-5">{tabItem.nama}</td>
                    <td className="px-5">{tabItem.nim}</td>
                    <td className="px-5">{tabItem.no_tabungan}</td>
                    <td className="px-5">{tabItem.saldo}</td>
                    <td className="px-5 flex justify-start gap-2">
                      <button
                        data-modal-target="default-modal"
                        data-modal-toggle="default-modal"
                        className="bg-blue-600 hover:bg-blue-700  text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                        type="button"
                        onClick={() => { setModal(tabItem) }}
                      >
                        Top Up 💰
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      {!!modal && <ModalTopUp item={modal} onClose={()=>setModal(null)}/>}
    </section>
  );
}
