const HireCancelChart = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Hire vs Cancel</h2>
      <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">[Pie Chart Placeholder]</p>
      </div>

      <div className="mt-4 text-sm space-y-1">
        <p>🔵 Total Hired — 54%</p>
        <p>🔴 Total Canceled — 20%</p>
        <p>🟡 Total Pending — 26%</p>
      </div>
    </div>
  );
};

export default HireCancelChart;
