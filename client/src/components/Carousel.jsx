import React, { useState } from 'react';
import { Box, Image, Text, IconButton } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

const services = [
  {
    id: 1,
    image: '/service1.jpg',
    title: 'Service 1',
    description: 'Description for Service 1'
  },
  {
    id: 2,
    image: '/service2.jpg',
    title: 'Service 2',
    description: 'Description for Service 2'
  },
  {
    id: 3,
    image: '/service3.jpg',
    title: 'Service 3',
    description: 'Description for Service 3'
  }
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((activeIndex - 1 + services.length) % services.length);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % services.length);
  };

  return (
    <Box textAlign="center">
      <Box d="inline-block" position="relative">
        <IconButton
          aria-label="Previous"
          icon={<ArrowBackIcon />}
          position="absolute"
          top="50%"
          left="-20px"
          transform="translateY(-50%)"
          onClick={handlePrevClick}
        />
        <Image src={services[activeIndex].image} alt={services[activeIndex].title} />
        <IconButton
          aria-label="Next"
          icon={<ArrowForwardIcon />}
          position="absolute"
          top="50%"
          right="-20px"
          transform="translateY(-50%)"
          onClick={handleNextClick}
        />
      </Box>
      <Text fontWeight="bold" mt="4">{services[activeIndex].title}</Text>
      <Text>{services[activeIndex].description}</Text>
    </Box>
  );
};

export default Carousel;

