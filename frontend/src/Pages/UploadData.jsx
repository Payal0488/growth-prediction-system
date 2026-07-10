import FileUpload from "../Components/FileUpload";

const previewRows = [
  { date: "2026-01-01", revenue: "$24,500", profit: "$7,100" },
  { date: "2026-02-01", revenue: "$26,100", profit: "$7,600" },
  { date: "2026-03-01", revenue: "$27,900", profit: "$8,300" },
];

const UploadData = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-[#FFFDF9] p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A3B18A]">Upload data</p>
        <h1 className="mt-2 text-3xl font-bold text-[#2F3A32]">Prepare your business dataset for forecasting</h1>
        <p className="mt-3 max-w-2xl text-[#2F3A32]/70">Import CSV or Excel files, review a sample of the data, and resolve validation issues before generating predictions.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <FileUpload />

        <div className="rounded-2xl border border-[#E5DDD3] bg-[#FFFDF9] p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#2F3A32]">Validation status</h3>
          <ul className="mt-4 space-y-3 text-sm text-[#2F3A32]/75">
            <li className="rounded-xl bg-[#F7F3EE] p-3">✓ File format recognized</li>
            <li className="rounded-xl bg-[#F7F3EE] p-3">✓ Required columns found</li>
            <li className="rounded-xl bg-[#F7F3EE] p-3">⚠ Missing date formatting in 2 rows</li>
          </ul>
        </div>
      </div>

      <div className="rounded-2xl border border-[#E5DDD3] bg-[#FFFDF9] p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-[#2F3A32]">File preview</h3>
        <div className="mt-5 overflow-hidden rounded-xl border border-[#E5DDD3]">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-[#F7F3EE] text-[#2F3A32]">
              <tr>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Revenue</th>
                <th className="px-4 py-3">Profit</th>
              </tr>
            </thead>
            <tbody>
              {previewRows.map((row) => (
                <tr key={row.date} className="border-t border-[#E5DDD3]">
                  <td className="px-4 py-3">{row.date}</td>
                  <td className="px-4 py-3">{row.revenue}</td>
                  <td className="px-4 py-3">{row.profit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UploadData;