'use client';
import { IconBrandFacebook, IconBrandGithub, IconBrandGmail,IconBrandInstagram, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react';
import axios from 'axios';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Viewpage = () => {

  const { id } = useParams();
  const [profileData, setProfileData] = useState(null);

  const fetchProfileData = async () => {
    const res = await axios.get('http://localhost:5000/page/getbyid/' + id);
    console.log(res.data);
    setProfileData(res.data);
  }

  useEffect(() => {
    fetchProfileData();
  }, [])

  if (profileData === null) {
    return <h1>Loading ... </h1>
  }

  return (
    <>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
            {/* image - start */}
            <img
              src={profileData.cover || '#'}
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            {/* image - end */}
            {/* overlay - start */}
            <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
            {/* overlay - end */}
          </section>
        </div>
        <div className="mx-auto max-w-screen-xl px-4 md:px-8 mt-6">
          <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
            {/* image - start */}
            <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
              <img
                src={profileData.logo || '#'}
                loading="lazy"
                alt="Photo by Fakurian Design"
                className="h-full w-full object-cover object-center"
              />
            </div>
            {/* image - end */}
            {/* content - start */}
            <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
              <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
                {profileData.title}
              </h1>
              <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
                Very proud to introduce about my linktree project
              </p>
              <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
              Linktree is widely used for social media profiles, allowing users to share multiple links from a single URL.
              You can make your Linktree clone more dynamic and visually appealing by adding animations or transitions when users interact with the page.
              </p>
              <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="#"
                  className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                >
                  Start now
                </a>
                <a
                  href="#"
                  className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                >
                  Take tour
                </a>
              </div>
            </div>
            {/* content - end */}



          </section>
        </div>
      </div>

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* text - start */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Our support links
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            If you enjoy the content I create and want to support me, you can
             visit on social media platforms and support me.
            </p>
          </div>
          {/* text - end */}
          <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
            {/* feature - start */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <Link href={profileData.facebookLink || '#'} target='_blank'>
                  <IconBrandFacebook />
                </Link>
               
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">Facebook</h3>
                <p className="mb-2 text-gray-500">
                  View Facebook Profile
                </p>
                <a
                  href="https://www.facebook.com/"
                  className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                </a>
              </div>
            </div>
            {/* feature - end */}
            {/* feature - start */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <Link href={profileData.xLink || '#'} target='_blank'>
                  <IconBrandX />
                </Link>
                
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">X</h3>
                <p className="mb-2 text-gray-500">
                  View My X Profile
                </p>
                <a
                  href="https://x.com/"
                  className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                </a>
              </div>
            </div>
            {/* feature - end */}
            {/* feature - start */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <Link href={profileData.instagramLink || '#'} target='_blank'>
                  <IconBrandInstagram />
                </Link>
               
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">Instagram</h3>
                <p className="mb-2 text-gray-500">
                  View Instagram Profile
                </p>
                <a
                  href="https://www.instagram.com/"
                  className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                </a>
              </div>
            </div>
            {/* feature - end */}
            {/* feature - start */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <Link href={profileData.githubLink || '#'} target='_blank'>
                  <IconBrandGithub />
                </Link>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">Github</h3>
                <p className="mb-2 text-gray-500">
                 View My Github Profile
                </p>
                <a
                  href="https://github.com/"
                  className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                </a>
              </div>
            </div>
            {/* feature - end */}
            {/* feature - start */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <Link href={profileData.linkedinLink || '#'} target='_blank'>
                  <IconBrandLinkedin />
                </Link>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">Linkedin</h3>
                <p className="mb-2 text-gray-500">
                  View Linkedin Profile
                </p>
              </div>
            </div>
            {/* feature - end */}
            {/* feature - start */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <Link href={profileData.gmailLink || '#'} target='_blank'>
                  <IconBrandGmail />
                </Link>
               
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">@mail</h3>
                <p className="mb-2 text-gray-500">
                  Sadiquemohd74@gmail.com
                </p>
                <a
                  href="/"
                  className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                </a>
              </div>
            </div>
            {/* feature - end */}
          </div>
        </div>
      </div>


    </>
  )
}

export default Viewpage;