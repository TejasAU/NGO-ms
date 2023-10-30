import React, { useEffect, useState } from "react";
import { useNavigate , useParams , Link } from "react-router-dom";
import "./AddPartner.css";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
    Partner_id: "",
    Name: "",
    email: "",
    contact_no: "",
};

const AddEdit = () => {
    const [state, setState] = useState(initialState);

    const {Partner_id, Name, email, contact_no} = state;

    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!Partner_id || !Name || !email || !contact_no) {
            toast.error("Please provide value into each input field");
        } else {
            axios
            .post("http://localhost:5000/api/post", {
                Partner_id,
                Name,
                email,
                contact_no,
            })
            .then(() => {
                setState({ Partner_id: "", Name: "", email: "", contact_no: ""});
            })
            .catch((err) => toast.error(err.response.data));
            setTimeout(() => history("/"), 500);
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value});
    }
    return(
        <div style={{marginTop: "100px"}}>
            <form style={{
                margin: "auto",
                padding: "15px",
                maxWidth: "400px",
                alignContent: "center"
            }}
            onSubmit={handleSubmit}>
                <label htmlFor="Partner_id">Partner ID</label>
                <input 
                type="text"
                id="Partner_id"
                name="Partner_id"
                placeholder="Your Partner ID ..."
                value={Partner_id}
                onChange={handleInputChange}
                />
                <label htmlFor="Name">Name</label>
                <input 
                type="text"
                id="Name"
                name="Name"
                placeholder="Your Name ..."
                value={Name}
                onChange={handleInputChange}
                />
                <label htmlFor="email">Email</label>
                <input 
                type="text"
                id="email"
                name="email"
                placeholder="Your Email ..."
                value={email}
                onChange={handleInputChange}
                />
                <label htmlFor="contact_no">Contact</label>
                <input 
                type="number"
                id="contact_no"
                name="contact_no"
                placeholder="Your Contact No..."
                value={contact_no}
                onChange={handleInputChange}
                />
                <input type="submit" value="Save"/>
                <Link to="/">
                    <input type="button" value="Go Back"/>
                </Link>
            </form>
        </div>
    )
}

export default AddEdit;