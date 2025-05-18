import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import useAxiousPublic from '../../../../Hooks/useAxiousPublic';
const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic=useAxiousPublic();
  const onSubmit = async(data) => {
    console.log(data);
  //  upload image to imgbb
    const imageFile={
      image:data.image[0]
    }
  const res=await axiosPublic.post(image_hosting_api,imageFile,{
    headers:{
      'content-type':'multipart/form-data'
    }
  })
  console.log(res.data);
    // reset();
  };

  return (
    <div>
      <SectionTitle heading="add an item" subHeading="Whats new"></SectionTitle>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 w-full max-w-md mx-auto px-2 sm:px-4 md:px-6"
        >
          <div>
            <label className="block mb-1 font-semibold">Recipe Name</label>
            <input
              {...register("name", { required: true })}
              className="input input-bordered w-full"
              placeholder="Recipe Name"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Category</label>
            <select {...register("category", { required: true })} className="select select-bordered w-full">
              <option value="">Select Category</option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="desert">Desert</option>
              <option value="drinks">Drinks</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-semibold">Price</label>
            <input
              type="number"
              step="0.01"
              {...register("price", { required: true })}
              className="input input-bordered w-full"
              placeholder="Price"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Recipe Details</label>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered w-full"
              placeholder="Recipe Details"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Choose File</label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full"
            />
          </div>
          <div>
            <button type="submit" className="btn bg-yellow-600">Add Item <FaUtensils></FaUtensils></button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;