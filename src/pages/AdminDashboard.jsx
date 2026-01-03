import AdminSidebar from "../components/layout/AdminSidebar";
import Navbar from "../components/layout/Navbar";
import DashboardStats from "../components/admin/DashboardStats";
import RevenueChart from "../components/admin/RevenueChart";
import HireCancelChart from "../components/admin/HireCancelChart";
import LiveCarStatusTable from "../components/admin/LiveCarStatusTable";

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar kiri */}
      <AdminSidebar />

      {/* Isi kanan */}
      <div className="flex-1 flex flex-col">

        <Navbar />

        <div className="p-6 space-y-6">
          <DashboardStats />

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 bg-white p-6 rounded-xl shadow">
              <RevenueChart />
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <HireCancelChart />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <LiveCarStatusTable />
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
