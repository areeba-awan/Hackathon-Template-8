import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';

export default function Card() {


    const FeatureImage = [
        '/featuredata/Sofa1.png',
        '/featuredata/Sofa2.png',
        '/featuredata/Sofa3.png',
        '/featuredata/Sofa4.png',
        '/featuredata/Sofa5.png',
        '/featuredata/Sofa6.png',
    
      ];

  return (
    <div>
        <div className="flex flex-col md:flex-row md:px-32 lg:px-48 px-6 sm:px-12 md:py-12 space-y-6 md:space-y-0 md:space-x-6 items-center md:items-start">
      {/* Image Section */}
      <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
        <div className="relative w-full h-64 md:h-96">
          <Image
            className="object-cover object-center rounded-lg transform transition-transform duration-300 hover:scale-105"
            src="/card.png"
            alt="Library Stool Chair"
            layout="fill"
            quality={90}
          />
        </div> 
      </div>

      {/* Card Section */}
      <div className="w-full md:w-1/2 bg-white p-6 md:p-8 rounded-lg  text-gray-800 flex flex-col justify-between items-center md:items-start transform transition-transform duration-300 hover:scale-105">
        <h1 className="text-2xl md:text-4xl font-medium md:font-semibold mb-4 text-center md:text-left">
          Library Stool Chair
        </h1>
        <button className="px-6 py-2 bg-emerald-500 text-white font-semibold rounded hover:bg-emerald-600 transition duration-300 mb-4">
          200 $ USD
        </button>
        <p className="text-center md:text-left leading-relaxed mb-6">
          Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatum a veritatis pariatur.
        </p>
        <button className="px-6 py-2 bg-cyan-500 text-white font-semibold rounded hover:bg-cyan-600 transition duration-300">
          ADD To Cart
        </button>
      </div>
    </div>

    <div className="px-4 sm:px-8 md:px-52 py-8 mt-8" >
      <div>
        <h1 className="text-2xl  md:text-3xl font-bold mb-8 pl-4 ">Feauture Product</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {FeatureImage.map((val, i) => (
         <div key={i} className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <Link href={
              "./products"
             } >     <div className="w-full h-64 overflow-hidden">
                 <Image
                  src={val}
                  alt={`Sofa${i}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between w-full px-4 py-2">
                <div className="flex flex-col items-start">
                  <h2 className="font-medium text-lg mb-1">Library Stone Chair</h2>
                  <span className="text-black text-lg font-bold">$20</span>
                </div>
            <div className="flex items-center" >
                  <FaCartShopping className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500 cursor-pointer transition-transform duration-300 hover:scale-110" />
                </div>
              </div></Link> 
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

