import {Box, Center, Heading, Icon, IconButton, Text} from "@chakra-ui/react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import {BsArrowReturnLeft} from "react-icons/bs";

export default function DiabetesPrediction({ predictedFlag, setDisplayDiabetesPrediction }) {
    return (
        <Box bg="white" rounded="md" h={'200px'} p={4} position="relative" mt="4">
            <IconButton
                onClick={() => setDisplayDiabetesPrediction(false)}
                size="2sm"
                as={BsArrowReturnLeft}
                position="absolute"
                top={2}
                right={2}
                color="red"
                aria-label={''}
                _hover={{ color: 'white', bg: 'red.500' }}
            />

            <Center h={'85%'} w={'full'} >
                {predictedFlag ? (
                    <Box display="flex" alignItems="center" bgGradient="linear(to-r, red.500, pink.500)" px="6" py="3" rounded="lg">
                        <Icon as={FaTimesCircle} boxSize={6} color="white" />
                        <Text ml="4" fontWeight="bold" fontSize="xl" color="white">
                            High Risk
                        </Text>
                    </Box>
                ) : (
                    <Box display="flex" alignItems="center" bgGradient="linear(to-r, green.500, teal.500)" px="6" py="3" rounded="lg">
                        <Icon as={FaCheckCircle} boxSize={6} color="white" />
                        <Text ml="4" fontWeight="bold" fontSize="xl" color="white">
                            Low Risk
                        </Text>
                    </Box>
                )}
            </Center>
        </Box>
    );
}
