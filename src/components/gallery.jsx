import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'


import { Gallery, Item } from 'react-photoswipe-gallery'

export const MyGallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container' >
        <h1>Galéria</h1>
      <Gallery >
        <div className="container">
          <div className="row">
          <div className="col-md-3 ">
          <div className="gallery-pic-item">
              <Item
                  original="/img/BeesPictures/Gallery/1.jpg"
                  width="1024"
                  height="768"
                  
                >
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src="/img/BeesPictures/Gallery/1_t.jpg" />
                  )}
              </Item>
          </div>
            
        </div>
        <div className="col-md-3">
        <div className="gallery-pic-item">
            <Item
                original="/img/BeesPictures/Gallery/2.jpg"
                width="1024"
                height="768"
                
              >
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} src="/img/BeesPictures/Gallery/2_t.jpg" />
                )}
            </Item>
            </div>
        </div>
        <div className="col-md-3">
        <div className="gallery-pic-item">
            <Item
                original="/img/BeesPictures/Gallery/4.jpg"
                width="1024"
                height="768"
                
              >
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} src="/img/BeesPictures/Gallery/4_t.jpg" />
                )}
            </Item>
            </div>
        </div>
          </div>
        
        </div>
        

          
    </Gallery>
 
      </div>
    </div>
  )
}
