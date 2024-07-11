'use client'
import React from 'react';

const Ubicacion =()=>{

    return(
        <section id="ubicacion" className="mx-auto max-w-2xl pb-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">
            <article className='flex flex-col items-center justify-center p-2 m-2  w-full'>
                <h2 className="mb-4 text-3xl md:text-4xl text-center md:text-start tracking-tight font-extrabold text-gray-900 ">¿Dónde nos encontras?</h2>
                <div className='w-full'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.031780334187!2d-57.58254448861617!3d-37.97638764323257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d9138a4fea85%3A0x90e1f2a7cc654f9b!2sAv.%20M.%20Champagnat%201167%2C%20B7604GVL%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses-419!2ses!4v1720273485136!5m2!1ses-419!2ses"
                        height="450"
                        width='fit'
                        className='w-full'
                        style={{ border: "0" }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title='Ubicacion de Local'
                ></iframe>
                </div>
            </article>
        </section>
    );
};


export default Ubicacion;