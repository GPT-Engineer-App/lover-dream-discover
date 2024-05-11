import { Box, Text, Heading, VStack } from '@chakra-ui/react';

const Contact = () => (
  <Box p={4}>
    <Heading mb={4} textAlign="center">Contact Us</Heading>
    <VStack spacing={4}>
      <Text>Have questions? Reach out to us through any of the platforms below.</Text>
      {/* Placeholder for contact form and social media links */}
    </VStack>
  </Box>
);

export default Contact;