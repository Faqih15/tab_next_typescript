import AsideAndTop from '../../../components/Layouts/Aside';
import NewClass from './New';
import TabelKelas from './TabelKelas';

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
