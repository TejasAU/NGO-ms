import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Supervisor.css"
import { toast } from "react-toastify";
import axios from "axios";

const Supervisor = () => {
    const [data, setData ] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/supervisor/get");
        setData(response.data);
    }

    useEffect(() => {
        loadData();
    }, []);

    const deleteContact = (SUP_ID) => {
        if(window.confirm("Confirm Delete?")) {
            axios.delete(`http://localhost:5000/api/supervisor/remove/${SUP_ID}`);
            toast.success("Partner Deleted Succesffully");
            setTimeout(() => loadData(), 500);
        }
    }
    return(
        <div style={{marginTop: "150 px"}}>
            <Link to="/addSupervisor">
                <button className="btn btn-contact">Add Staff</button>
            </Link>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>No.</th>
                        <th style={{textAlign: "center"}}>ID</th>
                        <th style={{textAlign: "center"}}>Name</th>
                        <th style={{textAlign: "center"}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item , index) => {
                        return(
                            <tr key={item.id}>
                                <th scope="row">{index+1}</th>
                                <td>{item.SUP_ID}</td>
                                <td>{item. Sup_NAME}</td>
                                <td>
                                    <Link to={`/update/${item.SUP_ID}`}>
                                    <button className="btn btn-edit">
                                        Edit
                                    </button>
                                    </Link>
                                    <button className="btn btn-delete" onClick ={() => deleteContact(item.SUP_ID)}>
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

export default Supervisor;