import React from "react";
import styles from '../styles/Contact.module.css'

export default function Contact(){
    return(
        <div className=" flex bg-gray-800 text-center h-screen">
            <div className="m-auto">
                <ul className="py-5">
                <label className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 ">School Email: turcoa1@mcmaster.ca</label>
                </ul>
                <ul className="py-5">
                <label className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 ">Personal Email: alexaderturco1@gmail.com</label>
                </ul>
                <ul className="py-5">
                <label className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 ">Phone Number: (647)-389-0798</label>
                </ul>
            </div>
        </div>
    )
}