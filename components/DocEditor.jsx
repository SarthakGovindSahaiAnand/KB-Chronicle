import { useState } from "react";

const DocEditor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = () => {
    alert(`Saving: ${title}`);
  };

  return (
    <div className="mb-6 p-6 rounded-lg border bg-white shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Create or Edit Document</h2>
      <input
        type="text"
        placeholder="Document Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-4 p-3 border border-gray-300 rounded focus:ring focus:ring-blue-300"
      />
      <textarea
        placeholder="Start typing..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded h-40 focus:ring focus:ring-blue-300"
      />
      <button
        onClick={handleSave}
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Save
      </button>
    </div>
  );
};

export default DocEditor;

