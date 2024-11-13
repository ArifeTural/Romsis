import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from "../i18next";




const dillerTablo = [
  { name: "TR", code: "tr" },
  { name: "EN", code: "en" },

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
    <div style={{ display: "flex",
     alignItems: "center",
     justifyContent:"end",
     backgroundColor:"#EDEBEB"
     }}>
  
      {dillerTablo.map((dil, index) => (
        <button
          key={index}
          onClick={() => dilChange(dil)}
          style={{
            padding: "4px 6px",
            cursor: "pointer",
            border:"none",
            borderLeft:"2px solid black",
            backgroundColor: "#EDEBEB",
            zIndex: "100",
          }}
        >
          {dil.name}
        </button>
      ))}
    </div>
  );
};

export default Dil;
