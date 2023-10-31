import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AwarenessSessions.css"
import { toast } from "react-toastify";
import axios from "axios";

const Staff = () => {
    const [data, setData ] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/awarenesssessions/get");
        setData(response.data);
    }

    useEffect(() => {
        loadData();
    }, []);

    const deleteContact = (Work_id) => {
        if(window.confirm("Confirm Delete?")) {
            axios.delete(`http://localhost:5000/api/awarenesssessions/remove/${Work_id}`);
            toast.success("Partner Deleted Succesffully");
            setTimeout(() => loadData(), 500);
        }
    }
    return(
        <div style={{marginTop: "150 px"}}>
            <Link to="/addAwarnessSession">
                <button className="btn btn-contact">Add Awareness Session</button>
            </Link>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>No.</th>
                        <th style={{textAlign: "center"}}>ID</th>
                        <th style={{textAlign: "center"}}>Title</th>
                        <th style={{textAlign: "center"}}>Target Audience</th>
                        <th style={{textAlign: "center"}}>Key Message</th>
                        <th style={{textAlign: "center"}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item , index) => {
                        return(
                            <tr key={item.id}>
                                <th scope="row">{index+1}</th>
                                <td>{item.Work_id}</td>
                                <td>{item.Title}</td>
                                <td>{item.Target_audience}</td>
                                <td>{item.Key_message}</td>
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