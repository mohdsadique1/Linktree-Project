'use client'
import axios from 'axios';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Password required')
    .matches(/[a-z]/, 'Lower case letter is required')
    .matches(/[A-Z]/, 'Upper case letter is required')
    .matches(/[0-9]/, 'Number is required')
    .matches(/\W/, 'Special character is required'),
  confirmPassword: Yup.string().required(' Confirm Password Required')
    .oneOf([Yup.ref('password'), null], 'Password must match')
});

const Signup = () => {

  const router = useRouter();

  const createPage = async (name, userid) => {
    const res = await axios.post('http://localhost:5000/page/add', {
      title: `${name}s Profile'`
    });
    const profileData = res.data;
    const res2 = await axios.put('http://localhost:5000/user/update/' + userid, { profile: profileData._id });
    router.push('/login');
  }

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: (values) => {
      console.log(values);

      axios.post('http://localhost:5000/user/add', values)
        .then((result) => {
          toast.success('User added successfully');
          createPage(result.data.name, result.data._id)
        }).catch((err) => {
          console.log(err);
          toast.error(err?.response?.data?.message || 'some error occured');
        });
    },
    validationSchema: SignupSchema
  });

  return (
    <div className=" bg-white mx-auto md:h-screen flex flex-col justify-center items-center px-6 pt-8 pt:mt-0">
      <a
        href="/"
        className="text-2xl font-semibold flex justify-center items-center mb-8 lg:mb-10"
      >
        <img src="dsfds" className="h-10 mr-4" alt="" />
        <span className="self-center text-2xl font-bold whitespace-nowrap">
        </span>
      </a>
      {/* Card */}
      <div className="bg-white border border-gray-300 shadow rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0">
        <div className="p-6 sm:p-8 lg:p-16 space-y-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
            Create a Free Account
          </h2>
          <form onSubmit={signupForm.handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-800 block mb-2"
              >
                Your name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={signupForm.handleChange}
                value={signupForm.values.name}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Enter your name"
                required=""
              />
              {
                    (signupForm.errors.name && signupForm.touched.name) && (
                      <p className="text-xs text-red-600 mt-2" id="name-error">
                        {signupForm.errors.name}
                      </p>
                    )
                  }
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-800 block mb-2"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={signupForm.handleChange}
                value={signupForm.values.email}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-800 block mb-2"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={signupForm.handleChange}
                value={signupForm.values.password}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="text-sm font-medium text-gray-800 block mb-2"
              >
                Confirm password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                onChange={signupForm.handleChange}
                value={signupForm.values.confirmPassword}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                required=""
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  name="remember"
                  type="checkbox"
                  className="bg-gray-50 border-gray-300 focus:ring-3 mt-2 focus:ring-cyan-200 h-4 w-4 rounded"
                  required=""
                />
              </div>
              <div className="text-sm ml-3">
                <label htmlFor="remember" className="font-medium text-white">
                  I accept the{" /"}
                  <a href="#" className="text-indigo-400 hover:underline">
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 hover:bg-indigo-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-base px-2 py-3 w-full sm:w-auto mt-2 text-center"
            >
              Create account
            </button>
            <div className="text-sm font-medium text-white">
              Already have an account?{"/ "}
              <Link href="/Login" className="text-indigo-400 py-4 space-x-px hover:underline mt-2">
                Login here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Signup;