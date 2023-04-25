'use client'

import FormikForm from "@/components/formikform";
import {Box, Flex} from "@chakra-ui/react";
import {useState} from "react";
import DiabetesPrediction from "@/components/prediction";


export default function Home() {
    const [predictionFlag, setPredictionFlag] = useState(null)
    const [displayDiabetesPrediction, setDisplayDiabetesPrediction] = useState(false)
  return (
      <Box
          bgGradient="linear(to-r, teal.500, green.500)"
          w="100%"
          h="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          overflow={'hidden'}
      >
          {
              displayDiabetesPrediction
              ?
              <DiabetesPrediction predictedFlag={predictionFlag}/>
              :
              <FormikForm setPredictionFlag={setPredictionFlag} setDisplayDiabetesPrediction={setDisplayDiabetesPrediction}/>
          }
      </Box>
  )
}
