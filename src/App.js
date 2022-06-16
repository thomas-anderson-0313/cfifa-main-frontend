import logo from "./coin.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="blog-graphic-text">Welcome to CFIFA 23 !</div>
      <div style={{ marginTop: 50, marginBottom: 50 }}>
        <a
          className="marketing-button"
          href="https://presale.cfifa.finance"
          target="_self"
          rel="noopener noreferrer"
        >
          Launch Presale
        </a>
      </div>
      <div>
        <a
          className="marketing-button"
          href="https://crypto-fifa23.gitbook.io/crypto-fifa23-world/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Whitepaper
        </a>
      </div>
      <div style={{ marginTop: 50, marginBottom: 50 }}>
        <a
          className="marketing-button"
          href="https://t.me/cfifa_official"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a>
      </div>
    </div>
  );
}

export default App;
