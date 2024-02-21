import TableSantri from '../../components/Table/TableSantri';
import AsideAndTop from '../../components/Layouts/Aside';
import NewSantri from './../../components/Modal/Santri/New';

export default function Dashboard() {
  return(
    <div>
      <AsideAndTop>
        <h1 className='text-red-500 font-semibold'> /dashboard/page.tsx </h1>
        {/* <TabPage /> */}
        <NewSantri /> 
        {/* show modal form new santri */}
        <TableSantri />
      </AsideAndTop>
    </div>
  )
}
