"use client";
import { useState } from "react";
// import { Santri, TestDummyData } from "@/types/santri";
import ModalTopUp from "@/components/Modal/ModalTopUp";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { Santri } from "@/types/santri";

export default function TabelTab() {
  const QClient = new QueryClient()
  const [modal, setModal]: any = useState(null);

  const getTableSantri = async (): Promise<Santri[]> => {
    const URL = "http://localhost:5000/santri";
    const response = await fetch(URL);
    const hasil = await response.json();
    return hasil;
  }
  const { data: dataTabungan, isLoading } = useQuery({
    queryFn: () => getTableSantri(),
    queryKey: ['dataTabungan'],
  });
  if (isLoading) {
    return <div className='text-red-500 font-semibold'>Loading data ....</div>
  }
  
  return (
    <section className="">
      <QueryClientProvider client={QClient}>
        <div className="relative overflow-x-auto">
          <table className="w-full text-left rtl:text-right">
            <thead className="text-lg font-semibold text-gray-700 uppercase bg-gray-100">
              <tr className="">
                <td className="px-6 py-2 text-center">nama</td>
                <td className="px-6 py-2">nim</td>
                <td className="px-6 py-2 text-center">no tabungan</td>
                <td className="px-6 py-2 text-center">saldo</td>
                <td className="px-6 py-2 flex justify-start">Action</td>
              </tr>
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
