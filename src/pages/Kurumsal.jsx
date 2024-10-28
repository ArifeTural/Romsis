import React from 'react'
import { referans } from '../helper/referans'

const Kurumsal = () => {
  return (
    <div>

    <div className='h-25 d-flex justify-content-center gap-3 m-5 pt-5 '>

    <div className="card  text-center w-25">
  <div className="card-body ">
      <h1 className='text-primary'><i class="fa-solid fa-users"></i></h1>
       <p>20.000 +</p>
       <p>Müşteri</p>
  </div>
</div>
<div className="card  text-center w-25">
  <div className="card-body">
      <h1 className='text-secondary'><i class="fa-solid fa-globe"></i></h1>
       <p>3 +</p>
       <p>Ülkede Ofis</p>
  </div>
</div>
<div className="card text-center w-25">
  <div className="card-body">
      <h1 className='ext-danger-emphasis'><i class="fa-solid fa-briefcase"></i></h1>
        <p>12 +</p>
       <p>Satış Yapılan Ülke</p>
  </div>
</div>

    </div>


    <div className='ref'>
{referans.map((ar)=>{
  const {id, image} = ar
  return(
    <div className="ref-card " style={{ width: "12rem" }} key={id}>
  <img src={image} className="card-img-top" alt="..." />

</div>

  )
})}

</div>
    </div>
  )
}

export default Kurumsal