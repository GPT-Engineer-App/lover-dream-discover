import { Box, Text, Heading, VStack } from '@chakra-ui/react';

const Music = () => (
  <Box p={4}>
    <Heading mb={4} textAlign="center">Music</Heading>
    <VStack spacing={4}>
      <Text>Listen to our latest tracks and explore our discography.</Text>
      {/* Placeholder for music player */}
    </VStack>
  </Box>
);

export default Music;