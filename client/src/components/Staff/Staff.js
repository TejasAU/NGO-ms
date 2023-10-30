import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Staff.css"
import { toast } from "react-toastify";
import axios from "axios";

const Staff = () => {
    const [data, setData ] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/staff/get");
        setData(response.data);
    }

    useEffect(() => {
        loadData();
    }, []);

    const deleteContact = (ST_id) => {
        if(window.confirm("Confirm Delete?")) {
            axios.delete(`http://localhost:5000/api/staff/remove/${ST_id}`);
            toast.success("Partner Deleted Succesffully");
            setTimeout(() => loadData(), 500);
        }
    }
    return(
        <div style={{marginTop: "150 px"}}>
            <Link to="/addStaff">
                <button className="btn btn-contact">Add Staff</button>
            </Link>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>No.</th>
                        <th style={{textAlign: "center"}}>ID</th>
                        <th style={{textAlign: "center"}}>First Name</th>
                        <th style={{textAlign: "center"}}>Last Name</th>
                        <th style={{textAlign: "center"}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item , index) => {
                        return(
                            <tr key={item.id}>
                                <th scope="row">{index+1}</th>
                                <td>{item.ST_id}</td>
                                <td>{item.S_name_first}</td>
                                <td>{item.S_name_last}</td>
                                <td>
                                    <Link to={`/update/${item.ST_id}`}>
                                    <button className="btn btn-edit">
                                        Edit
                                    </button>
                                    </Link>
                                    <button className="btn btn-delete" onClick ={() => deleteContact(item.ST_id)}>
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

export default Staff;