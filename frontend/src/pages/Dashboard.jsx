import { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="dashboard">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <span>●</span> Crypto<span>Wallet</span>
        </div>

        <div className="navLinks">
          <a>Dashboard</a>
          <a>Wallet</a>
          <a>Markets</a>
          <a>Transactions</a>
        </div>

        <button className="profile">Deva</button>

        <button
          className="menuBtn"
          onClick={() => setSidebar(!sidebar)}
        >
          ☰
        </button>
      </nav>

      {/* SLIDING SIDEBAR */}
      <aside className={sidebar ? "sidebar show" : "sidebar"}>
        <button
          className="closeBtn"
          onClick={() => setSidebar(false)}
        >
          ×
        </button>

        <h3>CryptoWallet</h3>

        <div className="sideLinks">
          <a>Dashboard</a>
          <a>Wallet</a>
          <a>Markets</a>
          <a>Transactions</a>
          <a>Settings</a>
        </div>
      </aside>

      {/* OVERLAY */}
      {sidebar && (
        <div
          className="overlay"
          onClick={() => setSidebar(false)}
        />
      )}

      {/* MAIN */}
      <main>

        <section className="hero">
          <p className="smallTitle">YOUR CRYPTO WALLET</p>

          <h1>
            Manage your
            <br />
            <span>digital assets.</span>
          </h1>

          <p className="description">
            Track your cryptocurrency, manage your wallet
            and stay connected to the market.
          </p>
        </section>

        {/* BALANCE */}
        <section className="balance">

          <div>
            <p>Total Balance</p>
            <h2>$37,442.99</h2>
          </div>

          <div className="profit">
            +3.55%
          </div>

        </section>

        {/* ACTIONS */}
        <section className="actions">

          <button>Deposit</button>
          <button>Withdraw</button>
          <button>Send</button>
          <button>Receive</button>

        </section>

        {/* CONTENT */}
        <section className="content">

          {/* ASSETS */}
          <div className="panel">

            <div className="panelHeader">
              <h2>Your Assets</h2>
              <span>View all →</span>
            </div>

            <div className="asset">
              <div className="coin">₿</div>

              <div>
                <h3>Bitcoin</h3>
                <p>0.284 BTC</p>
              </div>

              <strong>$19,267</strong>
            </div>

            <div className="asset">
              <div className="coin">Ξ</div>

              <div>
                <h3>Ethereum</h3>
                <p>3.42 ETH</p>
              </div>

              <strong>$11,908</strong>
            </div>

            <div className="asset">
              <div className="coin">S</div>

              <div>
                <h3>Solana</h3>
                <p>18.5 SOL</p>
              </div>

              <strong>$3,417</strong>
            </div>

          </div>

          {/* TRANSACTIONS */}
          <div className="panel">

            <div className="panelHeader">
              <h2>Recent Activity</h2>
              <span>View all →</span>
            </div>

            <div className="transaction">
              <div>
                <h3>Received Bitcoin</h3>
                <p>Today, 10:42 AM</p>
              </div>

              <strong className="green">
                +$1,628
              </strong>
            </div>

            <div className="transaction">
              <div>
                <h3>Sent Ethereum</h3>
                <p>Yesterday, 6:21 PM</p>
              </div>

              <strong className="red">
                -$1,218
              </strong>
            </div>

            <div className="transaction">
              <div>
                <h3>Bought Solana</h3>
                <p>Sep 25, 2026</p>
              </div>

              <strong className="green">
                +$960
              </strong>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;