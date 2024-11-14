import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import "../css/kurumsal.css";
import { useTranslation } from "react-i18next";

const Sorular = () => {

  const { t } = useTranslation();

  const soruCevap = [
    {
      id: 1,
      question: t("sorular.soru1"),
      answer: t("sorular.cevap1")
    },
    {
      id: 2,
      question: t("sorular.soru2"),
      answer: t("sorular.cevap2")
    },
    {
      id: 3,
      question: t("sorular.soru3"),
      answer: t("sorular.cevap3")
    },
    {
      id: 4,
      question: t("sorular.soru4"),
      answer: t("sorular.cevap4")
    },
    {
      id: 5,
      question: t("sorular.soru5"),
      answer:t("sorular.cevap5")
    },
    {
      id: 6,
      question: t("sorular.soru6"),
      answer: t("sorular.cevap6")
    },
    {
      id: 7,
      question: t("sorular.soru7"),
      answer: t("sorular.cevap7")
    },
    {
      id: 8,
      question: t("sorular.soru8"),
      answer: t("sorular.cevap8")
    },
    {
      id: 9,
      question: t("sorular.soru9"),
      answer: t("sorular.cevap9")
    },
    {
      id: 10,
      question: t("sorular.soru10"),
      answer: t("sorular.cevap10")
    },
    {
      id: 11,
      question: t("sorular.soru11"),
      answer: t("sorular.cevap11")
    },
    {
      id: 12,
      question: t("sorular.soru12"),
      answer: t("sorular.cevap12")
    },
    {
      id: 13,
      question: t("sorular.soru13"),
      answer: t("sorular.cevap13")
    },
    {
      id: 14,
      question: t("sorular.soru14"),
      answer: t("sorular.cevap14")
    },
    {
      id: 15,
      question: t("sorular.soru15"),
      answer: t("sorular.cevap15")
    }
  ];

  const [show, setShow] = useState(null);

  // Toggle show/hide answer
  const toggleShow = (id, event) => {
    event.preventDefault(); // Sayfa kaymasını engeller
    setShow(show === id ? null : id); // Aynı id'yi tekrar tıklarsan cevap kapanır, farklı id ise açılır
  };

  return (
    <div className='soru-ana'>
      <div className='d-flex flex-column justify-content-center'>
        <h2 className='text-center m-5 sorular-baslik'>{t("sorular.baslik")}</h2>
        {soruCevap.map(({ id, question, answer }) => (
          <Container className='soru-cont p-2' key={id}>
            <div className="kart-cont card w-100 mb-3">
              <div className="card-body d-flex flex-wrap justify-content-between">
                <p className="card-text kart-baslik">
                  {id} - {question}
                </p>
                {show !== id ? (
                  <button
                    className="icon-btn"
                    onClick={(event) => toggleShow(id, event)} // Prevent default behavior and toggle answer visibility
                    aria-expanded={show === id ? "true" : "false"}
                  >
                    <i className="fa-solid fa-arrow-down"></i>
                  </button>
                ) : (
                  <>
                    <div className="card w-100 border-0">
                      <div className="ikinci-kart">
                        <p className="kart-yazi card-text">{answer}</p>
                        <button
                          className="icon-btn"
                          onClick={(event) => toggleShow(id, event)} // Prevent default behavior and toggle answer visibility
                          aria-expanded="true"
                        >
                          <i className="fa-solid fa-arrow-up"></i>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </Container>
        ))}
      </div>
    </div>
  );
}

export default Sorular;


