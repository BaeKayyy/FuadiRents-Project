import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md flex flex-col p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-8">FuaDiRents</h1>

      <nav className="flex flex-col gap-4">
        <NavLink to="/admin" className="text-blue-600 font-medium">
          Dashboard
        </NavLink>

        <p className="text-gray-500 mt-4 text-sm">Manage</p>
        <NavLink to="/admin/drivers">Driver</NavLink>
        <NavLink to="/admin/users">User</NavLink>
        <NavLink to="/admin/settings">Settings</NavLink>

        <p className="text-gray-500 mt-4 text-sm">Report</p>
        <NavLink to="/admin/payments">Payment Details</NavLink>
      </nav>

      <button className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-lg">
        Logout
      </button>
    </div>
  );
};

export default AdminSidebar;
