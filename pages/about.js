// pages/about.js

import React from "react";
import styles from '../styles/About.module.css'

export default function About(){
    return(
        <div className=" bg-gray-800 min-h-screen">
            <h2 className="text-2xl py-2 text-teal-500 md:text-3xl">About Page: Alexander Turco</h2>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>
            Write some stuff here about yourself, what you like to do, idk make it cool.
            </p>
        </div>
    )
}