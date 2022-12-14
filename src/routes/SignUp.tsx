import { Formik } from "formik";
import { useLoaderData } from "react-router";
import TextInput from "../components/TextInput";
import SelectInput from "../components/SelectInput";
import * as Yup from "yup";

const SignUp = () => {
  const signUpData = useLoaderData();

  const onSubmit = (values) => {
    console.log("submit: ", values);
  };

  return (
    <div className="py-24 flex flex-col items-center bg-gradient-to-r from-emerald-900 to-teal-800 min-h-screen">
      <h1 className="text-emerald-500 font-bold text-3xl mb-8">
        Sign Up for the{" "}
        <span className="text-pink-400">Egg Nog Extravaganza</span>
      </h1>

      <div className="bg-gradient-to-r from-neutral-300 to-neutral-50 rounded border-b-[20px] border-emerald-700 p-8 w-1/2">
        <p className="text-neutral-900 text-sm text-center mb-4">
          A little information is required to add you to the guest list. We'll
          see you there. Stay Noggy!
        </p>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            passwordConfirmation: "",
            occupation: "",
            state: "",
          }}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(formikProps) => {
            return (
              <form
                onSubmit={formikProps.handleSubmit}
                className="flex flex-col"
              >
                <div className="flex justify-between mb-4">
                  <TextInput label="Full Name" name="name" className="flex-1" />
                  <TextInput
                    label="Email"
                    name="email"
                    className="ml-8 flex-1"
                    type="email"
                  />
                </div>
                <div className="flex justify-between mb-4">
                  <TextInput
                    label="Password"
                    name="password"
                    className="flex-1"
                    type="password"
                  />
                  <TextInput
                    label="Confirm Password"
                    name="passwordConfirmation"
                    className="ml-8 flex-1"
                  />
                </div>

                <SelectInput
                  label="Occupation"
                  name="occupation"
                  className="mb-4"
                />

                <SelectInput label="State" name="state" className="mb-4" />

                <button
                  type="submit"
                  className="text-xl font-bold text-white bg-emerald-800 hover:bg-pink-400 hover:text-emerald-900 py-4 px-10 rounded-lg "
                >
                  Submit
                </button>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Full name is required"),
  email: Yup.string().email().required("Email address is required"),
  password: Yup.string().min(6).required("Password is required"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
});

export default SignUp;
