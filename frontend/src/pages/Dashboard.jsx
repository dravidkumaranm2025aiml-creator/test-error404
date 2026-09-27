import { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [depositOpen, setDepositOpen] = useState(false);
  const [withdrawOpen, setWithdrawOpen] = useState(false);
  const [sendOpen, setSendOpen] = useState(false);
  const [receiveOpen, setReceiveOpen] = useState(false);

  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAddress, setWithdrawAddress] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [sendAddress, setSendAddress] = useState("");
  const [sendAmount, setSendAmount] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [copied, setCopied] = useState(false);

  const walletAddress = "bc1qexamplewalletaddress123456";

  // ================= CLEAR MESSAGES =================

  const clearMessages = () => {
    setError("");
    setSuccess("");
  };

  // ================= DEPOSIT =================

  const handleDeposit = () => {
    clearMessages();

    if (!depositAmount.trim()) {
      setError("Please enter an amount.");
      return;
    }

    const amount = Number(depositAmount);

    if (isNaN(amount) || amount <= 0) {
      setError("Please enter a valid amount.");
      return;
    }

    setSuccess(`Deposit of $${amount.toFixed(2)} is ready.`);

    setDepositAmount("");
  };

  // ================= WITHDRAW =================

  const handleWithdraw = () => {
    clearMessages();

    if (!withdrawAddress.trim()) {
      setError("Please enter a wallet address.");
      return;
    }

    if (!withdrawAmount.trim()) {
      setError("Please enter an amount.");
      return;
    }

    const amount = Number(withdrawAmount);

    if (isNaN(amount) || amount <= 0) {
      setError("Please enter a valid amount.");
      return;
    }

    setSuccess(`Withdrawal of $${amount.toFixed(2)} is ready.`);

    setWithdrawAddress("");
    setWithdrawAmount("");
  };

  // ================= SEND =================

  const handleSend = () => {
    clearMessages();

    if (!sendAddress.trim()) {
      setError("Please enter the recipient wallet address.");
      return;
    }

    if (!sendAmount.trim()) {
      setError("Please enter an amount.");
      return;
    }

    const amount = Number(sendAmount);

    if (isNaN(amount) || amount <= 0) {
      setError("Please enter a valid amount.");
      return;
    }

    setSuccess(`Send of $${amount.toFixed(2)} is ready.`);

    setSendAddress("");
    setSendAmount("");
  };

  // ================= COPY =================

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(walletAddress);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (error) {
      console.log("Copy failed:", error);
    }
  };

  // ================= CLOSE MODALS =================

  const closeDeposit = () => {
    setDepositOpen(false);
    clearMessages();
  };

  const closeWithdraw = () => {
    setWithdrawOpen(false);
    clearMessages();
  };

  const closeSend = () => {
    setSendOpen(false);
    clearMessages();
  };

  const closeReceive = () => {
    setReceiveOpen(false);
    clearMessages();
  };

  return (
    <div className="dashboard">

      {/* NAVBAR */}

      <nav className="navbar">

        <a href="/" className="logo">
          <span>●</span> CryptoWallet
        </a>

        <div className="nav-links">
          <a href="/">Dashboard</a>
          <a href="/transactions">Transactions</a>
          <a href="#wallet">Wallet</a>
          <a href="#markets">Markets</a>
        </div>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>

      </nav>


      {/* SIDEBAR */}

      <div className={`side-menu ${menuOpen ? "open" : ""}`}>

        <button
          className="close-button"
          onClick={() => setMenuOpen(false)}
        >
          ×
        </button>

        <h2>CryptoWallet</h2>

        <div className="side-links">

          <a href="/" onClick={() => setMenuOpen(false)}>
            Dashboard
          </a>

          <a
            href="/transactions"
            onClick={() => setMenuOpen(false)}
          >
            Transactions
          </a>

          <a href="#wallet" onClick={() => setMenuOpen(false)}>
            Wallet
          </a>

          <a href="#markets" onClick={() => setMenuOpen(false)}>
            Markets
          </a>

        </div>

      </div>


      {/* OVERLAY */}

      {menuOpen && (
        <div
          className="overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}


      {/* MAIN */}

      <main className="dashboard-main">

        {/* HERO */}

        <section className="hero">

          <p className="eyebrow">
            YOUR CRYPTO WALLET
          </p>

          <h1>
            Your money.
            <br />
            <span>Your control.</span>
          </h1>

          <p className="hero-text">
            Manage your digital assets and keep track
            of your crypto transactions in one place.
          </p>

        </section>


        {/* BALANCE */}

        <section className="balance-card">

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

          <button
            onClick={() => {
              clearMessages();
              setDepositOpen(true);
            }}
          >
            Deposit
          </button>

          <button
            onClick={() => {
              clearMessages();
              setWithdrawOpen(true);
            }}
          >
            Withdraw
          </button>

          <button
            onClick={() => {
              clearMessages();
              setSendOpen(true);
            }}
          >
            Send
          </button>

          <button
            onClick={() => {
              clearMessages();
              setReceiveOpen(true);
            }}
          >
            Receive
          </button>

        </section>


        {/* LOWER GRID */}

        <section className="dashboard-grid">

          {/* ASSETS */}

          <div className="panel">

            <div className="panel-title">
              <h2>Your Assets</h2>

              <span>
                View all →
              </span>
            </div>


            <div className="asset">

              <div className="coin-icon">
                ₿
              </div>

              <div className="asset-name">
                <h3>Bitcoin</h3>
                <p>0.284 BTC</p>
              </div>

              <strong>
                $19,267
              </strong>

            </div>


            <div className="asset">

              <div className="coin-icon">
                Ξ
              </div>

              <div className="asset-name">
                <h3>Ethereum</h3>
                <p>3.42 ETH</p>
              </div>

              <strong>
                $11,908
              </strong>

            </div>


            <div className="asset">

              <div className="coin-icon">
                S
              </div>

              <div className="asset-name">
                <h3>Solana</h3>
                <p>18.5 SOL</p>
              </div>

              <strong>
                $3,417
              </strong>

            </div>

          </div>


          {/* RECENT ACTIVITY */}

          <div className="panel">

            <div className="panel-title">
              <h2>Recent Activity</h2>

              <a href="/transactions">
                View all →
              </a>
            </div>


            <div className="activity">

              <div>
                <h3>Received Bitcoin</h3>
                <p>Today, 10:42 AM</p>
              </div>

              <strong className="positive">
                +$1,628
              </strong>

            </div>


            <div className="activity">

              <div>
                <h3>Sent Ethereum</h3>
                <p>Yesterday, 6:21 PM</p>
              </div>

              <strong className="negative">
                -$1,218
              </strong>

            </div>


            <div className="activity">

              <div>
                <h3>Bought Solana</h3>
                <p>Sep 25, 2026</p>
              </div>

              <strong className="positive">
                +$960
              </strong>

            </div>

          </div>

        </section>

      </main>


      {/* ================= DEPOSIT ================= */}

      {depositOpen && (
        <div
          className="deposit-overlay"
          onClick={closeDeposit}
        >

          <div
            className="deposit-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="deposit-close"
              onClick={closeDeposit}
            >
              ×
            </button>

            <p className="eyebrow">
              ADD FUNDS
            </p>

            <h2>Deposit Crypto</h2>

            <p>
              Choose the cryptocurrency you want to deposit.
            </p>

            <select>
              <option>Bitcoin (BTC)</option>
              <option>Ethereum (ETH)</option>
              <option>Solana (SOL)</option>
            </select>

            <input
              type="number"
              min="0"
              placeholder="Enter amount"
              value={depositAmount}
              onChange={(e) => {
                setDepositAmount(e.target.value);
                clearMessages();
              }}
            />

            {error && (
              <p
                style={{
                  color: "#e56b6f",
                  marginTop: "10px",
                  fontSize: "13px"
                }}
              >
                {error}
              </p>
            )}

            {success && (
              <p
                style={{
                  color: "#65c584",
                  marginTop: "10px",
                  fontSize: "13px"
                }}
              >
                {success}
              </p>
            )}

            <button
              className="deposit-confirm"
              onClick={handleDeposit}
            >
              Continue
            </button>

          </div>

        </div>
      )}


      {/* ================= WITHDRAW ================= */}

      {withdrawOpen && (
        <div
          className="withdraw-overlay"
          onClick={closeWithdraw}
        >

          <div
            className="withdraw-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="withdraw-close"
              onClick={closeWithdraw}
            >
              ×
            </button>

            <p className="eyebrow">
              SEND FUNDS
            </p>

            <h2>Withdraw Crypto</h2>

            <p>
              Choose the cryptocurrency and enter the withdrawal amount.
            </p>

            <select>
              <option>Bitcoin (BTC)</option>
              <option>Ethereum (ETH)</option>
              <option>Solana (SOL)</option>
            </select>

            <input
              type="text"
              placeholder="Wallet address"
              value={withdrawAddress}
              onChange={(e) => {
                setWithdrawAddress(e.target.value);
                clearMessages();
              }}
            />

            <input
              type="number"
              min="0"
              placeholder="Enter amount"
              value={withdrawAmount}
              onChange={(e) => {
                setWithdrawAmount(e.target.value);
                clearMessages();
              }}
            />

            {error && (
              <p
                style={{
                  color: "#e56b6f",
                  marginTop: "10px",
                  fontSize: "13px"
                }}
              >
                {error}
              </p>
            )}

            {success && (
              <p
                style={{
                  color: "#65c584",
                  marginTop: "10px",
                  fontSize: "13px"
                }}
              >
                {success}
              </p>
            )}

            <button
              className="withdraw-confirm"
              onClick={handleWithdraw}
            >
              Continue
            </button>

          </div>

        </div>
      )}


      {/* ================= SEND ================= */}

      {sendOpen && (
        <div
          className="send-overlay"
          onClick={closeSend}
        >

          <div
            className="send-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="send-close"
              onClick={closeSend}
            >
              ×
            </button>

            <p className="eyebrow">
              TRANSFER FUNDS
            </p>

            <h2>Send Crypto</h2>

            <p>
              Enter the recipient and the amount you want to send.
            </p>

            <select>
              <option>Bitcoin (BTC)</option>
              <option>Ethereum (ETH)</option>
              <option>Solana (SOL)</option>
            </select>

            <input
              type="text"
              placeholder="Recipient wallet address"
              value={sendAddress}
              onChange={(e) => {
                setSendAddress(e.target.value);
                clearMessages();
              }}
            />

            <input
              type="number"
              min="0"
              placeholder="Enter amount"
              value={sendAmount}
              onChange={(e) => {
                setSendAmount(e.target.value);
                clearMessages();
              }}
            />

            {error && (
              <p
                style={{
                  color: "#e56b6f",
                  marginTop: "10px",
                  fontSize: "13px"
                }}
              >
                {error}
              </p>
            )}

            {success && (
              <p
                style={{
                  color: "#65c584",
                  marginTop: "10px",
                  fontSize: "13px"
                }}
              >
                {success}
              </p>
            )}

            <button
              className="send-confirm"
              onClick={handleSend}
            >
              Send Crypto
            </button>

          </div>

        </div>
      )}


      {/* ================= RECEIVE ================= */}

      {receiveOpen && (
        <div
          className="receive-overlay"
          onClick={closeReceive}
        >

          <div
            className="receive-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="receive-close"
              onClick={closeReceive}
            >
              ×
            </button>

            <p className="eyebrow">
              RECEIVE FUNDS
            </p>

            <h2>Receive Crypto</h2>

            <p>
              Choose a cryptocurrency to view your wallet address.
            </p>

            <select>
              <option>Bitcoin (BTC)</option>
              <option>Ethereum (ETH)</option>
              <option>Solana (SOL)</option>
            </select>

            <div className="receive-address">

              <span>
                {walletAddress}
              </span>

              <button onClick={copyAddress}>
                {copied ? "Copied!" : "Copy"}
              </button>

            </div>

            <button
              className="receive-confirm"
              onClick={closeReceive}
            >
              Done
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default Dashboard;