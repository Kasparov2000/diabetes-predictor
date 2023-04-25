import {Formik, Form, Field, useFormikContext} from 'formik';
import {FormControl, FormLabel, Input, Button, Text, Flex, Box, FormErrorMessage, Center} from '@chakra-ui/react';
import * as Yup from 'yup';
import {memo, useEffect, useState} from "react";

const validationSchema = Yup.object({
    pregnancies: Yup.number().integer().positive().required(),
    glucose: Yup.number().positive().required(),
    bloodPressure: Yup.number().positive().required(),
    skinThickness: Yup.number().integer().positive().required(),
    insulin: Yup.number().positive().required(),
    bmi: Yup.number().positive().required(),
    diabetesPedigreeFunction: Yup.number().positive().required(),
    age: Yup.number().integer().positive().required(),
});

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

    const gradientColor = `linear(to-r, #50c878 ${progress}%, white ${progress}%)`;

    return (
        <Box
            w="100%"
            h="8px"
            bgGradient={gradientColor}
            transition="width ease-in 2s"
            textAlign="center"
            fontSize="sm"
            fontWeight="bold"
            color="white"
            display="flex"
            alignItems="center"
            rounded={'md'}
            justifyContent="center"
        >
        </Box>
    );
});


const FormikForm = memo(function FormikForm({setDisplayDiabetesPrediction, setPredictionFlag}) {

    return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
            setDisplayDiabetesPrediction(true)
            setPredictionFlag(true)
            setSubmitting(false);
        }
    }
    >
        {({ errors, touched, isSubmitting }) => (
            <Form>
                <Flex w={'80%'} h={'360px'} mx={'auto'} flexWrap={"wrap"} bg={'white'} rounded={'md'} position={'relative'}>
                    <Progress/>
                    <Box w={'25%'} p={3}>
                        <Field name="pregnancies">
                            {({ field }) => (
                                <FormControl
                                    isRequired
                                    isInvalid={!!(errors.pregnancies && touched.pregnancies)}
                                >
                                    <FormLabel htmlFor="pregnancies">Pregnancies</FormLabel>
                                    <Input {...field} id="pregnancies" placeholder="Number of pregnancies" />
                                    <FormErrorMessage>{errors.pregnancies}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </Box>

                    <Box w={'25%'} p={3}>
                        <Field name="glucose">
                            {({ field }) => (
                                <FormControl
                                    isRequired
                                    isInvalid={!!(errors.glucose && touched.glucose)}
                                >
                                    <FormLabel htmlFor="glucose">Glucose</FormLabel>
                                    <Input {...field} id="glucose" placeholder="Glucose level" />
                                    <FormErrorMessage>{errors.glucose}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </Box>
                    <Box w={'25%'} p={3}>
                        <Field name="insulin">
                            {({ field }) => (
                                <FormControl
                                    isRequired
                                    isInvalid={!!(errors.insulin && touched.insulin)}
                                >
                                    <FormLabel htmlFor="insulin">Insulin</FormLabel>
                                    <Input {...field} id="insulin" placeholder="Insulin level" />
                                    <FormErrorMessage>{errors.insulin}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </Box>

                    <Box w={'25%'} p={3}>
                        <Field name="bmi">
                            {({ field }) => (
                                <FormControl
                                    isRequired
                                    isInvalid={!!(errors.bmi && touched.bmi)}
                                >
                                    <FormLabel htmlFor="bmi">BMI</FormLabel>
                                    <Input {...field} id="bmi" placeholder="BMI" />
                                    <FormErrorMessage>{errors.bmi}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </Box>
                    <Box w={'25%'} p={3}>
                        <Field name="age">
                            {({ field }) => (
                                <FormControl
                                    isRequired
                                    isInvalid={!!(errors.age && touched.age)}
                                >
                                    <FormLabel htmlFor="age">Age</FormLabel>
                                    <Input {...field} id="age" placeholder="Age" />
                                    <FormErrorMessage>{errors.age}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </Box>
                    <Box w={'25%'} p={3}>
                        <Field name="bloodPressure">
                            {({ field }) => (
                                <FormControl
                                    isRequired
                                    isInvalid={!!(errors.bloodPressure && touched.bloodPressure)}
                                >
                                    <FormLabel htmlFor="bloodPressure">Blood Pressure</FormLabel>
                                    <Input {...field} id="bloodPressure" placeholder="Blood Pressure" />
                                    <FormErrorMessage>{errors.bloodPressure}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </Box>
                    <Box w={'25%'} p={3}>
                        <Field name="diabetesPedigreeFunction">
                            {({ field }) => (
                                <FormControl
                                    isRequired
                                    isInvalid={!!(errors.diabetesPedigreeFunction && touched.diabetesPedigreeFunction)}
                                >
                                    <FormLabel htmlFor="diabetesPedigreeFunction">Diabetes Pedigree Function</FormLabel>
                                    <Input {...field} id="diabetesPedigreeFunction" placeholder="Diabetes Pedigree Function" />
                                    <FormErrorMessage>{errors.diabetesPedigreeFunction}</FormErrorMessage>

                                </FormControl>
                            )}
                        </Field>
                    </Box>
                    <Box w={'25%'} p={3}>
                        <Field name="skinThickness">
                            {({ field }) => (
                                <FormControl
                                    isRequired
                                    isInvalid={!!(errors.skinThickness && touched.skinThickness)}
                                >
                                    <FormLabel htmlFor="skinThickness">Skin Thickness</FormLabel>
                                    <Input {...field} id="skinThickness" placeholder="Skin Thickness" />
                                    <FormErrorMessage>{errors.skinThickness}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </Box>
                    <Center w={'full'} h={'15%'}>
                        <Button colorScheme={'teal'} type="submit" isLoading={isSubmitting} mt={4}>
                            Submit
                        </Button>
                        <Button ml={4} colorScheme={'red'} type="reset" isLoading={isSubmitting} mt={4}>
                            Reset
                        </Button>

                    </Center>

                </Flex>
            </Form>
        )}
    </Formik>)
});

export default memo(FormikForm)
