import "./Dashboard.css";

function Dashboard() {
  const cards = [
    { title: "Total Halls", count: 12, icon: "🏢" },
    { title: "Total Buildings", count: 8, icon: "🏗️" },
    { title: "Total Offices", count: 24, icon: "🏬" },
    { title: "Total Rooms", count: 120, icon: "🚪" },
    { title: "Total Sections", count: 55, icon: "📂" },
    { title: "Total Assets", count: 850, icon: "💻" },
    { title: "Allocated", count: 600, icon: "✅" },
    { title: "Available", count: 250, icon: "📦" },
  ];

  return (
    <div className="dashboard">

      <div className="header">
        <h1>Inventory Management Dashboard</h1>
        <p>Manage Assets, Rooms, Sections & Allocations</p>
      </div>

      <div className="card-grid">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="icon">{card.icon}</div>
            <h2>{card.count}</h2>
            <p>{card.title}</p>
          </div>
        ))}
      </div>

      <div className="table-section">
        <h2>Recent Allocations</h2>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Asset</th>
              <th>Quantity</th>
              <th>Section</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Laptop</td>
              <td>10</td>
              <td>IT Section</td>
              <td>
                <span className="active">Allocated</span>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>Printer</td>
              <td>2</td>
              <td>Admin</td>
              <td>
                <span className="active">Allocated</span>
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td>Projector</td>
              <td>1</td>
              <td>Conference Room</td>
              <td>
                <span className="pending">Available</span>
              </td>
            </tr>
          </tbody>

        </table>
      </div>

    </div>
  );
}

export default Dashboard;