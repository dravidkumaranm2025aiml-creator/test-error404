import "./transactions.css";

function Transactions() {
  return (
    <div className="transactions-page">

      {/* HEADER */}
      <header className="transactions-header">

        <a href="/" className="transactions-logo">
          <span>●</span> CryptoWallet
        </a>

        <a href="/" className="back-button">
          ← Dashboard
        </a>

      </header>


      {/* MAIN */}
      <main className="transactions-main">

        <section className="transactions-intro">

          <p className="transactions-label">
            YOUR ACTIVITY
          </p>

          <h1>
            Transactions<span>.</span>
          </h1>

        </section>


        {/* SUMMARY */}
        <section className="transaction-summary">

          <div>
            <small>Total Transactions</small>
            <strong>24</strong>
          </div>

          <div>
            <small>Total Received</small>
            <strong className="green-text">
              +$12,840
            </strong>
          </div>

          <div>
            <small>Total Sent</small>
            <strong className="red-text">
              -$5,420
            </strong>
          </div>

        </section>


        {/* TRANSACTION PANEL */}
        <section className="transaction-panel">

          <div className="transaction-heading">
            <h2>Recent Transactions</h2>

            <button>
              All
            </button>
          </div>


          {/* TRANSACTION 1 */}
          <div className="transaction-row">

            <div className="transaction-icon receive">
              ↓
            </div>

            <div className="transaction-info">
              <h3>Received Bitcoin</h3>
              <p>Today · 10:42 AM</p>
            </div>

            <div className="transaction-coin">
              BTC
            </div>

            <strong className="green-text">
              +$1,628
            </strong>

          </div>


          {/* TRANSACTION 2 */}
          <div className="transaction-row">

            <div className="transaction-icon send">
              ↑
            </div>

            <div className="transaction-info">
              <h3>Sent Ethereum</h3>
              <p>Yesterday · 6:21 PM</p>
            </div>

            <div className="transaction-coin">
              ETH
            </div>

            <strong className="red-text">
              -$1,218
            </strong>

          </div>


          {/* TRANSACTION 3 */}
          <div className="transaction-row">

            <div className="transaction-icon receive">
              ↓
            </div>

            <div className="transaction-info">
              <h3>Bought Solana</h3>
              <p>Sep 25 · 2:15 PM</p>
            </div>

            <div className="transaction-coin">
              SOL
            </div>

            <strong className="green-text">
              +$960
            </strong>

          </div>


          {/* TRANSACTION 4 */}
          <div className="transaction-row">

            <div className="transaction-icon send">
              ↑
            </div>

            <div className="transaction-info">
              <h3>Sent Bitcoin</h3>
              <p>Sep 22 · 11:08 AM</p>
            </div>

            <div className="transaction-coin">
              BTC
            </div>

            <strong className="red-text">
              -$840
            </strong>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Transactions;