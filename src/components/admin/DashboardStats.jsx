const DashboardStats = () => {
  const stats = [
    { title: "Total Revenue", value: "12,939", icon: "💰" },
    { title: "Total Order", value: "12,939", icon: "📦" },
    { title: "Total Car", value: "12,939", icon: "🚗" },
    { title: "Total User", value: "12,939", icon: "👤" },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((item, idx) => (
        <div
          key={idx}
          className="bg-white p-5 shadow rounded-xl flex items-center gap-4"
        >
          <div className="text-3xl">{item.icon}</div>
          <div>
            <p className="text-gray-500 text-sm">{item.title}</p>
            <p className="text-xl font-bold">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
