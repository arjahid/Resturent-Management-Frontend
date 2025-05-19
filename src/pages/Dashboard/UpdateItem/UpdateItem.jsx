import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useLoaderData } from 'react-router-dom';

const UpdateItem = () => {
    const data=useLoaderData();
    console.log('le ',data);
    return (
        <div>
            <SectionTitle heading="Update an Item" subHeading="Refresh Info"></SectionTitle>
        </div>
    );
};

export default UpdateItem;