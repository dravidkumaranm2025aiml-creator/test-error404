import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <nav className="navbar">
        <div className="logo">CryptoWallet</div>

        <button className="connect-btn">Connect Wallet</button>
      </nav>

      <main className="dashboard-main">
        <div className="welcome">
          <p>Wallet Dashboard</p>
          <h1>Manage your crypto</h1>
        </div>

        <section className="balance-card">
          <p>Available Balance</p>

          <h2>
            0.00 <span>tMSTC</span>
          </h2>

          <div className="wallet-address">Wallet not connected</div>
        </section>

        <div className="actions">
          <button className="send-btn">Send Crypto</button>
        </div>

        <section className="transactions">
          <div className="transaction-header">
            <h2>Recent Transactions</h2>
          </div>

          <div className="empty-state">
            <p>No transactions yet</p>
            <span>Your recent transactions will appear here.</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
