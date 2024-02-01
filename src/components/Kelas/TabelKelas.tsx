export default function TabelKelas() {
  const headClass = [
    {
      nama: "nama",
      code: "kode kelas",
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
    return (
      <section className="">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                {headClass.map((itemHead, index) => { 
                  return  ( 
                    <tr key={index} className="">
                      <td className="px-6 py-2">
                        {itemHead.nama}
                      </td>
                      <td className="px-6 py-2">
                        {itemHead.code}
                      </td>
                    </tr> ) } ) }
            </thead>
            <tbody>
                {listClass.map((itemClass, index) => {
                  return (
                    <tr key={index} className="">
                      <td className="px-6 py-2">
                        {itemClass.nama}
                      </td>
                      <td className="px-6 py-2">
                        {itemClass.code}
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
  