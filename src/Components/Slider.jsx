import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Slider() {

  return (
    <>
          <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} className="mt-16">
                    <div>
                        <img src="assets/poster-1.png" />
                    </div>
                    <div>
                        <img src="assets/poster-2.png" />
                    </div>
                    <div>
                        <img src="assets/poster-3.png" />
                    </div>    
          </Carousel>
    </>
  );
}

export default Slider;