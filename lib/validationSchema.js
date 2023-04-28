import * as Yup from "yup";

export const validationSchema = Yup.object({
    pregnancies: Yup.number().integer().positive().required(),
    glucose: Yup.number().positive().required(),
    bloodPressure: Yup.number().positive().required(),
    skinThickness: Yup.number().integer().positive().required(),
    insulin: Yup.number().positive().required(),
    bmi: Yup.number().positive().required(),
    diabetesPedigreeFunction: Yup.number().positive().required(),
    age: Yup.number().integer().positive().required(),
});