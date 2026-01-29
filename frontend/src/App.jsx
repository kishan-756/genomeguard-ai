import { useState } from "react";
import "./App.css";

function App() {
  const [sequence, setSequence] = useState("");
  const [result, setResult] = useState(null);
  const [federatedMsg, setFederatedMsg] = useState("");

  const analyze = async () => {
    const res = await fetch("http://127.0.0.1:8000/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sequence }),
    });
    const data = await res.json();
    setResult(data);
    setFederatedMsg("");
  };

  const federatedSync = async () => {
    const res = await fetch("http://127.0.0.1:8000/federated-sync", {
      method: "POST",
    });
    const data = await res.json();
    setFederatedMsg(data.message);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>GenomeGuard AI</h1>
        <p>Privacy-Preserving Genomic Pattern Recognition</p>
      </div>

      <div className="input-box">
        <textarea
          placeholder="Paste DNA Sequence here..."
          value={sequence}
          onChange={(e) => setSequence(e.target.value)}
        />
        <button onClick={analyze}>Analyze Genome</button>
      </div>

      {result && (
        <div className="card">
          <h3>Analysis Result</h3>

          <div className="row">
            <span>Disease</span>
            <b>{result.disease}</b>
          </div>

          <div className="row">
            <span>Risk</span>
            <b>{result.risk}%</b>
          </div>

          <div className="row">
            <span>AI Focus</span>
            <b>{result.explanation}</b>
          </div>

          <div className="row">
            <span>Genes</span>
            <b>{result.genes.join(", ")}</b>
          </div>

          <div className="center">
            <button onClick={federatedSync}>Federated Sync</button>
          </div>
        </div>
      )}

      {federatedMsg && <p className="sync center">{federatedMsg}</p>}
    </div>
  );
}

export default App;
