'use client'
import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Login = () => {

  const router = useRouter();

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    onSubmit: async (values) => {
      console.log(values);

      const res = await axios.post('http://localhost:5000/user/authenticate', values)
      console.log(res.data);
      console.log(res.status);

      if (res.status === 200) {
        localStorage.setItem('token', res.data.token);
        router.push('/create-page/' + res.data.profile)
      }

    }
  });

  return (
    <div className="bg-white mx-auto md:h-screen flex flex-col justify-center items-center px-6 pt-8 pt:mt-0">
      <a
        href=""
        className="text-2xl font-semibold flex justify-center items-center mb-8 lg:mb-10"
      >
        <img src="Logo-Design" className="h-10 mr-4" alt="" />
        <span className="self-center text-2xl font-bold whitespace-nowrap">
        </span>
      </a>
      {/* Card */}
      <div className="bg-white text-white border border-gray-300 shadow rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0">
        <div className="p-6 sm:p-8 lg:p-16 space-y-8">
          <h2 className="text-2xl lg:text-3xl text-gray-800 font-bold">
            Sign in to platform
          </h2>
        
          <form onSubmit={loginForm.handleSubmit} className="mt-8 space-y-6" action="#">

            <div>
              <label
                htmlFor="email"
                className="text-sm text-gray-800 font-medium block mb-2"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={loginForm.handleChange}
                value={loginForm.values.email}
                className="bg-gray-50 text-gray-800 border border-gray-300 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="name@company.com"
                required=""
                aria-describedby='email-error'
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm text-gray-800 font-medium block mb-2"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                onChange={loginForm.handleChange}
                value={loginForm.values.password}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                required=""
                aria-describedby='passworderror'
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  name="remember"
                  type="checkbox"
                  className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded"
                  required=""
                />
              </div>
              <div className="text-sm ml-3">
                <label htmlFor="remember" className="font-medium">
                  Remember me
                </label>
              </div>
              <Link
                href="/Login"
                className="text-sm text-indigo-400 hover:underline ml-auto"
              >
                Forget Password?
              </Link>
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 hover:bg-indigo-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center"
            >
              Login to your account
            </button>
            <div className="grid gap-y-4"></div>
            <div className="text-sm font-medium text-gray-500">
              Not registered?{"/ "}
              <Link href="/Signup" className="text-indigo-400 hover:underline">
                Create account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Login;