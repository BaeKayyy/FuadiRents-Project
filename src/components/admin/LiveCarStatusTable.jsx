const LiveCarStatusTable = () => {
  const rows = [
    { no: "01", car: "6465", driver: "Alex Noman", status: "Completed", earning: "$35.44" },
    { no: "02", car: "5865", driver: "Razib Rahman", status: "Pending", earning: "$0.00" },
    { no: "03", car: "1755", driver: "Luke Norton", status: "In route", earning: "$23.50" },
  ];

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="font-semibold">Live Car Status</h2>
        <button className="px-4 py-2 border rounded-lg">Filter</button>
      </div>

      <table className="w-full bg-white rounded-xl shadow overflow-hidden">
        <thead className="bg-gray-100 text-sm text-gray-600">
          <tr>
            <th className="p-3">No.</th>
            <th className="p-3">Car no.</th>
            <th className="p-3">Driver</th>
            <th className="p-3">Status</th>
            <th className="p-3">Earning</th>
            <th className="p-3"></th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b">
              <td className="p-3">{row.no}</td>
              <td className="p-3">{row.car}</td>
              <td className="p-3">{row.driver}</td>
              <td className="p-3">{row.status}</td>
              <td className="p-3">{row.earning}</td>
              <td className="p-3">
                <button className="px-3 py-1 bg-blue-600 text-white rounded-md">
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LiveCarStatusTable;
