import AddSaldo from "./../Modal/Tabungan/TopUp";

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

async function getTabSantri() {
  const res = await fetch("http://localhost:5000/santri");
  // to get value from localhost:5000 you must run the json-server on terminal with
  // npm run server
  return res.json();
}

export default async function TabelTab() {
  const headClass = [
    {
      nama: "nama",
      nim: "nim",
      no_tabungan: "no tabungan",
      saldo: "saldo",
    },
  ];
  const testTabunganSantri = await getTabSantri();

  return (
    <section className="">
      <div className="relative overflow-x-auto">
        <table className="w-full text-left rtl:text-right text-gray-500">
          <thead className="text-lg font-semibold text-gray-700 uppercase bg-gray-50">
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
          <tbody className="text-base capitalize">
            {testTabunganSantri.map((tabItem: KeySantri, index: number) => {
              return (
                <tr key={index}>
                  <td className="px-5">{tabItem.nama}</td>
                  <td className="px-5">{tabItem.nim}</td>
                  <td className="px-5">{tabItem.no_tabungan}</td>
                  <td className="px-5">{tabItem.saldo}</td>
                  <td className="px-5 flex justify-start gap-2">
                    <AddSaldo id={tabItem.id} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
