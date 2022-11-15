import React from "react";
import InfoForm from "../components/InfoForm";

function Add() {
    function handleDataChange() {}
    return (
        <div>
            <h2>Add a team member</h2>
            <p>Edit contact info, location and role</p>
            <InfoForm mode="add"/>
        </div>
    )
}

export default Add;