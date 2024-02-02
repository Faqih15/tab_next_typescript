import AsideAndTop from '../../../components/Layouts/Aside';
import NewClass from '../../../components/Modal/Kelas/New';
import TabelKelas from './../../../components/Kelas/TabelKelas';

export default function Dashboard() {
  return(
    <div>
      <AsideAndTop>
        <NewClass /> 
        {/* show modal form new class */}
        <TabelKelas />
      </AsideAndTop>
    </div>
  )
}
