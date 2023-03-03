import React from 'react';
import { Box, Flex, Link, Spacer } from '@chakra-ui/react';


function Navbar() {
  return (
    <Box bg="#5E17EB" py="3">
      <Flex maxW="1200px" mx="auto" px="4">
        <Link href="/" fontSize="xl" fontWeight="bold" color="white">Home</Link>
        <Spacer />
        <Link href="/aboutus" mr="4" color="white">About Us</Link>
        <Link href="/serviceslist" mr="4" color="white">Services</Link>
        <Link href="/map" mr="4" color="white">Map</Link>
        <Link href="/contact" mr="4" color="white">Contact Us</Link>
      </Flex>
    </Box>
  );
}

export default Navbar;

