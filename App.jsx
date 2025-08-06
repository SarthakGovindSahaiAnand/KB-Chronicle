import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DocEditor from './components/DocEditor';
import DocList from './components/DocList';

function App() {
  const [role, setRole] = useState('user'); // 'user' or 'admin'

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar with role selector */}
      <Navbar role={role} setRole={setRole} />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        <main className="flex-1 p-6">
          {role === 'admin' ? (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-yellow-400">Admin Panel</h2>
              <DocEditor />
              <DocList />
            </div>
          ) : (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-blue-400">User View</h2>
              <DocList />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
