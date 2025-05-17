import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';

const AddItem = () => {
     const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data)

};
    return (
        <div>
          <SectionTitle heading="add an item" subHeading="Whats new"></SectionTitle>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} />
      <select {...register("category")}>
        <option value="salad">salad</option>
        <option value="pizza">Pizza</option>
        <option value="soup">Soup</option>
        <option value="desert">Desert</option>
        <option value="drinks">Drinks</option>
      </select>
      <input type="submit" />
    </form>
          </div>
        </div>
    );
};

export default AddItem;