import React from "react";
import styles from '../styles/Contact.module.css'

export default function Contact(){
    return(
        <div className=" flex bg-gray-800 h-screen">
            <div className="m-auto">
            <h3 className=" font-sans text-5xl pb-10 text-teal-600 text-center">How to Contact me</h3>
            <hr className="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700" />
                <ul className="py-5 text-center">
                <label className=" font-mono bg-gradient-to-r from-cyan-500 text- to-teal-500 text-black p-2 border-none rounded ">School Email: turcoa1@mcmaster.ca</label>
                </ul>
                <ul className="py-5 text-center">
                <label className=" font-mono bg-gradient-to-r from-cyan-500 text- to-teal-500 text-black p-2 border-none rounded ">Personal Email: alexanderturco1@gmail.com</label>
                </ul>
                <ul className="py-5 text-center">
                <label className="font-mono bg-gradient-to-r from-cyan-500 text- to-teal-500 text-black p-2 border-none rounded ">Phone Number: (647)-389-0798</label>
                </ul>
            </div>
        </div>
    )
}