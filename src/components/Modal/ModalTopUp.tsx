"use client";
import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type KeySaldo = {
  saldoInput: number;
};
type HasilTopUp = {
  saldoAkhir: number;
};

export default function AddSaldo({ item, onClose, topUpMutationFn, getSaldo, setSaldo, stateTab }: any) {
  const queryClient = useQueryClient();
  const gSaldo = getSaldo;
  const { mutateAsync: topUpMutationAsync } = useMutation({
    mutationFn: topUpMutationFn, // Required for useMutation
    onSuccess: () => {
      queryClient.invalidateQueries(['stateTab'])
    }
  });
  return (
    <section>
      <div
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full max-h-full bg-gray-700/75">
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg border border-blue-400 shadow">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
              <h3 className="text-xl font-semibold text-gray-900">
                Top Up Tabungan of{" "}
                <span className="bg-yellow-300 rounded-md p-2">
                  {item?.nama}
                </span>
              </h3>
              <button
                type="button"
                className="text-gray-700 bg-transparent hover:bg-gray-200 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-hide="default-modal"
                onClick={onClose}>
                <MdClose />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {!!item ? (
              <form 
                autoComplete="off" 
                onSubmit={async () => {
                  try {
                    await topUpMutationAsync(gSaldo)
                    setSaldo("")
                  } catch (error) {
                    console.log('error form submit', error)
                  } 
                }
                }>
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
                      Saldo Akhir
                    </label>
                    <input
                      type="number"
                      id="nim"
                      defaultValue={item?.saldo}
                      className="shadow-sm bg-gray-50 border border-gray-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
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
                      onChange={e => setSaldo({saldoInput: Number(e.target.value)})}
                      type="number"
                      id="saldo"
                      defaultValue=""
                      className="shadow-sm bg-gray-50 border border-blue-400 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                      placeholder="nim"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700  text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Submit Nabung
                  </button>
                  {/* <div className="text-2xl text-red-600 text-bold uppercase py-5 px-4 text-center">error</div> */}
                </div>
              </form>
            ) : (
              <div className="text-2xl text-red-600 text-bold py-5 px-4 text-center">
                {" "}
                error when sending `item` as props{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
