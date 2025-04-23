import React from 'react';

const SectionTitle = ({heading,subheading}) => {
    return (
        <div>
            <p>{subheading}</p>
            <h3>{heading}</h3>
        </div>
    );
};

export default SectionTitle;