import EditClass from "./../Modal/Kelas/Edit";

type KeyClass = {
  nama: string;
  code: number;
};
async function getKelas() {
  const res = await fetch("http://localhost:5000/listclass");
  console.log(res, "respon");
  // to get value from localhost:5000 you must run the json-server on terminal with 
  // npm run server
  return res.json();
}

export default async function TabelKelas() {
  const headClass = [
    {
      nama: "nama",
      code: "kode kelas",
    }
  ]
  const listClass = await getKelas();
  
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
              {listClass.map((itemClass: KeyClass, index: number) => {
                return (
                  <tr key={index} className="">
                    <td className="px-5">{itemClass.nama}</td>
                    <td className="px-5">{itemClass.code}</td>
                    <td className="px-5 flex justify-start gap-2">
                      <EditClass />
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
  