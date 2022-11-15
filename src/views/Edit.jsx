import React from "react";
import { useNavigate } from "react-router-dom";
import InfoForm from "../components/InfoForm";
import { members } from "../data/members";
import { state } from "../data/state";

function Edit() {
    const id = state.activeId;
    const memberData = members.find(member => member.id === id);

    checkSession(); 
    const navigate = useNavigate();

    function checkSession() {
        if (!state.activeId) {
            navigate('/route', {state: members})  
        }
    }

    return (
        <div>
            <h2>Edit team member</h2>
            <p>Edit contact info, location and role</p>
            <InfoForm mode="edit" preloadedValues={memberData}/>
        </div>
    )
}

export default Edit;