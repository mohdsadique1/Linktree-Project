import {IconMail, IconPhone } from '@tabler/icons-react';
import React from 'react'

const Contact = () => {
  return (
    <div>
      <>
        <div className="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
          <div>

            <h2 className="font-medium text-2xl text-gray-800">
              Contact Sadique
            </h2>
            <p className="text-lg leading-relaxed text-slate-500 mt-3">
              Have something to say? We are here to help. Fill up the form or send
              email or call phone.
            </p>
            <div className="mt-5">
              <div className="flex items-center mt-2 space-x-2 text-gray-600">
                <icon className="text-gray-400 w-4 h-4" name="name">
                  <span></span>
                </icon>
              </div>
              <div className="flex items-center mt-2 space-x-2 text-gray-600">
                <IconMail />
                <a href="sadiquemohd74@gmail.com">
                  sadiquemohd74@gmail.com
                </a>

              </div>
              <div className="flex items-center mt-2 space-x-2 text-gray-600">
                <IconPhone className="text-gray-400 w-4 h-4" name="mobile" />
                8922020242
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      </>

    </div >
  )
}

export default Contact;