import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Event.css"
import { toast } from "react-toastify";
import axios from "axios";

const Event = () => {
    const [data, setData ] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/event/get");
        setData(response.data);
    }

    useEffect(() => {
        loadData();
    }, []);

    const deleteContact = (Event_id) => {
        if(window.confirm("Confirm Delete?")) {
            axios.delete(`http://localhost:5000/api/event/remove/${Event_id}`);
            toast.success("Event Deleted Succesffully");
            setTimeout(() => loadData(), 500);
        }
    }
    return(
        <div style={{marginTop: "150 px"}}>
            <Link to="/addEvent">
                <button className="btn btn-contact">Add Event</button>
            </Link>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>No.</th>
                        <th style={{textAlign: "center"}}>ID</th>
                        <th style={{textAlign: "center"}}>Name</th>
                        <th style={{textAlign: "center"}}>Target Audience</th>
                        <th style={{textAlign: "center"}}>Funds Generated</th>
                        <th style={{textAlign: "center"}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item , index) => {
                        return(
                            <tr key={item.id}>
                                <th scope="row">{index+1}</th>
                                <td>{item.Event_id}</td>
                                <td>{item.Event_name}</td>
                                <td>{item.Target_Audience}</td>
                                <td>{item.Fund_Generated}</td>
                                <td>
                                    <Link to={`/update/${item.Event_id}`}>
                                    <button className="btn btn-edit">
                                        Edit
                                    </button>
                                    </Link>
                                    <button className="btn btn-delete" onClick ={() => deleteContact(item.Event_id)}>
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

export default Event;