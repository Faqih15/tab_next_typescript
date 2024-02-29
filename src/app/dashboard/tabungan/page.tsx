"use client";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AsideAndTop from './../../../components/Layouts/Aside';
import TabelTab from '@/components/Table/TableTabungan';

export default function TabPage() {
  const QClient = new QueryClient()
  const urlPage = "http://localhost:5000/santri"
  return (
    <div>
      <AsideAndTop>
        {/* <h1 className='text-red-500 font-semibold'>/dashboard/tabungan</h1> */}
        <QueryClientProvider client={QClient}>
          <TabelTab />
        </QueryClientProvider>
      </AsideAndTop>
    </div>
  )
}
