'use client';

import Image from 'next/image';
import FeaturesTwo from '../../../components/FeaturesTwo';
import OurTeam from '@/components/OurTeam';
import '@/styles/About.css'; // Importing the CSS file

export default function AboutUs() {
 
    return (
        <main className="min-h-screen  relative overflow-hidden">
            <section className="relative w-full h-[400px] bg-[#40BFB4] overflow-hidden">
                {/* Background Image */}
                <Image
                    src="https://passiongreensltd.com/wp-content/uploads/2016/09/about-us-parallax.jpg"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="absolute inset-0 z-0"
                />
                {/* Content on top of the image */}
                <div className="container mx-auto px-6 h-full flex items-center relative z-10">
                    <div className="max-w-xl">
                        <h2 className="text-5xl font-bold text-white mb-6">About Us</h2>
                        <p className="text-white text-lg leading-relaxed">
                            Etiam convallis, felis quis dapibus dictum, libero mauris luctus, non
                            fringilla purus ligula non justo. Non fringilla purus ligula justo.
                        </p>
                    </div>
                </div>
                {/* Overlay (Optional for dimming the background) */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-40 z-5"></div> */}
            </section>

           
            {/* Features Section */}
            <FeaturesTwo />


            {/* Our Team Section */}
            <OurTeam />


           
        </main>
    );
}
