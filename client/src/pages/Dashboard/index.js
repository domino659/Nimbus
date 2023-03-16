import './style.scss';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1 className="title">Build your new deployment !</h1>
      <p>To deploy a new Project, get started with one of our Templates.</p>
      <div className="template-container">
        <div>
          <span>React + Node + MariaDB</span>
        </div>
        <div>
          <span>React + Go + MariaDB</span>
        </div>
      </div>
    </div>
  );
}
