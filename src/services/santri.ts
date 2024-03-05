import { Santri } from "../types";

export const getAllSantri = async (): Promise<Santri[]> => {
  const URL = "http://localhost:5000/santri";
  const response = await fetch(URL);
  const hasil = await response.json();
  return hasil;
}