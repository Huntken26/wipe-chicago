import React, { useState } from 'react';
import { Box, Image, Text, IconButton } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

const services = [
  {
    id: 1,
    image: 'card1.jpg',
    title: 'Commercial Cleaning Services',
    description: 'Professional cleaning services provided to businesses and commercial properties, including offices, retail stores, hospitals, and schools, with a focus on maintaining a clean and sanitary environment to ensure the health and safety of employees and visitors.'
  },
  {
    id: 2,
    image: 'card2.jpg',
    title: 'Residential Cleaning Services',
    description: 'Cleaning services provided to individual homeowners or renters, typically including tasks such as dusting, vacuuming, and cleaning bathrooms and kitchens, to help maintain a clean and comfortable living space.'
  },
  {
    id: 3,
    image: 'card3.jpg',
    title: 'Industrial Cleaning Services',
    description: 'Specialized cleaning services provided to factories, warehouses, and other industrial facilities, which may involve heavy-duty cleaning equipment and specialized cleaning agents to remove industrial waste and maintain a safe and clean work environment.'
  },
  {
    id: 4,
    image: 'card4.jpg',
    title: 'Quick Gigs',
    description: 'A range of cleaning services that can be completed quickly and efficiently, such as window cleaning, pressure washing, or deep cleaning of a specific area, often provided on an as-needed basis to meet the specific needs of a client.'
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
    <Box maxW="992px" mx="auto" textAlign="center">
      <Box
        d="inline-block"
        position="relative"
        maxH="446px"
        overflow="hidden"
      >
        <IconButton
          aria-label="Previous"
          icon={<ArrowBackIcon />}
          position="absolute"
          top="50%"
          left="0"
          transform="translateY(-50%)"
          onClick={handlePrevClick}
          bgColor="whiteAlpha.500"
          zIndex="1"
          _hover={{ bgColor: "whiteAlpha.700" }}
        />
        <Image
          src={services[activeIndex].image}
          alt={services[activeIndex].title}
          maxW="992px"
          maxH="446px"
        />
        <IconButton
          aria-label="Next"
          icon={<ArrowForwardIcon />}
          position="absolute"
          top="50%"
          right="0"
          transform="translateY(-50%)"
          onClick={handleNextClick}
          bgColor="whiteAlpha.500"
          zIndex="1"
          _hover={{ bgColor: "whiteAlpha.700" }}
        />
      </Box>
      <Text fontWeight="bold" mt="4">{services[activeIndex].title}</Text>
      <Text>{services[activeIndex].description}</Text>
    </Box>
  );
};

export default Carousel;
