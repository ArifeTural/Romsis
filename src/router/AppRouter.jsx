import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import Home from '../pages/Home';
import ByOnBoard from '../pages/ByOnBoard';
import MobilUygulama from '../pages/MobilUygulama';
import UIUX from '../pages/UIUX';
import WebYazilim from '../pages/WebYazilim';
import Wms from '../pages/Wms';
import Kurumsal from '../pages/Kurumsal';
import Iletisim from '../pages/Iletisim';
import Teklif from '../pages/Teklif';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hakkımızda from '../pages/Hakkımızda';
import Sorular from '../pages/Sorular';
import Yalin from '../pages/Yalin';
import Copy from '../components/Copy';
import Dil from '../components/Dil';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Dil/>
      <ScrollToTop />
      <Routes>
        <Route path='/dashboard' element={<Home />} />
        <Route path='/dashboard/byOnBoard' element={<ByOnBoard />} />
        <Route path='/dashboard/ozelYazilim/MobilUygulama' element={<MobilUygulama />} />
        <Route path='/dashboard/ozelYazilim/UIUX' element={<UIUX />} />
        <Route path='/dashboard/ozelYazilim/YalinUretim' element={<Yalin />} />
        <Route path='/dashboard/ozelYazilim/WebYazilim' element={<WebYazilim />} />
        <Route path='/dashboard/ozelYazilim/Wms' element={<Wms />} />
        <Route path='/dashboard/kurumsal' element={<Kurumsal />} />
        <Route path='/dashboard/hakkımızda' element={<Hakkımızda />} />
        <Route path='/dashboard/iletisim' element={<Iletisim />} />
        <Route path='/dashboard/teklif' element={<Teklif />} />
        <Route path='/dashboard/sorular' element={<Sorular />} />
        <Route path='*' element={<Home />} />
      </Routes>
      <Footer />
      <Copy />
    </BrowserRouter>
  );
};

export default AppRouter;




