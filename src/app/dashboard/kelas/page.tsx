// import SantriTable from './../../components/Santri/Table';
import AsideAndTop from '../../../components/Layouts/Aside';
import NewClass from '../../../components/Modal/Kelas/New';
// import NewSantri from './../../components/Modal/Santri/New';
import TabelKelas from './../../../components/Kelas/TabelKelas';

export default function Dashboard() {
  return(
    <div>
      <AsideAndTop>
        <h1 className='text-red-500'>/kelas/page</h1>
        <NewClass /> 
        {/* show modal form new class */}
        <TabelKelas />
      </AsideAndTop>
    </div>
  )
}
