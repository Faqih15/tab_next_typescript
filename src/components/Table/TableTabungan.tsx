"use client";
import { useState } from "react";
// import { Santri, TestDummyData } from "@/types/santri";
import ModalTopUp from "@/components/Modal/ModalTopUp";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

interface IUser {
  nama: string;
  nim: string;
  no_tabungan: string;
  saldo: string;
}
export default function TabelTab({urlPage}: any) {
  const headClass = [
    {
      nama: "nama",
      nim: "nim",
      no_tabungan: "no tabungan",
      saldo: "saldo",
    },
  ];
  const QClient = new QueryClient()

  const [modal, setModal]: any = useState(null);
  // const [stateTabungan, setdataTabungan]: any = useState(null);

  const getTableSantri = async (): Promise<void> => {
    const URL = "http://localhost:5000/santri";
    const response = await fetch(URL);
    if (response) {
      console.log("responese ada");
    } else {
      console.log("response ga ada")
    }
    const hasil = await response.json()
    // setdataTabungan(hasil)
    return hasil;
  }
  
  const { status, data: dataTabungan, error, isFetching, isError, isLoading, isSuccess } = useQuery({
    queryFn: () => getTableSantri(),
    queryKey: ['dataTabungan'],
  });
  // console.log("isFetching", isFetching)
  // console.log("error", error)
  // console.log("status", status)
  // console.log("dataTabungan line 47", dataTabungan)
  // console.log("dummy line 48", dataTabungan)
  // console.log("isError", isError)
  // console.log("isLoading", isLoading)
  // console.log("isSuccess", isSuccess)
  // if (isFetching) return 'isFetching...'
  // if (error) return 'An error has occurred: ' + error.message
  // if (!status) return 'Loading...'
  // if (dataTabungan) return 'dataTabungan...'
  // if (error) return 'An error has occurred: ' + error.message

  return (
    <section className="">
      <div>
        {/* <h1>{data.name}</h1> */}
        {/* <p>{data.description}</p>
        <strong>👀 {data.subscribers_count}</strong>{' '}
        <strong>✨ {data.stargazers_count}</strong>{' '}
        <strong>🍴 {data.forks_count}</strong>
        <div>{isFetching ? 'Updating...' : ''}</div> */}
      </div>
      <QueryClientProvider client={QClient}>
        <div className="relative overflow-x-auto">
          <table className="w-full text-left rtl:text-right">
            <thead className="text-lg font-semibold text-gray-700 uppercase bg-gray-100">
              {headClass.map((itemHead, index) => {
                return (
                  <tr key={index} className="">
                    <td className="px-6 py-2 text-center">{itemHead.nama}</td>
                    <td className="px-6 py-2">{itemHead.nim}</td>
                    <td className="px-6 py-2 text-center">{itemHead.no_tabungan}</td>
                    <td className="px-6 py-2 text-center">{itemHead.saldo}</td>
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
                      <td className="px-5 text-right">{tabItem.saldo}</td>
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
      </QueryClientProvider>
    </section>
  );
}

// useEffect(() => {
//   console.log('modal 1', modal)
// }, [modal])

// const dataTest = useMemo(() => {
//   return modal || []
// }, [modal])
