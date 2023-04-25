import { Box, Heading, Icon } from "@chakra-ui/react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";



export default function DiabetesPrediction({ predictedFlag }) {
    return (
        <Box mt="4" bg={'white'} rounded={'md'} w={'40%'} h={'40%'} position={'relative'}>
            <Icon as={''} position={'absolute'} top={0} right={2} color={'red'}/>
            <Heading as="h2" size="md" >
                Diabetes Prediction:
            </Heading>
            {predictedFlag ? (
                <Box display="flex" alignItems="center" mt="2">
                    <Icon as={FaTimesCircle} boxSize={6} color="red.500" />
                    <Box ml="2">Diabetes Detected</Box>
                </Box>
            ) : (
                <Box display="flex" alignItems="center" mt="2">
                    <Icon as={FaCheckCircle} boxSize={6} color="green.500" />
                    <Box ml="2">No Diabetes Detected</Box>
                </Box>
            )}
        </Box>
    );
}
