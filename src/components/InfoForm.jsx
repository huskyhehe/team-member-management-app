import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { members } from '../data/members';


function InfoForm({mode, preloadedValues}) {

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: preloadedValues
    });

    const [data, setData] = useState();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        data.id = members[members.length - 1].id + 1;
        members.push(data);
        navigate('/', {state: members});
    };

    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Info</h3>
            <input 
                type="text" 
                placeholder="First name" 
                {...register("firstName", {required: "Please enter your first name"})} 
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}

            <input 
                type="text" 
                placeholder="Last name" 
                disabled={mode==="edit"? "disabled": ""}
                {...register("lastName", {required: "Please enter your last name"})} 
            />
            {errors.lastName && <p>{errors.lastName.message}</p>}

            <input 
                type="tel" 
                placeholder="Phone number" 
                {...register("phone", {required: "Please enter your phone number", pattern: {value:/[0-9]{10}/i, message: "Please enter valid phone number"}})} 
            />
            {errors.phone && <p>{errors.phone.message}</p>}

            <input 
                type="text" 
                placeholder="Email" 
                {...register("email", {required: "Please enter your email", pattern: {value: /^\S+@\S+$/i, message: "Please enter valid email address"}})} 
            />
            {errors.email && <p>{errors.email.message}</p>}
            
            <h3>Role</h3>
            <label>
                <input type="radio" name="role" value="regular" {...register("role")} checked />
                Regular - Can't delete members
            </label>
            <label>
                <input type="radio" name="role" value="admin" {...register("role")} />
                Admin - Can delete members
            </label>
            <button type="submit">Save</button>
        </form>
    );
}

export default InfoForm;