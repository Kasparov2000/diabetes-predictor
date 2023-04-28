'use client'

import FormikForm from "@/components/MeasurementsForm";
import {Box, Flex} from "@chakra-ui/react";
import {useState} from "react";
import DiabetesPrediction from "@/components/prediction";


export default function Home() {
    const [predictionFlag, setPredictionFlag] = useState(null)
    const [displayDiabetesPrediction, setDisplayDiabetesPrediction] = useState(false)
  return (
      <Box
          display="flex"
          justifyContent="center"
          overflowY={'scroll'}
          py={{base: 6}}
      >
          {
              displayDiabetesPrediction
              ?
              <DiabetesPrediction predictedFlag={predictionFlag} setDisplayDiabetesPrediction={setDisplayDiabetesPrediction}/>
              :
              <FormikForm setPredictionFlag={setPredictionFlag} setDisplayDiabetesPrediction={setDisplayDiabetesPrediction}/>
          }
      </Box>
  )
}
