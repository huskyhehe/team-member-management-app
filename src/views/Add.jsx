import React from "react";
import { useNavigate } from "react-router-dom";
import InfoForm from "../components/InfoForm";
import { members } from "../context/members";

function Add() {
    const navigate = useNavigate();
    const handleCancelClick = () => {
        navigate('/', {state: members});
    }

    return (
        <div className="view">
            <button onClick={handleCancelClick} className="cancel-btn">x</button>
            <h2>Add a team member</h2>
            <p>Edit contact info, location and role</p>
            <InfoForm />
        </div>
    )
}

export default Add;