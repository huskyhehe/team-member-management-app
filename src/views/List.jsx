import React from "react";
import { useNavigate } from "react-router-dom";
import { appState } from "../context/appState";
import { members } from "../context/members";

function List() {  
    const navigate = useNavigate();

    function handleAddClick() {
        appState.activeId = null;
        navigate('/add', {state: members});
    }
    function handleNameClick(e, memberId) {
        appState.activeId = memberId;
        navigate('/edit', {state: members});    
    }
    
    return (
        <div className="view">
            <button onClick={handleAddClick} className="add-btn">+</button>
            <h2>Team members</h2>
            <p>You have {members.length} team members.</p>
            <ul>
                {members.map(member => {
                    return (
                        <li key={member.id} className="member-entry">
                            <button onClick={(e) => handleNameClick(e, member.id)} className="name-btn">
                                {member.firstName} {member.lastName} {member.role === "admin" ? "(admin)" : ""}
                            </button>
                            <p>{member.phone}</p>
                            <p>{member.email}</p>
                        </li> 
                    )
                })}
            </ul>
        </div>
    );
}

export default List;
