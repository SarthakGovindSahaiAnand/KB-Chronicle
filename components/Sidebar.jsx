const Sidebar = ({ role }) => {
  return (
    <nav className="p-6 space-y-6 text-sm text-gray-800">
      <div className="text-base font-semibold text-blue-600">Navigation</div>
      <ul className="space-y-2">
        <li className="hover:text-blue-500 cursor-pointer">All Documents</li>
        {role === "admin" && (
          <>
            <li className="hover:text-blue-500 cursor-pointer">Upload .docx</li>
            <li className="hover:text-blue-500 cursor-pointer">Create / Edit</li>
            <li className="hover:text-blue-500 cursor-pointer">Delete / Rename</li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Sidebar;


