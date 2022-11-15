import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { appState } from "../context/appState";
import InfoForm from "../components/InfoForm";
import { members } from "../context/members";

function Edit() {
    const navigate = useNavigate();
    const handleCancelClick = () => {
        navigate('/', {state: members});
    }

    useEffect(() => {
        if (!appState.activeId){
            navigate('/', {state: members});
        }
    },[navigate])


    return (
        <div className="view">
            <button type="button" onClick={handleCancelClick} className="cancel-btn">x</button>
            <h2>Edit team member</h2>
            <p>Edit contact info and role</p>
            <InfoForm />
        </div>
    )
}

export default Edit;