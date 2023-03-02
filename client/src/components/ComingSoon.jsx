import { Box, Image, Heading, Text } from "@chakra-ui/react";

const ComingSoon = () => {
  return (
    <Box maxWidth="md" mx="auto" marginBottom="40px">
      <Image
        src="applocation.png"
        alt="Image description"
        w="100%"
        h="auto"
        objectFit="cover"
      />
      <Heading as="h2" size="lg" mt={4}>
        Coming Soon!
      </Heading>
      <Text mt={2}>
        An app is being created for quick gigs. Stay tuned for updates.
      </Text>
    </Box>
  );
};

export default ComingSoon;
