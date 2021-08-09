import React, { useState } from "react";
import axios from 'axios'

//import { useHistory } from "react-router-dom";

const AddImage = () => {
  // let history = useHistory(); // Use for Navigate on Previous
  const [user, setUser] = useState({
    image_name: "",
    image_slug: "",
    image_description: "",
    image: ""
  });

  const { image_name, image_slug, image_description, image} = user;
  
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  
  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("https://mi-linux.wlv.ac.uk/~2048099/codei4/create_image",user);
    alert('Data Inserted');
    // // history.push("/");
    console.log(user);
  };
  return (
    <div className="container bg-light mt-5 mb-5">
      <div class="row">  
       <div className="col-12 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add  Image </h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
          <label htmlFor=""> Title</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Image Name"
              name="image_name"
              value={image_name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor=""> Slug</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Image Slug"
              name="image_slug"
              value={image_slug}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label htmlFor="">Image Description</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Image Description"
              name="image_description"
              value={image_description}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Image:</label>
            <input type="file" name="image"
              value={image}
              onChange={e => onInputChange(e)} />
          </div>
          <button className="btn btn-primary btn-block">Add Image</button>
        </form>
      </div>
    </div>
  </div>  
  );
};

export default AddImage;
