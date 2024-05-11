import { Box, Text, Heading, VStack, Flex } from '@chakra-ui/react';

const About = () => (
  <Box p={4}>
    <Flex direction="column" align="center" justify="center" p={10}>
      <Heading mb={4}>About Lover Dream</Heading>
      <Text fontSize="lg" mb={6}>Lover Dream is a band known for its unique blend of genres and captivating live performances. Formed in 2010, the band has grown significantly, touching the hearts of fans worldwide.</Text>
    </Flex>
    <Box bg="gray.100" p={10}>
      <Heading size="lg" textAlign="center" mb={4}>Band Members</Heading>
      <VStack spacing={5}>
        <Text>John Doe - Vocals</Text>
        <Text>Jane Smith - Guitar</Text>
        <Text>Mike Ross - Drums</Text>
      </VStack>
      <Heading size="lg" textAlign="center" mb={4} mt={6}>Timeline</Heading>
      <VStack spacing={3}>
        <Text>2010 - Band formed</Text>
        <Text>2012 - First album release</Text>
        <Text>2015 - International tour</Text>
      </VStack>
    </Box>
  </Box>
);

export default About;