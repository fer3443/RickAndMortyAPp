import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

import '../carrousel/CarrousellH.css'
function CarrousellH() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className='carouselContainer' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <Image src="src/assets/rick_and_morty_carrousel.jpg" thumbnail={true} />
      </Carousel.Item>
      <Carousel.Item>
      <Image src="src/assets/rick_and_morty_carrousel.jpg" thumbnail={true} />
      </Carousel.Item>
      <Carousel.Item>
      <Image src="src/assets/rick_and_morty_carrousel.jpg" thumbnail={true} />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarrousellH;