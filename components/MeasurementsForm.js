import {validationSchema} from "@/lib/validationSchema";
import {Formik, Form, Field, useFormikContext} from 'formik';
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Text,
    Flex,
    Box,
    FormErrorMessage,
    Center,
    useToast, useDimensions
} from '@chakra-ui/react';
import * as Yup from 'yup';
import {memo, useEffect, useRef, useState} from "react";
import {post} from "@/lib/api";




const initialValues = {
    pregnancies: '',
    glucose: '',
    bloodPressure: '',
    skinThickness: '',
    insulin: '',
    bmi: '',
    diabetesPedigreeFunction: '',
    age: '',
};




const Progress = memo(function Progress() {
    const { values } = useFormikContext();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const validFieldCount = Object.values(values).reduce(
            (count, value) => count + (value !== '' ? 1 : 0),
            0
        );

        const progressValue = (validFieldCount / Object.keys(values).length) * 100;
        setProgress(progressValue);
    }, [values]);

    const gradientColor = `linear(to-r, #50c878 100%, white 100%)`;

    return (
        <Box
            w="100%"
            h="8px"
            rounded={'md'}
            overflow={'hidden'}
            position={'absolute'}
            zIndex={'1000'}
        >
            <Flex
                rounded={'none'}
                height={'100%'}
                bgGradient={gradientColor}
                transition="width linear 200ms"
                width={`${progress}%`}
            >

            </Flex>
        </Box>
    );
});


const MeasurementsForm = memo(function FormikForm({setDisplayDiabetesPrediction, setPredictionFlag}) {
    const toast = useToast()
    const elementRef = useRef()
    const dimensions = useDimensions(elementRef)

    return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
            try {
                const {prediction} = await post('/v1/predict', values);
                setDisplayDiabetesPrediction(true);
                setPredictionFlag(prediction);

            } catch (error) {
                console.error(error);
                toast({
                    description: "Bad Request",
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                })
            }
        }
    }
    >
        {({ errors, touched, isSubmitting }) => (
            <Box mx={3} w={{base: '300px', md: '600px', lg: '800px'}} overflowY={'hidden'} boxShadow={'md'} h={{base: '85%', md: '96%', lg: '420px'}} flexWrap={"wrap"} bg={'white'} rounded={'md'} position={'relative'}>
                <Form>
                    <Flex h={'full'} flexWrap={'wrap'} >
                        <Progress />
                        <Flex flexWrap={'wrap'} h={{base: '400px', md: '90%'}} overflowY={'scroll'} justifyContent={{base: 'center', md: 'flex-start'}}>
                            <Box w={'260px'} p={3}>
                                <Field name="pregnancies">
                                    {({ field }) => (
                                        <FormControl
                                            isRequired
                                            isInvalid={!!(errors.pregnancies && touched.pregnancies)}
                                        >
                                            <FormLabel htmlFor="pregnancies">Pregnancies</FormLabel>
                                            <Input {...field} id="pregnancies" placeholder="Number of pregnancies" />
                                            <FormErrorMessage fontSize={'10px'}>{errors.pregnancies}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </Box>

                            <Box w={'260px'} p={3}>
                                <Field name="glucose">
                                    {({ field }) => (
                                        <FormControl
                                            isRequired
                                            isInvalid={!!(errors.glucose && touched.glucose)}
                                        >
                                            <FormLabel htmlFor="glucose">Glucose</FormLabel>
                                            <Input {...field} id="glucose" placeholder="Glucose level" />
                                            <FormErrorMessage fontSize={'10px'}>{errors.glucose}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </Box>
                            <Box w={'260px'} p={3}>
                                <Field name="insulin">
                                    {({ field }) => (
                                        <FormControl
                                            isRequired
                                            isInvalid={!!(errors.insulin && touched.insulin)}
                                        >
                                            <FormLabel htmlFor="insulin">Insulin</FormLabel>
                                            <Input {...field} id="insulin" placeholder="Insulin level" />
                                            <FormErrorMessage fontSize={'10px'}>{errors.insulin}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </Box>

                            <Box w={'260px'} p={3}>
                                <Field name="bmi">
                                    {({ field }) => (
                                        <FormControl
                                            isRequired
                                            isInvalid={!!(errors.bmi && touched.bmi)}
                                        >
                                            <FormLabel htmlFor="bmi">BMI</FormLabel>
                                            <Input {...field} id="bmi" placeholder="BMI" />
                                            <FormErrorMessage fontSize={'10px'}>{errors.bmi}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </Box>
                            <Box w={'260px'} p={3}>
                                <Field name="age">
                                    {({ field }) => (
                                        <FormControl
                                            isRequired
                                            isInvalid={!!(errors.age && touched.age)}
                                        >
                                            <FormLabel htmlFor="age">Age</FormLabel>
                                            <Input {...field} id="age" placeholder="Age" />
                                            <FormErrorMessage fontSize={'10px'}>{errors.age}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </Box>
                            <Box w={'260px'} p={3}>
                                <Field name="bloodPressure">
                                    {({ field }) => (
                                        <FormControl
                                            isRequired
                                            isInvalid={!!(errors.bloodPressure && touched.bloodPressure)}
                                        >
                                            <FormLabel htmlFor="bloodPressure">Blood Pressure</FormLabel>
                                            <Input {...field} id="bloodPressure" placeholder="Blood Pressure" />
                                            <FormErrorMessage fontSize={'10px'}>{errors.bloodPressure}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </Box>
                            <Box w={'260px'} p={3}>
                                <Field name="diabetesPedigreeFunction">
                                    {({ field }) => (
                                        <FormControl
                                            isRequired
                                            isInvalid={!!(errors.diabetesPedigreeFunction && touched.diabetesPedigreeFunction)}
                                        >
                                            <FormLabel htmlFor="diabetesPedigreeFunction">Diabetes Pedigree Function</FormLabel>
                                            <Input {...field} id="diabetesPedigreeFunction" placeholder="Diabetes Pedigree Function" />
                                            <FormErrorMessage fontSize={'10px'}>{errors.diabetesPedigreeFunction}</FormErrorMessage>

                                        </FormControl>
                                    )}
                                </Field>
                            </Box>
                            <Box w={'260px'} p={3} justifySelf={'flex-start'}>
                                <Field name="skinThickness">
                                    {({ field }) => (
                                        <FormControl
                                            isRequired
                                            isInvalid={!!(errors.skinThickness && touched.skinThickness)}
                                        >
                                            <FormLabel htmlFor="skinThickness">Skin Thickness</FormLabel>
                                            <Input {...field} id="skinThickness" placeholder="Skin Thickness" />
                                            <FormErrorMessage fontSize={'10px'}>{errors.skinThickness}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </Box>
                        </Flex>
                        <Center  w={'full'} h={'80px'}>
                            <Button colorScheme={'teal'} type="submit" isLoading={isSubmitting}>
                                Submit
                            </Button>
                            <Button ml={4} colorScheme={'red'} type="reset">
                                Reset
                            </Button>
                        </Center>
                    </Flex>
                </Form>
            </Box>
        )}
    </Formik>)
});

export default memo(MeasurementsForm)
