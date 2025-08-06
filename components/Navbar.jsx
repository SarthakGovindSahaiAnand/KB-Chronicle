function Navbar({ role, setRole }) {
  return (
    <nav className="bg-gray-800 px-6 py-4 flex justify-between items-center shadow-md">
      {/* Left: Logo */}
      <h1 className="text-5xl font-black text-yellow-500 bg-black p-4 rounded-md shadow-lg">
  KB Chronicle
</h1>

      {/* Center: Search */}
      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="Search documentation..."
          className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* Right: Role Selector & Options */}
      <div className="flex items-center gap-4">
        {/* Role Selector */}
        <div className="flex items-center">
          <label className="mr-2 text-white">Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="p-2 rounded bg-gray-700 text-white"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {/* Options Dropdown */}
        <div className="relative group">
          <button className="p-2 bg-gray-700 rounded text-white hover:bg-gray-600">
            ☰
          </button>
          <ul className="absolute right-0 mt-2 w-40 bg-gray-700 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">Settings</li>
            <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">Help</li>
            <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">Logout</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
