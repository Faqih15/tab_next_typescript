'use client'
import TableSantri from '../../components/Table/TableSantri';
import AsideAndTop from '../../components/Layouts/Aside';
import NewSantri from '../../components/Modal/Santri/ModalSantriNew';
import TestAppModal from '@/components/Modal/Test';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Dashboard() {
  const QClient = new QueryClient()

  return(
    <div>
      <AsideAndTop>
        <h1 className='text-red-500 font-semibold'> /dashboard/page.tsx </h1>
        {/* <TabPage /> */}
        <NewSantri />
        {/* show modal form new santri */}
        <QueryClientProvider client={QClient}>
          <TableSantri />
        </QueryClientProvider>
        <TestAppModal />
      </AsideAndTop>
    </div>
  )
}
