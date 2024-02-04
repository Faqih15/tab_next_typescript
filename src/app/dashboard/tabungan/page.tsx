import AsideAndTop from './../../../components/Layouts/Aside';
import TabelTab from './../../../components/Tabungan/TableTabungan';

export default function TabPage() {
  return (
    <div>
      <AsideAndTop>
        <h1 className='text-red-500 font-semibold'>/dashboard/tabungan</h1>
        <TabelTab />
      </AsideAndTop>
    </div>
  )
}
