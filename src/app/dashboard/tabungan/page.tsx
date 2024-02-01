// import React from 'react'
import AsideAndTop from './../../../components/Layouts/Aside';
import AddSaldo from './../../../components/Modal/Tabungan/NewTab';

export default function TabPage() {
  return (
    <div>
      <AsideAndTop>
        <h1 className='text-red-500 font-semibold'>/dashboard/tabungan</h1>
        <AddSaldo />
      </AsideAndTop>
    </div>
  )
}
