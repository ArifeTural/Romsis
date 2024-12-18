import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from "../i18next";




const dillerTablo = [
 
  { name: "EN", code: "en" },
  { name: "TR", code: "tr" },

];

const user = [{ lang: "tr" }];

const Dil = () => {
  const { t, i18n } = useTranslation();
  let browserLang = window.navigator.language;

  useEffect(() => {
    const userLang = user[0].lang;
    if (userLang && userLang !== browserLang) {
      i18n.changeLanguage(userLang);
    } else {
      i18n.changeLanguage(browserLang);
    }
  }, [browserLang, i18n]);

  const dilChange = (dil) => {
    i18n.changeLanguage(dil.code);
  };

  return (
<div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
  
  }}
>
  {dillerTablo.map((dil, index) => (
    <button
      key={index}
      onClick={() => dilChange(dil)}
      style={{
        padding: "4px 6px",
        cursor: "pointer",
        border: "none",
        borderLeft: "2px solid black",
        backgroundColor: "rgba(0, 0, 0, 0.0)", // Burada opaklık eklendi
        zIndex: "100",
        color: "red",
        fontWeight: "bold"
      }}
    >
      {dil.name}
    </button>
  ))}
</div>

  );
};

export default Dil;
