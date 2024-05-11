import { Box, Text, Heading, VStack } from '@chakra-ui/react';

const Merchandise = () => (
  <Box p={4}>
    <Heading mb={4} textAlign="center">Merchandise</Heading>
    <VStack spacing={4}>
      <Text>Check out our latest merchandise and show your support for Lover Dream!</Text>
      {/* Placeholder for merchandise grid */}
    </VStack>
  </Box>
);

export default Merchandise;