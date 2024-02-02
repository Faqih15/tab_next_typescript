type KeyClass = {
  nama: string;
  code: number;
};
async function getClass() {
  const res = await fetch("http://localhost:5000/listClass");
  return res.json();
}

export default async function TabelKelas() {
  const headClass = [
    {
      nama: "nama",
      code: "kode kelas",
    }
  ]
  const listClass = await getClass();
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
                        {itemHead.code}
                      </td>
                    </tr> ) } ) }
            </thead>
            <tbody className="text-base capitalize">
                {listClass.map((itemClass: KeyClass, index: number) => {
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
  