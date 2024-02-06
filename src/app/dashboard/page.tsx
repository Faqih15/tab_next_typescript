import SantriTable from './../../components/Santri/Table';
import AsideAndTop from '../../components/Layouts/Aside';
import NewSantri from './../../components/Modal/Santri/New';
import TabPage from './tabungan/page';

export default function Dashboard() {
  return(
    <div>
      <AsideAndTop>
        <h1 className='text-red-500 font-semibold'> /dashboard/page.tsx </h1>
        {/* <TabPage /> */}
        <NewSantri /> 
        {/* show modal form new santri */}
        <SantriTable />
      </AsideAndTop>
    </div>
  )
}
