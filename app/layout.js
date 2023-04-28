'use client'
import {Providers} from "@/app/providers";
import {memo} from "react";
import {Box, Flex, VStack, Text, Center} from "@chakra-ui/react";
import { FaCalculator } from "react-icons/fa";

function DiabetesRiskCalculatorLogo() {
    return (
        <Flex alignItems="center" h={'100%'} w={'100%'}>
            <Center
                bgGradient="linear(to-r, #00bfff, #00ff7f)"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                w="10"
                h="10"
                mr="2"
            >
                <FaCalculator size={'24'} color="#fff" />
            </Center>
            <Text fontSize={{base: 'sm', md: "xl"}} fontFamily="sans-serif" fontWeight="bold" color="blue.600" letterSpacing={{md: '3px'}}>
                Diabetes Risk Calculator
            </Text>
        </Flex>
    );
}

const Navbar = memo(function Navbar () {
    return (
        <Flex h={'10%'} w={'full'} bg={'white'} px={2} boxShadow='0px 2px 5px teal'>
            <DiabetesRiskCalculatorLogo/>
        </Flex>
    )
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
            <Flex justifyContent={'center'} w={'100vw'} h={'100vh'} bg={'linear-gradient(to right, teal, green)'} overflowY={'scroll'}>
                <Box maxW={'1280px'} w={'full'}>
                    <Navbar/>
                    {children}
                </Box>
            </Flex>
        </Providers>
      </body>
    </html>
  )
}
