import { Box, Text, Heading, VStack } from '@chakra-ui/react';

const Tour = () => (
  <Box p={4}>
    <Heading mb={4} textAlign="center">Tour Dates</Heading>
    <VStack spacing={4}>
      <Text>January 20, 2024 - New York, NY - Madison Square Garden</Text>
      <Text>February 15, 2024 - Los Angeles, CA - Staples Center</Text>
      <Text>March 12, 2024 - London, UK - O2 Arena</Text>
    </VStack>
  </Box>
);

export default Tour;