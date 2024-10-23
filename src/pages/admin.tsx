import { Link } from "react-router-dom";
import Users from "./users";

const Admin = () => {
	return (
		<div>
			<h1>Admin Page</h1>
			<br />
			<Users /> 
			<p>You must have been assigned an admin role</p>
			<div>
				<Link to="/">Home</Link>
			</div>
		</div>
	);
}; 

export default Admin;
