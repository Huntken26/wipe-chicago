import React, { useState } from 'react';
import { Box, Text, Image } from '@chakra-ui/react';


const Services = [
  {
    id: 1,
    image: 'card1.jpg',
    title: 'Commercial Cleaning Services',
    description: 'Professional cleaning services provided to businesses and commercial properties, including offices, retail stores, hospitals, and schools.'
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
    description: 'Specialized cleaning services provided to factories, warehouses, and other facilities, which may involve heavy-duty cleaning equipment and specialized cleaning agents.'
  },
  {
    id: 4,
    image: 'card4.jpg',
    title: 'Quick Gigs',
    description: 'A range of cleaning services that can be completed quickly and efficiently, such as window cleaning, pressure washing, or deep cleaning of a specific area, often provided on an as-needed basis.'
  }
];

const ServiceCard = ({ service }) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow={hover ? '0 4px 8px 0 rgba(94, 23, 235, 0.2), 0 6px 20px 0 rgba(94, 23, 235, 0.19)' : ''}

      transition="box-shadow 0.3s ease-in-out"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image src={service.image} alt={service.title} />
      <Box p="6">
        <Text fontWeight="bold" fontSize="xl" mb="2">
          {service.title}
        </Text>
        <Text fontSize="md" color="gray.600">
          {service.description}
        </Text>
      </Box>
    </Box>
  );
};

const ServicesList = () => {
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      {Services.map((service) => (
        <Box key={service.id} m="4">
          <ServiceCard service={service} />
        </Box>
      ))}
    </Box>
  );
};

export default ServicesList;
