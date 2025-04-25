import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ img, tittle }) => {
    const defaultImage = 'path/to/default/image.jpg'; // Replace with the actual path to a default image
    return (
        <Parallax
            blur={{ min: -50, max: 5 }}
            bgImage={img || defaultImage}
            bgImageAlt="cover image"
            strength={-200}
            className="custom-parallax-class " // Add your custom class here
        >
            <div className="hero h-[300px] sm:min-h-[400px] md:min-h-[600px] lg:min-h-[700px] bg-cover bg-center bg-no-repeat bg-fixed">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center px-4 sm:px-8">
                    <div className="max-w-md mx-auto">
                        <h1 className="mb-5 text-3xl md:text-5xl font-bold uppercase">{tittle}</h1>
                        <p className="mb-5 text-sm md:text-base">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;