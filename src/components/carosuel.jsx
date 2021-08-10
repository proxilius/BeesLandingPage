
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import pic from './pics/bee1.jpg'
export const MyCarousel = (props) => {


  return (
    <div id='about3'>
      <div className='container'>
        <h1> <span class='backForTudtadE'>Tudtad-e?</span> </h1>
        <div className='row'>
        <Carousel>
        <Carousel.Item >
          <img
            style={{ display:"flex", width:"100%", height:"800px",}}
            src="img/BeesPictures/carousel1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>A méz korlátlan ideig elàll, tehát nincsen lejárati ideje. Természetesen és a méhek álltál előállított mézre vonatkozik és nem a laboratóriumokban előállított mesterséges mézre. </h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ display:"flex", width:"100%", height:"800px"}}
            src="img/BeesPictures/carousel2.jpg"
            alt="Third slide"
          />

        <Carousel.Caption>
          <h3>A legrégebbi üveg méz 5500 éves , azt azonban tudni kell hogy a mez állásában bekristályosodik és elveszti sűrű folyós állagát, azonban óvatos melegítés el visszanyeri eredeti állagát.</h3>
        </Carousel.Caption>
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ display:"flex", width:"100%", height:"800px"}}
            src="img/BeesPictures/carousel3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Tehát, ha termelői mézet veszel és a címkén szereplő dátum után fogyasztod, akkor sem kell aggódni. Az a dátum csupán a szigorú előírások miatt van feltüntetve.</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>
      </div>
    </div>
  )
}
