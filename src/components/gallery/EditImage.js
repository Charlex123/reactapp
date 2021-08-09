import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditImage = () => {
  
  let history = useHistory(); //The useHistory hook gives you access to the history instance that you may use to navigate.
  const { id } = useParams();  //The useParams() hook helps us to access the URL parameters from a current route. 
  const [user, setUser] = useState({
    Image_name: "",
    Image_slug: "",
    Image_description: ""
  });

  const { Image_name, Image_slug, Image_description } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post(`https://mi-linux.wlv.ac.uk/~2048099/codei4/update-image/update/${id}`, user);
    // history.push("/");
    alert('success');
    window.location.reload(true);
  };

  const loadUser = async () => {
    const result = await axios.get(`https://mi-linux.wlv.ac.uk/~2048099/codei4/get_image/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container mt-5 mb-5">
     <div className="row"> 
      <div className="col-sm-5 col-offset-3 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Gallery</h2>
        <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
            <label htmlFor=""> Id</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Id"
              name="id"
              value={id}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label htmlFor=""> Title</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter image Name"
              name="image_name"
              value={Image_name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor=""> Slug</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter image Slug"
              name="image_slug"
              value={Image_slug}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label htmlFor="">Image Description</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter image Description"
              name="image_description"
              value={Image_description}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-success btn-block">Edit Image</button>
        </form>
       </div>
      </div> 
    </div>
  );
};

export default EditImage;
