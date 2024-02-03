// import React from 'react'
import AsideAndTop from './../../../components/Layouts/Aside';
// import AddSaldo from '../../../components/Modal/Tabungan/TopUp';
import TabelTab from './../../../components/Tabungan/TableTabungan';

export default function TabPage() {
  return (
    <div>
      <AsideAndTop>
        <h1 className='text-red-500 font-semibold'>/dashboard/tabungan</h1>
        {/* <AddSaldo /> */}
        <TabelTab />
      </AsideAndTop>
    </div>
  )
}
