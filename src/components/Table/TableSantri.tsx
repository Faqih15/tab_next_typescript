"use client";
import { useEffect, useState } from 'react';
import UpdateSantri from '../Modal/Santri/ModalSantriUpd';
import DeleteSantri from '../Modal/Santri/ModalSantriDelete';

type KeyTabSantri = {
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

export default function TableSantri() {
  const headTable = [
    {
      nama: "nama",
      nim: "nim",
      orangtua: "orangtua",
      id_kelas: "id_kelas",
      alamat: "alamat",
      id_card: "id_card",
      saldo: "saldo tab",
      action: "action",
    },
  ];

  const [modal, setModal]: any = useState(null);
  const [modalDelete, setDelete]: any = useState(null);
  const [santri, setSantri] = useState([]);

  const getAllSantri = async () => {
    const res = await fetch("http://localhost:5000/santri");
    // console.log("res", res)
    const data = await res.json();
    if (data?.length) {setSantri(data)};
    // if (res) {setSantri(res)};
  }
  useEffect(() => {
    getAllSantri();
    console.log('useEffect TabelSantri.tsx')
  }, []);
  // console.log('santri', santri)
  // console.log('data data', data)
  return (
    <section className="">
      <div className="relative overflow-x-auto">
        <table className="w-full text-left rtl:text-right">
          <thead className="text-lg font-semibold text-gray-700 uppercase bg-gray-100 mb-4">
            {headTable.map((headTable, index) => {
              return (
                <tr key={index} className="">
                  <td className="px-6 py-2">{headTable.nama}</td>
                  <td className="px-6 py-2">{headTable.nim}</td>
                  <td className="px-6 py-2">{headTable.id_kelas}</td>
                  <td className="px-6 py-2">{headTable.orangtua}</td>
                  <td className="px-6 py-2">{headTable.alamat}</td>
                  <td className="px-6 py-2">{headTable.id_card}</td>
                  {/* <td className="px-6 py-2">{headTable.saldo}</td> */}
                  <td className="px-6 py-2 flex justify-center items-center">
                    {headTable.action}
                  </td>
                </tr>
              );
            })}
          </thead>
          <tbody className="text-base capitalize text-gray-800">
            {santri.map((santri: KeyTabSantri, index: number) => {
              return (
                <tr key={index} className="">
                  {/* key must change to id data */}
                  <td className="px-5">{santri.nama}</td>
                  <td className="px-5">{santri.nim}</td>
                  <td className="px-5 flex justify-start items-center gap-2">
                    <button
                      type="button"
                      className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                      onClick={() => { setModal(santri) }}
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      className="bg-red-500 hover:bg-red-600 text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-center"
                      onClick={() => { setDelete(santri) }}
                    >
                      Delete
                    </button>
                  </td>
                  <td className="px-5">{santri.id_kelas}</td>
                  <td className="px-5">{santri.orangtua}</td>
                  <td className="px-5">{santri.alamat}</td>
                  <td className="px-5">{santri.id_card}</td>
                  {/* <td className="px-5">{santri.saldo}</td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {!!modal && <UpdateSantri paramUpdate={modal} onClose={()=>setModal(null)}/>}
      {!!modalDelete && <DeleteSantri paramDelete={modalDelete} onClose={()=>setDelete(null)}/>}
    </section>
  );
}

// dummy data
// const testDataSantri = [
//   {
//     nama: "Abdul Haadi Syaifuddin Ahmad",
//     nim: "33001",
//     orangtua: "Khumaidi",
//     id_kelas: 1,
//     alamat: "Mantung",
//     id_card: 3300133001,
//     saldo: 0,
//   },
//   {
//     nama: "Fatimah Azzahra",
//     nim: "33002",
//     orangtua: "Ahmad",
//     id_kelas: 2,
//     alamat: "Cirebon",
//     id_card: 3300233002,
//     saldo: 0,
//   },
//   {
//     nama: "Muhammad Iqbal",
//     nim: "33003",
//     orangtua: "Ali",
//     id_kelas: 1,
//     alamat: "Bandung",
//     id_card: 3300333003,
//     saldo: 0,
//   },
//   {
//     nama: "Aisyah Nurul Hidayah",
//     nim: "33004",
//     orangtua: "Budi",
//     id_kelas: 3,
//     alamat: "Jakarta",
//     id_card: 3300433004,
//     saldo: 0,
//   },
//   {
//     nama: "Rizky Pratama",
//     nim: "33005",
//     orangtua: "Dharma",
//     id_kelas: 2,
//     alamat: "Yogyakarta",
//     id_card: 3300533005,
//     saldo: 0,
//   },
//   {
//     nama: "Siti Rahma",
//     nim: "33006",
//     orangtua: "Eko",
//     id_kelas: 3,
//     alamat: "Surabaya",
//     id_card: 3300633006,
//     saldo: 0,
//   },
//   {
//     nama: "Fachrul Razi",
//     nim: "33007",
//     orangtua: "Fauzi",
//     id_kelas: 1,
//     alamat: "Malang",
//     id_card: 3300733007,
//     saldo: 0,
//   },
//   {
//     nama: "Dian Fitriani",
//     nim: "33008",
//     orangtua: "Guntur",
//     id_kelas: 2,
//     alamat: "Semarang",
//     id_card: 3300833008,
//     saldo: 0,
//   },
//   {
//     nama: "Ahmad Fauzan",
//     nim: "33009",
//     orangtua: "Haris",
//     id_kelas: 3,
//     alamat: "Denpasar",
//     id_card: 3300933009,
//     saldo: 0,
//   },
//   {
//     nama: "Rina Fitria",
//     nim: "33010",
//     orangtua: "Irfan",
//     id_kelas: 1,
//     alamat: "Palembang",
//     id_card: 3301033010,
//     saldo: 0,
//   },
// ];
