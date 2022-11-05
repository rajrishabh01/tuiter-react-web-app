import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { editUser } from "../reducers/profile-reducer";
import Form from 'react-bootstrap/Form';
import { FloatingLabel, FormGroup, FormControl } from "react-bootstrap";

const EditProfileItem = () => {
    const defaultProfile = useSelector(state => state.profile);
    const [profile, setProfile] = useState(defaultProfile);
    const [firstName, setFirstName] = useState(profile.firstName);
    const [lastName, setLastName] = useState(profile.lastName);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const [dateOfBirth] = useState(profile.dateOfBirth);

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `../profile`;
        navigate(path);
    }

    const dispatch = useDispatch();
    const updateProfileHandler = () => {
        dispatch(editUser({
            ...profile,
            firstName: firstName,
            lastName: lastName,
            bio: bio,
            location: location,
            website: website
        })
        );
    }

    const handleNameChange = (event) => {
        const newName = event.target.value.split(" ");
        setFirstName(newName[0]);
        setLastName(newName[1]);
        const newProfile = {
            ...profile,
            firstName: firstName,
            lastName: lastName
        }
        setProfile(newProfile);
    }

    const handleBioChange = (event) => {
        const newBio = event.target.value;
        setBio(newBio);
        const newProfile = {
            ...profile,
            bio: bio
        }
        setProfile(newProfile);
    }

    const handleLocationChange = (event) => {
        const newLocation = event.target.value;
        setLocation(newLocation);
        const newProfile = {
            ...profile,
            location: location
        }
        setProfile(newProfile);
    }

    const handleWebsiteChange = (event) => {
        const newWebsite = event.target.value;
        setWebsite(newWebsite);
        const newProfile = {
            ...profile,
            website: website
        }
        setProfile(newProfile);
    }

    // const handleDOBChange = (event) => {
    //     const newDOB = event.target.value;
    //     setDateOfBirth(newDOB);
    //     const newProfile = {
    //         ...profile,
    //         dateOfBirth: dateOfBirth
    //     }
    //     setProfile(newProfile);
    // }

    return (
        <>
            <div className="row">
                <div className="col-10 col-lg-10 col-xl-12 border rounded px-0 py-2">
                    <div className="row ps-2 pe-3">
                        <button className="btn col-1"
                            onClick={() => routeChange()}>
                            <i className="bi bi-x-lg"></i>
                        </button>
                        <div className="col-9 pt-2">
                            <span className="fw-bold">Edit Profile</span>
                        </div>
                        <div className="col-2">
                            <button className="rounded-pill float-end btn btn-dark mb-2 me-1 pe-2 ps-2 fw-bold"
                                onClick={(event) => {
                                    updateProfileHandler(event);
                                    routeChange();
                                }}>
                                Save
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="position-relative">
                            <div className="row position-relative d-inline ms-0">
                                <img src={`/images/${profile.bannerPicture}`} alt="banneredit" />
                                <div className="col card-img-overlay align-middle text-center">
                                    <button className="rounded-circle bg-secondary m-50 mx-1 bg-opacity-75"><
                                        i className="bi bi-camera text-white"></i>
                                    </button>
                                    <button className="rounded-circle bg-secondary m-50 mx-1 bg-opacity-75"><
                                        i className="bi bi-x-lg text-white"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="row img-wrapper card-img-overlay top-50 h-100 ms-3 mb-4 position-absolute">
                                <div className="col-2 card-img-overlay mt-5 img-fluid">
                                    <img src={`/images/${profile.profilePicture}`} className="h-50 rounded-circle mx-3" alt="profileedit"></img>
                                    <div className="card-img-overlay rounded-circle start-50 pt-4 ps-2">
                                        <button className="btn rounded-circle bg-secondary border-0 bg-opacity-75 my-4">
                                            <i className="bi bi-camera text-white"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row d-inline px-3">
                        <Form>
                            <FormGroup controlId="formGroupName" className="mt-3 mb-3">
                                <FloatingLabel id="formName" label="Name">
                                    <FormControl type="input" value={firstName + " " + lastName}
                                        onChange={(event) => {
                                            handleNameChange(event)
                                        }
                                        } />
                                </FloatingLabel>
                            </FormGroup>
                            <FormGroup controlId="formGroupBio" className="mt-3 mb-3">
                                <FloatingLabel id="formBio" label="Bio">
                                    <FormControl type="input" value={bio}
                                        onChange={(event) => handleBioChange(event)}
                                    />
                                </FloatingLabel>
                            </FormGroup>
                            <FormGroup controlId="formGroupLocation" className="mt-3 mb-3">
                                <FloatingLabel id="formLocation" label="Location">
                                    <FormControl type="input" value={location}
                                        onChange={(event) => handleLocationChange(event)}
                                    ></FormControl>
                                </FloatingLabel>
                            </FormGroup>
                            <FormGroup controlId="formGroupWebsite" className="mt-3 mb-3">
                                <FloatingLabel id="formWebsite" label="Website">
                                    <FormControl type="input" value={website}
                                        onChange={(event) => handleWebsiteChange(event)}
                                    ></FormControl>
                                </FloatingLabel>
                            </FormGroup>
                        </Form>
                        <div>
                        <div className="align-middle">Birth Date . 
                        <button className="btn middle-align mb-1 text-primary">Edit </button></div>
                        <div>{dateOfBirth}</div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditProfileItem;