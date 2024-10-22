import React from 'react'

const whatsapp = () => {
    const phoneNumber = '905367409930'; 
    const message = 'Merhaba, size ulaşmak istiyorum.';
  
    const handleClick = () => {
      console.log("WhatsApp yönlendirmesi yapılıyor...");
    };
  return (
    
     <div className="whatsapp-support">
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="whatsapp-link"
          onClick={handleClick} 
        >
          <i className="fab fa-whatsapp"></i> 
          WhatsApp Destek Hattı ile İletişime Geçin
        </a>
      </div>

  )
}

export default whatsapp

