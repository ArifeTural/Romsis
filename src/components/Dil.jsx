import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from "../i18next";




const dillerTablo = [
  { name: "Türkçe", code: "tr" },
  { name: "English", code: "en" },

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
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
  
      {dillerTablo.map((dil, index) => (
        <button
          key={index}
          onClick={() => dilChange(dil)}
          style={{
            padding: "8px 12px",
            cursor: "pointer",
            borderRadius: "5px",
            backgroundColor: "#f0f0f0",
            border: "1px solid #ccc",
          }}
        >
          {dil.name}
        </button>
      ))}
    </div>
  );
};

export default Dil;
