import React from "react";
import { Link } from "react-router-dom";
import { members } from "../data/members";
import { state } from "../data/state";

function List() {
        
    function setActiveId(e, memberId) {
        state.activeId = memberId;
    }
    
    return (
        <div className="member-list">
            <h2>Team members</h2>
            <p>You have {members.length} team members.</p>
            {/* <button >+</button> */}
            <Link to="/add" className="add-btn">+</Link>
            <ul>
                {members.map(member => {
                    return (
                        <li key={member.id}>
                            <Link to="/edit" onClick={(e) => setActiveId(e, member.id)}>
                                {member.firstName} {member.lastName} {member.role === "admin" ? "(admin)" : ""}
                            </Link>
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

// {/* <p onClick={(e) => handleTargetMember(e, member.id)} memberId={member.id}>
//     {member.firstName} {member.lastName} {member.role === "admin" ? "(admin)" : ""}
// </p> */}

