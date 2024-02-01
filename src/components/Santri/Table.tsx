export default function SantriTable() {
  const headTable = [
    {
      nama: "nama",
      nim: "nim",
      orangtua: "orangtua",
      id_kelas: "id_kelas",
      alamat: "alamat",
      id_card: "id_card"
    }
  ]
  const testDataSantri = [
    {
      nama: "Abdul Haadi Syaifuddin Ahmad",
      nim: "33001",
      orangtua: "Khumaidi",
      id_kelas: 1,
      alamat: "Mantung",
      id_card: 3300133001,
    },
    {
      nama: "Fatimah Azzahra",
      nim: "33002",
      orangtua: "Ahmad",
      id_kelas: 2,
      alamat: "Cirebon",
      id_card: 3300233002,
    },
    {
      nama: "Muhammad Iqbal",
      nim: "33003",
      orangtua: "Ali",
      id_kelas: 1,
      alamat: "Bandung",
      id_card: 3300333003,
    },
    {
      nama: "Aisyah Nurul Hidayah",
      nim: "33004",
      orangtua: "Budi",
      id_kelas: 3,
      alamat: "Jakarta",
      id_card: 3300433004,
    },
    {
      nama: "Rizky Pratama",
      nim: "33005",
      orangtua: "Dharma",
      id_kelas: 2,
      alamat: "Yogyakarta",
      id_card: 3300533005,
    },
    {
      nama: "Siti Rahma",
      nim: "33006",
      orangtua: "Eko",
      id_kelas: 3,
      alamat: "Surabaya",
      id_card: 3300633006,
    },
    {
      nama: "Fachrul Razi",
      nim: "33007",
      orangtua: "Fauzi",
      id_kelas: 1,
      alamat: "Malang",
      id_card: 3300733007,
    },
    {
      nama: "Dian Fitriani",
      nim: "33008",
      orangtua: "Guntur",
      id_kelas: 2,
      alamat: "Semarang",
      id_card: 3300833008,
    },
    {
      nama: "Ahmad Fauzan",
      nim: "33009",
      orangtua: "Haris",
      id_kelas: 3,
      alamat: "Denpasar",
      id_card: 3300933009,
    },
    {
      nama: "Rina Fitria",
      nim: "33010",
      orangtua: "Irfan",
      id_kelas: 1,
      alamat: "Palembang",
      id_card: 3301033010,
    },
  ];
  const mapData1 = {
    
  }
    return (
      <section className="">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                {headTable.map((headTable, index) => { 
                  return  ( 
                    <tr key={index} className="">
                      <td className="px-6 py-2">
                        {headTable.nama}
                      </td>
                      <td className="px-6 py-2">
                        {headTable.nim}
                      </td>
                      <td className="px-6 py-2">
                        {headTable.id_kelas}
                      </td>
                      <td className="px-6 py-2">
                        {headTable.orangtua}
                      </td>
                      <td className="px-6 py-2">
                        {headTable.alamat}
                      </td>
                      <td className="px-6 py-2">
                        {headTable.id_card}
                      </td>
                      <td className="px-6 py-2">
                      
                      </td>
                    </tr> ) } ) }
            </thead>
            <tbody>
                {testDataSantri.map((santri, index) => {
                  return (
                    <tr key={index} className="">
                      <td className="px-6 py-2">
                        {santri.nama}
                      </td>
                      <td className="px-6 py-2">
                        {santri.nim}
                      </td>
                      <td className="px-6 py-2">
                        {santri.id_kelas}
                      </td>
                      <td className="px-6 py-2">
                        {santri.orangtua}
                      </td>
                      <td className="px-6 py-2">
                        {santri.alamat}
                      </td>
                      <td className="px-6 py-2">
                        {santri.id_card}
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
  