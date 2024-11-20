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
      <Dil />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/byOnBoard' element={<ByOnBoard />} />
        <Route path='/ozelYazilim/MobilUygulama' element={<MobilUygulama />} />
        <Route path='/ozelYazilim/UIUX' element={<UIUX />} />
        <Route path='/ozelYazilim/YalinUretim' element={<Yalin />} />
        <Route path='/ozelYazilim/WebYazilim' element={<WebYazilim />} />
        <Route path='/ozelYazilim/Wms' element={<Wms />} />
        <Route path='/kurumsal' element={<Kurumsal />} />
        <Route path='/hakkımızda' element={<Hakkımızda />} />
        <Route path='/iletisim' element={<Iletisim />} />
        <Route path='/teklif' element={<Teklif />} />
        <Route path='/sorular' element={<Sorular />} />
        <Route path='*' element={<Home />} />
      </Routes>
      <Footer />
      <Copy />
    </BrowserRouter>
  );
};

export default AppRouter;





