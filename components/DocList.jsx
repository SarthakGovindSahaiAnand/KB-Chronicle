import { useState } from "react";

const dummyDocs = [
  { id: 1, title: "Getting Started", content: "Initialize your repo." },
  { id: 2, title: "Authentication", content: "Use JWT for secure routes." },
];

const DocList = ({ role }) => {
  const [search, setSearch] = useState("");

  const filtered = dummyDocs.filter((doc) => {
    try {
      const regex = new RegExp(search, "i");
      return regex.test(doc.title) || regex.test(doc.content);
    } catch (e) {
      return false;
    }
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search (supports regex)..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 p-3 w-full border border-gray-300 rounded shadow-sm focus:ring focus:ring-blue-300"
      />

      <div className="grid gap-4">
        {filtered.map((doc) => (
          <div key={doc.id} className="p-4 bg-white border rounded shadow hover:shadow-md transition">
            <h3 className="text-lg font-bold text-gray-900">{doc.title}</h3>
            <p className="text-gray-700 mt-1">{doc.content}</p>
            {role === "admin" && (
              <div className="mt-3 space-x-3">
                <button className="text-sm text-red-600 hover:underline">Delete</button>
                <button className="text-sm text-blue-600 hover:underline">Rename</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocList;

