import SantriTable from './../../components/Santri/Table';
import AsideAndTop from '../../components/Layouts/Aside';
import NewSantri from './../../components/Modal/Santri/New';

export default function Dashboard() {
  return(
    <div>
      <AsideAndTop>
        <NewSantri /> {/* show modal form new santri */}
        <SantriTable />
      </AsideAndTop>
    </div>
  )
}
