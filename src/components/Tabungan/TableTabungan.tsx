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
async function getSantri() {
  const res = await fetch("http://localhost:5000/santri");
  return res.json();
}

export default async function TabelTab() {
  const headClass = [
    {
      nama: "nama",
      nim: "nim",
      no_tabungan: "no tabungan",
      saldo: "saldo"
    }
  ]
  const listClass = [
    { nama: "1 Tsanawiyah", code: 1 },
    { nama: "2 Tsanawiyah", code: 1 },
    { nama: "3 Tsanawiyah", code: 1 },
    { nama: "1 Aliyah", code: 1 },
    { nama: "2 Aliyah", code: 1 },
    { nama: "3 Aliyah", code: 1 },
    { nama: "1 Muallimin", code: 1 },
    { nama: "2 Mualiimin", code: 1 },
    { nama: "3 Mualiimin", code: 1 },
    { nama: "1 Muallimat", code: 1 },
    { nama: "2 Muallimat", code: 1 },
    { nama: "3 Muallimat", code: 1 },
    { nama: "Istisyarah", code: 1 },
    { nama: "Munaqasyah", code: 1 }
  ];
  const testTabunganSantri = await getSantri();
    return (
      <section className="">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-lg font-semibold text-gray-700 uppercase bg-gray-50">
                {headClass.map((itemHead, index) => { 
                  return  ( 
                    <tr key={index} className="">
                      <td className="px-6 py-2">
                        {itemHead.nama}
                      </td>
                      <td className="px-6 py-2">
                        {itemHead.nim}
                      </td>
                      <td className="px-6 py-2">
                        {itemHead.no_tabungan}
                      </td>
                      <td className="px-6 py-2">
                        {itemHead.saldo}
                      </td>
                      <td className="px-6 py-2 flex justify-start">
                        Action
                      </td>
                    </tr> ) } ) }
            </thead>
            <tbody className="text-base capitalize">
                {testTabunganSantri.map((tabItem: KeySantri, index: number) => {
                  return (
                    <tr key={index} className="">
                      <td className="px-6 py-2">
                        {tabItem.nama}
                      </td>
                      <td className="px-6 py-2">
                        {tabItem.nim}
                      </td>
                      <td className="px-6 py-2">
                        {tabItem.no_tabungan}
                      </td>
                      <td className="px-6 py-2">
                        {tabItem.saldo}
                      </td>
                      <td className="px-5 flex justify-start gap-2">
                        <button
                          type="button"
                          className="focus:outline-none text-black bg-yellow-300 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                          Update
                        </button>
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
  