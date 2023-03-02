import React from 'react';
import { Box, Center, Image } from '@chakra-ui/react';

function Hero() {
  return (
    <Box bg="#ffffff" py="16">
      <Center>
        <Image src="wipe.png" alt="Logo" maxW="600px" />
      </Center>
    </Box>
  );
}

export default Hero;
