import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ByOnBoard from '../pages/ByOnBoard'
import OzelYazilim from '../pages/OzelYazilim'
import Referanslarimiz from '../pages/Referanslarimiz'
import Kurumsal from '../pages/Kurumsal'
import Iletisim from '../pages/Iletisim'
import Navbar from '../components/Navbar'
import Teklif from '../pages/Teklif'


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/dashboard' element={<Home/>}/>
            <Route path='/dashboard/byOnBoard' element={<ByOnBoard/>}/>
            <Route path='/dashboard/ozelYazilim' element={<OzelYazilim/>}/>
            <Route path='/dashboard/referanslarimiz' element={<Referanslarimiz/>}/>
            <Route path='/dashboard/kurumsal' element={<Kurumsal/>}/>
            <Route path='/dashboard/iletisim' element={<Iletisim/>}/>
            <Route path='/dashboard/teklif' element={<Teklif/>}/>
            <Route path='*'element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter