import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { soruCevap } from '../helper/questions';
import "../css/kurumsal.css";

const Sorular = () => {
  const [show, setShow] = useState(null);

  // Toggle show/hide answer
  const toggleShow = (id, event) => {
    event.preventDefault(); // Sayfa kaymasını engeller
    setShow(show === id ? null : id); // Aynı id'yi tekrar tıklarsan cevap kapanır, farklı id ise açılır
  };

  return (
    <div className='soru-ana'>
      <div className='d-flex flex-column justify-content-center'>
        <h2 className='text-center m-5 sorular-baslik'>SIKÇA SORULAN SORULAR</h2>
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


