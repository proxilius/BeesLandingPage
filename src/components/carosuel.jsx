
import { Carousel } from "react-bootstrap";
import pic from './pics/bee1.jpg'
export const MyCarousel = (props) => {
  return (
    <div id='about3'>
      <div className='container-fluid'>
        <div className='row' >
        <Carousel>
        <Carousel.Item style={{ justifyContent:"center"}}>
          <img
            style={{ display:"flex", width:"100%", height:"90%",}}
            src={pic}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ display:"flex", width:"100%", height:"90%"}}
            src="https://res.cloudinary.com/tpostr/image/upload/v1553865338/paparouna/IMG_7621-01.jpg"
            alt="Third slide"
          />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ display:"flex", width:"100%", height:"90%"}}
            src="https://res.cloudinary.com/tpostr/image/upload/v1553865337/paparouna/IMG_7615-01.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>
      </div>
    </div>
  )
}
