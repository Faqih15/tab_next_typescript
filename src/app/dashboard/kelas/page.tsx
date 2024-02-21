import NewClass from '@/components/Modal/ModalClassNew';
import AsideAndTop from '@/components/Layouts/Aside';
// import NewClass from '../../../components/Modal/ModalClassNew';
import TabelKelas from '@/components/Table/TabelKelas';

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
