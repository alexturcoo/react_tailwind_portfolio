import React from "react";
import styles from '../styles/Contact.module.css'

export default function Contact(){
    return(
        <div className="min-h-screen bg-black text-gray-300 font-mono flex">
            <div className="m-auto max-w-2xl w-full px-6">
            <h1 className="text-3xl text-white mb-12 text-center tracking-tight">
              Contact
            </h1>
                <div className="space-y-8">
                  <div className="border border-gray-800 p-6">
                    <p className="text-sm text-gray-500 mb-2">Academic</p>
                    <p className="text-gray-300">alexander.turco@mail.utoronto.ca</p>
                  </div>

                  <div className="border border-gray-800 p-6">
                    <p className="text-sm text-gray-500 mb-2">Personal</p>
                    <p className="text-gray-300">alexanderturco1@gmail.com</p>
                  </div>
                </div>
            </div>
        </div>
    )
}