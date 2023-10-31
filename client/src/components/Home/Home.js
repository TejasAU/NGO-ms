import { Link } from "react-router-dom";

function Home() {
  return (
    <table className="styled-table">
    <thead>
    <tr>
        <th>Components</th>
        <th>Action</th>
    </tr>
    </thead>
    <tr>
        <td>Partners</td>
        <td><Link to={`/partners`}>
                                    <button className="btn btn-edit">
                                        View
                                    </button>
                                    </Link>
                                    </td>
    </tr>
    <tr>
        <td>Donors</td>
        <td><Link to={`/donor`}>
                                    <button className="btn btn-edit">
                                        View
                                    </button>
                                    </Link>
                                    </td>
    </tr>
    <tr>
        <td>Staff</td>
        <td><Link to={`/staff`}>
                                    <button className="btn btn-edit">
                                        View
                                    </button>
                                    </Link>
                                    </td>
    </tr>
    <tr>
        <td>Event</td>
        <td><Link to={`/event`}>
                                    <button className="btn btn-edit">
                                        View
                                    </button>
                                    </Link>
                                    </td>
    </tr>
    <tr>
        <td>Work</td>
        <td><Link to={`/work`}>
                                    <button className="btn btn-edit">
                                        View
                                    </button>
                                    </Link>
                                    </td>
    </tr>
    <tr>
        <td>Supervisors</td>
        <td><Link to={`/supervisor`}>
                                    <button className="btn btn-edit">
                                        View
                                    </button>
                                    </Link>
                                    </td>
    </tr>
    <tr>
        <td>Awareness Sessions</td>
        <td><Link to={`/AwarenessSessions`}>
                                    <button className="btn btn-edit">
                                        View
                                    </button>
                                    </Link>
                                    </td>
    </tr>
    <tr>
        <td>Cash</td>
        <td><Link to={`/Cash`}>
                                    <button className="btn btn-edit">
                                        View
                                    </button>
                                    </Link>
                                    </td>
    </tr>
    <tr>
        <td>CrowdFunding</td>
        <td><Link to={`/CrowdFunding`}>
                                    <button className="btn btn-edit">
                                        View
                                    </button>
                                    </Link>
                                    </td>
    </tr>
    <tr>
        <td>Drives</td>
        <td><Link to={`/drives`}>
                                    <button className="btn btn-edit">
                                        View
                                    </button>
                                    </Link>
                                    </td>
    </tr>
    <tr>
        <td>Event Partners</td>
        <td><Link to={`/EventPartners`}>
                                    <button className="btn btn-edit">
                                        View
                                    </button>
                                    </Link>
                                    </td>
    </tr>
    <tr>
        <td>Fund Raising</td>
        <td><Link to={`/FundRaising`}>
                                    <button className="btn btn-edit">
                                        View
                                    </button>
                                    </Link>
                                    </td>
    </tr>
    
    
</table>
  );
}

export default Home;