import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Donor.css"
import { toast } from "react-toastify";
import axios from "axios";

const Donor = () => {
    const [data, setData ] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/donor/get");
        setData(response.data);
    }

    useEffect(() => {
        loadData();
    }, []);

    const deleteContact = (Donor_id) => {
        if(window.confirm("Confirm Delete?")) {
            axios.delete(`http://localhost:5000/api/donor/remove/${Donor_id}`);
            toast.success("Donor Deleted Succesffully");
            setTimeout(() => loadData(), 500);
        }
    }
    return(
        <div style={{marginTop: "150 px"}}>
            <Link to="/addDonor">
                <button className="btn btn-contact">Add Donor</button>
            </Link>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>No.</th>
                        <th style={{textAlign: "center"}}>ID</th>
                        <th style={{textAlign: "center"}}>First Name</th>
                        <th style={{textAlign: "center"}}>Last Name</th>
                        <th style={{textAlign: "center"}}>Email</th>
                        <th style={{textAlign: "center"}}>Contact</th>
                        <th style={{textAlign: "center"}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item , index) => {
                        return(
                            <tr key={item.id}>
                                <th scope="row">{index+1}</th>
                                <td>{item.Donor_id}</td>
                                <td>{item.Donor_name_first}</td>
                                <td>{item.Donor_name_last}</td>
                                <td>{item.Email}</td>
                                <td>{item.Contact_number}</td>
                                <td>
                                    <Link to={`/update/${item.Partner_id}`}>
                                    <button className="btn btn-edit">
                                        Edit
                                    </button>
                                    </Link>
                                    <button className="btn btn-delete" onClick ={() => deleteContact(item.Donor_id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Donor;