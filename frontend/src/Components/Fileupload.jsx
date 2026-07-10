import { useState } from "react";
import { FaCloudUploadAlt, FaFileCsv } from "react-icons/fa";

const FileUpload = () => {
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState("No file selected");

  const handleDrop = (event) => {
    event.preventDefault();
    setDragActive(false);
    const file = event.dataTransfer.files?.[0];
    setFileName(file ? file.name : "No file selected");
  };

  return (
    <div className="rounded-2xl border border-[#E5DDD3] bg-[#FFFDF9] p-6 shadow-sm">
      <div
        className={`rounded-2xl border-2 border-dashed p-8 text-center transition ${dragActive ? "border-[#A3B18A] bg-[#D9E5D6]/30" : "border-[#E5DDD3]"}`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
      >
        <FaCloudUploadAlt className="mx-auto text-4xl text-[#A3B18A]" />
        <h3 className="mt-3 text-lg font-semibold text-[#2F3A32]">Drag & drop your sales file here</h3>
        <p className="mt-2 text-sm text-[#2F3A32]/70">CSV or Excel files supported</p>
        <label className="mt-5 inline-flex cursor-pointer rounded-full bg-[#A3B18A] px-4 py-2 text-sm font-semibold text-white hover:opacity-90">
          Choose file
          <input type="file" className="hidden" onChange={(e) => setFileName(e.target.files?.[0]?.name || "No file selected")} />
        </label>
      </div>

      <div className="mt-5 rounded-xl border border-[#E5DDD3] bg-[#F7F3EE] p-4">
        <div className="flex items-center gap-3">
          <FaFileCsv className="text-[#A3B18A]" />
          <div>
            <p className="font-medium text-[#2F3A32]">Selected file</p>
            <p className="text-sm text-[#2F3A32]/70">{fileName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
