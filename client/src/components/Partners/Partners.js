import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Partners.css"
import { toast } from "react-toastify";
import axios from "axios";

const Partners = () => {
    const [data, setData ] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/get");
        setData(response.data);
    }

    useEffect(() => {
        loadData();
    }, []);
    return(
        <div style={{marginTop: "150 px"}}>
            <Link to="/addContact">
                <button className="btn btn-contact">Add Contact</button>
            </Link>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>No.</th>
                        <th style={{textAlign: "center"}}>ID</th>
                        <th style={{textAlign: "center"}}>Name</th>
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
                                <td>{item.Partner_id}</td>
                                <td>{item.Name}</td>
                                <td>{item.email}</td>
                                <td>{item.contact_no}</td>
                                <td>
                                    <Link to={`/update/${item.id}`}>
                                    <button className="btn btn-edit">
                                        Edit
                                    </button>
                                    </Link>
                                    <button className="btn btn-delete">
                                        Delete
                                    </button>
                                    <Link to={`/view/${item.id}`}>
                                    <button className="btn btn-view">
                                        View
                                    </button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Partners;