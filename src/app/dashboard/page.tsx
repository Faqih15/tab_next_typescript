import SantriTable from './../../components/Santri/Table';
import AsideAndTop from '../../components/Layouts/Aside';

export default function Dashboard() {
  return(
    <div>
      {/* <LayoutDashboard>
      </LayoutDashboard> */}
      <AsideAndTop>
        <SantriTable />
      </AsideAndTop>
    </div>
  )
}
