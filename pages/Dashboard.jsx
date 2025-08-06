import DocEditor from "../components/DocEditor";
import DocList from "../components/DocList";

const Dashboard = ({ role }) => {
  return (
    <div className="flex-1 p-4">
      {role === "admin" && <DocEditor />}
      <DocList role={role} />
    </div>
  );
};

export default Dashboard;
