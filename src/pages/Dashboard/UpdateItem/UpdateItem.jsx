import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiousPublic from "../../../Hooks/useAxiousPublic";
import useAxious from "../../../Hooks/useAxious";
import { useForm } from "react-hook-form";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiousPublic();
  const axiousSecure = useAxious();
  const { name, category, recipe, price,_id } = useLoaderData();

  const onSubmit = async (data) => {
    console.log(data);
    //  upload image to imgbb
    const imageFile = {
      image: data.image[0],
    };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send data to server
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiousSecure.patch(`/menu/${_id}`, menuItem);

      reset();
      if (menuRes.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }

    // reset();
  };
  return (
    <div>
      <SectionTitle
        heading="Update an Item"
        subHeading="Refresh Info"
      ></SectionTitle>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 w-full max-w-md mx-auto px-2 sm:px-4 md:px-6"
        >
          <div>
            <label className="block mb-1 font-semibold">Recipe Name</label>
            <input
              defaultValue={name}
              {...register("name", { required: true })}
              className="input input-bordered w-full"
              placeholder="Recipe Name"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Category</label>
            <select
              defaultValue={category}
              {...register("category", { required: true })}
              className="select select-bordered w-full"
            >
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
              defaultValue={price}
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
              defaultValue={recipe}
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered w-full"
              placeholder="Recipe Details"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Choose File</label>
            <input
              type="file"
              {...register("image", )}
              className="file-input file-input-bordered w-full"
            />
          </div>
          <div>
            <button type="submit" className="btn bg-yellow-600">
              Update Menu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
