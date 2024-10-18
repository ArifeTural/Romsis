import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { soruCevap } from '../helper/questions';
import "../css/kurumsal.css"


const Sorular = () => {

  const [show, setShow] = useState(false);

    
  const toggleShow = (id) => {
      setShow(show === id ? false : id);
  };

  return (
    <div className='soru-ana'>
    <div className='d-flex flex-column justify-content-center'>
    <h2 className='text-center m-5 sorular-baslik'>SIKÇA SORULAN SORULAR</h2>
    {soruCevap.map(({ id, question, answer }) => (
<Container className='soru-cont p-2' key={id} >
<div className="kart-cont card w-100 mb-3">
<div className="card-body d-flex flex-wrap justify-content-between">
<p className="card-text kart-baslik">
             {id} - {question}
</p>
{show !== id ? (
    <a href="#" className="icon-btn "
     onClick={() => toggleShow(id)}
     
    >
 <i class="fa-solid fa-arrow-down"></i>
    </a>
) : (
    <>
        <div className="card w-100 border-0">
            <div className="ikinci-kart">
              
                <p className="kart-yazi card-text">{answer}</p>
                <button className="icon-btn " onClick={() => toggleShow(id)}>
                <i class="fa-solid fa-arrow-up"></i>
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

  )
}

export default Sorular

