// components/HeroSection.js
'use client'
import React from 'react';
import { ReactTyped } from 'react-typed';
import Link from 'next/link'
const HeroSection = () => {
    return (
        <div>
            <section
                className="backdrop-blur bg-black text-white"
                // style={{
                //     backgroundImage: `url('/assets/phone.PNG')`, // Path to your image
                //     backgroundSize: 'cover',
                //     backgroundPosition: 'center',
                //     height: '600px',
				// 	zIndex: -1 // Adjust height as needed
                // }}
            >
                <div className="container mx-auto backdrop-blur flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">
                        Unlock Your Future with {' '}
                        <span className="text-blue-600">
                            <ReactTyped
                                strings={[' Jobs', ' Internships', ' Field']}
                                typeSpeed={60}
                                backSpeed={50}
                                loop
                            />
                        </span>
                    </h1>
                    <p className="px-8 mt-8 mb-12 text-lg">
                        Whether you're looking for a job, internship, or field experience, we connect you with the best opportunities tailored just for you!
                    </p>
                    <div className="flex flex-wrap justify-center">
                     <Link href="/login">
                     <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-blue-600 text-white">Get Started</button>
                     </Link> 
                        <button className="px-8 py-3 m-2 text-lg border rounded text-white text-bold border-blue-300">Learn More</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
