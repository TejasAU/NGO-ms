import { Link } from "react-router-dom";

function Home() {
  return (
    <table className="styled-table">
    <thead>
    <tr>
        <th>components</th>
        <th>Action</th>
    </tr>
    </thead>
    <tr>
        <td>Partners</td>
        <td><Link to={`/partners`}>
                                    <button className="btn btn-edit">
                                        Partners
                                    </button>
                                    </Link></td>
    </tr>
    <tr>
        <td>Donors</td>
        <td>Female</td>
    </tr>
    <tr>
        <td>Cash</td>
        <td>Male</td>
    </tr>
</table>
  );
}

export default Home;