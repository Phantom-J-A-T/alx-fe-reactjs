import { Outlet, Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="p-4">
      <h2>User Profile</h2>
      <nav>
        <Link to="details" className="mr-4">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      <Outlet />
    </div>
  );
}
