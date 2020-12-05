import React from 'react';
import SideBar from '../SideBar/SideBar';

const AddRentHouse = () => {
    const handleBlur = e => {

    }

    const handleSubmit = e => {

    }

    return (
        <div style={{ backgroundColor: ' #E5E5E5;' }} className='row'>
            <div className="col-md-3">
                <SideBar    ></SideBar>
            </div>
            <div className="col-md-9">
                <div className='d-flex bd-highlight mb-3' >
                    <h3 className='mr-auto p-2 bd-highlight'>Add Rent House</h3>
                    <h3>Sufi ahmed</h3>
                </div>
                <div>
                    <div>
                        <div className=" p-4 pr-5 h-100" style={{ right: 0, backgroundColor: "#F4FDFB", height: "1000px" }}>

                            <form onSubmit={handleSubmit}>
                                <div className="form-group w-50 float-left">
                                    <label for="serviceTittle">Service tittle</label>
                                    <input onBlur={handleBlur} type="text" className="form-control" name="serviceTittle" placeholder="Name" />
                                </div>
                                <div className="form-group w-50">
                                    <label for="Price">Price</label>
                                    <input onBlur={handleBlur} type="text" className="form-control" name="Price" placeholder="price" />
                                </div>
                                <div className="form-group w-50">
                                    <label for="location">Location</label>
                                    <input onBlur={handleBlur} type="text" className="form-control" name="location" placeholder="location" />
                                </div>
                                <div className="form-group w-50">
                                    <label for="bedroom">No of Bedroom</label>
                                    <input onBlur={handleBlur} type='text' className="form-control" name="bedroom" placeholder="no of bedroom" />
                                </div>
                                <div className="form-group w-50">
                                    <label for="bathroom">No of Bathroom</label>
                                    <input onBlur={handleBlur} type='text' className="form-control" name="bathroom" placeholder="No of bathroom" />
                                </div>
                                <div className="form-group w-50">
                                    <label for="file">Thumbnails</label>
                                    <input type="file" name="file" id="" />
                                </div>


                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddRentHouse;