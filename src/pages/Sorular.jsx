import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { soruCevap } from '../helper/questions';
import "../css/kurumsal.css"


const Sorular = () => {

  const [show, setShow] = useState(false);

    
  const toggleShow = (id) => {
      setShow(show === id ? false : id);
  };

  return (
    <div className='endis' >
    <h2 className='text-center'>SIKÇA SORULAN SORULAR</h2>
    {soruCevap.map(({ id, question, answer }) => (
<Container className='soru-cont' key={id} >
<div className="card w-100 mb-3">
<div className="card-body">
<p className="card-text baslik">
             {id} - {question}
</p>
{show !== id ? (
    <a href="#" className="icon-btn "
     onClick={() => toggleShow(id)}
     
    >
    <FaArrowCircleDown />
    </a>
) : (
    <>
        <div className="card w-100">
            <div className="ikinci-kart">
              
                <p className="card-text">{answer}</p>
                <button className="icon-btn " onClick={() => toggleShow(id)}>
                <FaArrowAltCircleUp />
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
  )
}

export default Sorular

