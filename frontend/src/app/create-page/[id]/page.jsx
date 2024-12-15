'use client'
import axios from 'axios';
import { Formik, useFormik } from 'formik';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const updatepage = () => {

  const { id } = useParams();
  const [profileData, setProfileData] = useState(null);
  const [coverImage, setCoverImage] = useState('');
  const [logoImage, setLogoImage] = useState('');

  const fetchProfileData = async () => {
    const res = await axios.get('http://localhost:5000/page/getbyid/' + id,);
    console.log(res.data);
    setProfileData(res.data);
  }

  useEffect(() => {
    fetchProfileData();
  }, []);

  const uploadFile = (e, setImage) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'Mypreset'); //Folder
    formData.append('cloud_name', 'dwduh2cgq');   //File

    axios.post('https://api.cloudinary.com/v1_1/dwduh2cgq/image/upload', formData)
      .then((result) => {
        console.log(result.data);
        toast.success('File Uploaded Successfully');
        setImage(result.data.url);
      }).catch((err) => {
        console.log(err);
        toast.error('Failed to upload file');
      });
  }

  const formSubmit = (values) => {
    values.cover = coverImage;
    values.logo = logoImage;
    console.log(values);
    axios.put('http://localhost:5000/page/update/' + id, values)
      .then((result) => {
        toast.success('page Updated Successfully');
        // router.back();
      })
      .catch((err) => {
        console.log(err);
        toast.error('Failed to update page');
      });
  }

  return (
    
    <div className="bg-gray-800 mx-auto md:min-h-screen flex flex-col justify-center items-center px-6 pt-8 pt:mt-0">
      <a
        href=""
        className="text-2xl font-semibold flex justify-center items-center mb-8 lg:mb-10"
      >
        <img src="Logo-Designing.jpg" className="h-10 mr-4" alt="" />
        <span className="self-center text-2xl font-bold whitespace-nowrap">
        </span>
      </a>
      {/* Card */}
      <div className="bg-white shadow rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0">
        <div className="p-6 sm:p-8 lg:p-16 space-y-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Create Page
          </h2>
          {
            profileData !== null ? (
              <Formik initialValues={profileData} onSubmit={formSubmit}>
                {
                  (createForm) => {
                    return <form className="mt-8 space-y-6" onSubmit={createForm.handleSubmit}>
                      <div>
                        <div>
                          <label
                            htmlFor="title"
                            className="text-sm font-medium text-gray-900 block mb-2"
                          >
                            Title
                          </label>
                          <input
                            type="text"
                            id="title"
                            onChange={createForm.handleChange}
                            value={createForm.values.title}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                            placeholder=""
                            required=""
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="cover"
                          className="text-sm font-medium text-gray-900 block mb-2"
                        >
                          Cover
                        </label>
                        <input
                          type="file"
                          onChange={(e) => uploadFile(e, setCoverImage)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                          placeholder=""
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="description"
                          className="text-sm font-medium text-gray-900 block mb-2"
                        >
                          Description
                        </label>
                        <input
                          type="description"
                          name="description"
                          onChange={createForm.handleChange}
                          value={createForm.values.description}
                          placeholder=""
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="image"
                          className="text-sm font-medium text-gray-900 block mb-2"
                        >
                          Image
                        </label>
                        <input
                          type="file"
                          onChange={(e) => uploadFile(e, setLogoImage)}
                          placeholder=""
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="links"
                          className="text-sm font-medium text-gray-900 block mb-2"
                        >
                          Facebook
                        </label>
                        <input
                          type="text"
                          id="facebookLink"
                          onChange={createForm.handleChange}
                          value={createForm.values.facebookLink}
                          placeholder=""
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="links"
                          className="text-sm font-medium text-gray-900 block mb-2"
                        >
                          X
                        </label>
                        <input
                          type="text"
                          id="xLink"
                          onChange={createForm.handleChange}
                          value={createForm.values.xLink}
                          placeholder=""
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="links"
                          className="text-sm font-medium text-gray-900 block mb-2"
                        >
                          Instagram
                        </label>
                        <input
                          type="text"
                          id="instagramLink"
                          onChange={createForm.handleChange}
                          value={createForm.values.instagramLink}
                          placeholder=""
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="links"
                          className="text-sm font-medium text-gray-900 block mb-2"
                        >
                          Github
                        </label>
                        <input
                          type="text"
                          id="githubLink"
                          onChange={createForm.handleChange}
                          value={createForm.values.githubLink}
                          placeholder=""
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="links"
                          className="text-sm font-medium text-gray-900 block mb-2"
                        >
                          Linkedin
                        </label>
                        <input
                          type="text"
                          id="linkedinLink"
                          onChange={createForm.handleChange}
                          value={createForm.values.linkedinLink}
                          placeholder=""
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="links"
                          className="text-sm font-medium text-gray-900 block mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="text"
                          id="gmailLink"
                          onChange={createForm.handleChange}
                          value={createForm.values.gmailLink}
                          placeholder=""
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
                            className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded"
                            required=""
                          />
                        </div>
                       
                      <div className="text-sm ml-3">
                          <label htmlFor="remember" className="font-medium text-gray-900">
                            I accept the{" "}
                            <a href="#" className="text-teal-500 hover:underline">
                              Terms and Conditions
                            </a>
                          </label>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center"
                      >
                        Update Page
                      </button>
                      <Link
                        href={'/viewpage/' + id}
                        className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center"
                      >
                        View Page
                      </Link>
                    </form>
                  }
                }
              </Formik>
            ) : (
              <h1>Loading ... </h1>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default updatepage;