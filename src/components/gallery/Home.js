import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("https://mi-linux.wlv.ac.uk/~2048099/codei4/show_image");
    setUser(result.data.reverse());
  };

  const deleteUser = (imageId) =>
  {
    axios.delete('https://mi-linux.wlv.ac.uk/~2048099/codei4/delete-image/delete/'+imageId)
    .then((result)=>{
      loadUsers();
    })
    .catch(()=>{
      alert('Image Delete Successful');
      window.location.reload(true);
    });
  };

  return (
    <div className="container text-left">
      <div className="py-4">
        <h3 class="mb-5 text-center jumbotron">VINTAGE IMAGE GALLERY</h3>
          <div className="row text-left">
            {users.map((user, index) => (
              <div className="col-md-4 mx-auto text-center">
                <div className="card m-2 text-left">
                <div className="mt-0 mb-2"><img src={window.location.origin+'/'+user.image} alt="" style={{ width: '100%',height: '20rem',margin: 0,padding: 0}}/></div>
                  <div><h3 className="text-capitalize text-center mt-2 mb-3 text-info">{user.image_name}</h3></div>
                  <div><div className="bg-light w75 mx-auto text-center"><em>{user.image_slug}</em></div></div>
                  <div><p className="p-2 border m-3">{user.image_description}</p></div>
                    <div  className="d-inline mx-auto text-center mb-3">
                      <div class='pull-left bg-success rounded d-inline w25 p-1 m-1'>
                        <Link class="pull-left mr-2 text-white" to={`/gallery/edit/${user.id}`}>
                          <i class="fa fa-edit pull-left" aria-hidden="true"></i> Edit
                        </Link>
                      </div>
                      <div className='pull-right bg-danger rounded d-inline w25 p-1 m-2'>
                        <Link class="pull-right text-white bg-danger" onClick={() => deleteUser(user.id)}>
                        <i class="fa fa-trash pull-right" aria-hidden="true"></i> Delete
                        </Link>
                      </div>
                    </div>
                  </div>
              </div>
             ))}
          </div>
      </div>
    </div>
  );
};

export default Home;
