import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cash.css"
import { toast } from "react-toastify";
import axios from "axios";

const Cash = () => {
    const [data, setData ] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/cash/get");
        setData(response.data);
    }

    useEffect(() => {
        loadData();
    }, []);

    const deleteContact = (ST_id) => {
        // if(window.confirm("Confirm Delete?")) {
        //     axios.delete(`http://localhost:5000/api/cash/remove/${ST_id}`);
        //     toast.success("Partner Deleted Succesffully");
        //     setTimeout(() => loadData(), 500);
        // }
    }
    return(
        <div style={{marginTop: "150 px"}}>
            <Link to="/addReceipts">
                <button className="btn btn-contact">Add Receipts</button>
            </Link>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>No.</th>
                        <th style={{textAlign: "center"}}>Receipts</th>
                        <th style={{textAlign: "center"}}>Payment ID</th>
                        <th style={{textAlign: "center"}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item , index) => {
                        return(
                            <tr key={item.id}>
                                <th scope="row">{index+1}</th>
                                <td>{item.Receipts}</td>
                                <td>{item.Payment_id}</td>
                                <td>
                                    <Link to={`/update/${item.Receipts}`}>
                                    <button className="btn btn-edit">
                                        Edit
                                    </button>
                                    </Link>
                                    <button className="btn btn-delete" onClick ={() => deleteContact(item.Receipts)}>
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

export default Cash;