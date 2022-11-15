import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { appState } from '../context/appState';
import { members } from '../context/members';


function InfoForm() {
    
    const navigate = useNavigate();
    const [editMode, setEditMode] = useState(appState.activeId);
    const [curInfo, setCurInfo] = useState(!editMode ? {role:"regular"} : members.find(member => member.id === appState.activeId));
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: curInfo
    });

    const onSubmit = (data) => {
        if (!editMode) {
            addMember(data);
        } else {
            updateMember(appState.activeId, data);
        }
        navigate('/', {state: members});
    };

    function handleDelete() {
        deleteMember(appState.activeId);
        navigate('/', {state: members})
    }

    const isAdmin = () => {
        return (editMode && curInfo.role === "admin")
    }

    function addMember(data) {
        data.id = members[members.length - 1].id + 1;
        members.push(data);
    }
    function updateMember(memberId, data) {
        members.map(member => {
            if (member.id === memberId) {
                member.phone = data.phone;
                member.email = data.email;    
                member.role = data.role;
            }
            return member;
        });
    }
    function deleteMember(memberId) {
        for (let i = 0; i < members.length; i++) {
            if (members[i].id === memberId) {
                members.splice(i, 1); 
                return;
            }      
        }
    }

    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Info</h3>
            <input 
                type="text" 
                name="firstName"
                placeholder="First name" 
                disabled={editMode ? "disabled": ""}
                {...register("firstName", {required: "Please enter your first name"})} 
            />
            {errors.firstName && <p className="error">{errors.firstName.message}</p>}

            <input 
                type="text"
                name="lastName" 
                placeholder="Last name" 
                disabled={editMode? "disabled": ""}
                {...register("lastName", {required: "Please enter your last name"})} 
            />
            {errors.lastName && <p className="error">{errors.lastName.message}</p>}

            <input 
                type="tel" 
                name="phone"
                placeholder="Phone number" 
                {...register("phone", {required: "Please enter your phone number", pattern: {value:/^[0-9]{10}$/, message: "Please enter valid phone number"}})} 
            />
            {errors.phone && <p className="error">{errors.phone.message}</p>}

            <input 
                type="text"
                name="email" 
                placeholder="Email" 
                {...register("email", {required: "Please enter your email", pattern: {value: /^\S+@\S+$/i, message: "Please enter valid email address"}})} 
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
            
            <h3>Role</h3>
            <label>
                <input type="radio" name="role" value="regular" {...register("role")} checked={!isAdmin ? "checked" : ""} />
                Regular - Can't delete members
            </label>
            <label>
                <input type="radio" name="role" value="admin" {...register("role")} />
                Admin - Can delete members
            </label>
            <div className="btn-container">
                {editMode && <button type="button" onClick={handleDelete} className="delete-btn">Delete</button>}
                <button type="submit" className="save-btn">Save</button>
            </div>
            
            
        </form>
    );
}

export default InfoForm;