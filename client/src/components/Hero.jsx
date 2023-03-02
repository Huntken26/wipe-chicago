import React from 'react';
import { Box, Center, Image } from '@chakra-ui/react';
import './css/Hero.css'; // import CSS file

function Hero() {
  return (
    <Box bg="#ffffff" py="16">
      <Center>
        <Image src="wipe.png" alt="Logo" maxW="600px" className="animate" />
      </Center>
    </Box>
  );
}

export default Hero;
