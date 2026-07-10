import ReportCard from "../Components/ReportCard";

const reports = [
  { title: "Quarterly Summary", value: "Q2 2026", detail: "Revenue increased by 14% compared to last quarter." },
  { title: "Forecast Confidence", value: "92%", detail: "The current model is stable across the latest dataset." },
  { title: "Health Assessment", value: "Excellent", detail: "Balanced growth, retained customers, and controlled costs." },
];

const historicalReports = [
  { date: "2026-06-15", type: "Forecast", status: "Ready" },
  { date: "2026-05-25", type: "Performance", status: "Ready" },
  { date: "2026-04-10", type: "Risk", status: "Review" },
];

const Reports = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-[#FFFDF9] p-8 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A3B18A]">Reports</p>
            <h1 className="mt-2 text-3xl font-bold text-[#2F3A32]">Downloadable insights and performance snapshots</h1>
          </div>
          <button className="rounded-xl bg-[#A3B18A] px-4 py-3 font-semibold text-white transition hover:opacity-90">
            Download PDF Report
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {reports.map((item) => (
          <ReportCard key={item.title} {...item} />
        ))}
      </div>

      <div className="rounded-2xl border border-[#E5DDD3] bg-[#FFFDF9] p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-[#2F3A32]">Historical reports</h3>
        <div className="mt-5 overflow-hidden rounded-xl border border-[#E5DDD3]">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-[#F7F3EE] text-[#2F3A32]">
              <tr>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {historicalReports.map((report) => (
                <tr key={report.date} className="border-t border-[#E5DDD3]">
                  <td className="px-4 py-3">{report.date}</td>
                  <td className="px-4 py-3">{report.type}</td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-[#D9E5D6] px-3 py-1 text-xs font-semibold text-[#2F3A32]">{report.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;