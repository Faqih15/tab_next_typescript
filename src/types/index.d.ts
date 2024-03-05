
export type Santri = {
  nama: string;
  nim: number;
  orangtua: string;
  id_kelas: number;
  alamat: string;
  id_card: number;
  saldo: number;
  id?: string;
  no_tabungan: string;
};

export type KeySaldo = {
  saldoInput: number;
};

export const TestDummyData = [
  {
    nama: "Json Syafii Maarif",
    nim: "33001",
    orangtua: "Basuki",
    id_kelas: 1,
    alamat: "Banyuwangi",
    id_card: 3300133001,
    saldo: 66666,
    no_tabungan: "ST-02-110-01",
    id: "5e9c"
  },
  {
    nama: "Json Fatimah Azzahra",
    nim: "33002",
    orangtua: "Ahmad",
    id_kelas: 2,
    alamat: "Cirebon",
    id_card: 3300233002,
    saldo: 88888,
    no_tabungan: "ST-02-110-02",
    id: "e792"
  }
]