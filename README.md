# 🧬 GenomeGuard AI

**Privacy-Preserving Genomic Pattern Recognition**

GenomeGuard AI is a hackathon-grade MVP that demonstrates how genomic
analysis can be **fast, private, and collaborative** using AI and
Federated Learning concepts.\
It performs instant DNA analysis in the browser and simulates
privacy-first AI collaboration between hospitals---without ever sharing
raw genetic data.

------------------------------------------------------------------------

## 🚀 Features

-   🔍 Instant genomic analysis (seconds, not weeks)
-   🧠 AI-style disease risk prediction
-   📊 Explainable AI output (affected gene regions)
-   🔐 Privacy-first design (no raw DNA sharing)
-   🌐 Federated Learning simulation
-   💻 Full-stack web application (React + FastAPI)

------------------------------------------------------------------------

## 🛠 Tech Stack

### Frontend

-   React (Vite)
-   Responsive UI with modern styling

### Backend

-   FastAPI (Python)
-   Simulated AI engine (DNA-BERT style behavior)
-   Mock Federated Learning layer

------------------------------------------------------------------------

## 🧩 Architecture

    Browser (React)
          |
          v
    FastAPI Backend
          |
          v
    AI Engine (Inference)
          |
          v
    Result + Explainable Output
          |
          v
    Federated Sync (Encrypted Model Update - Simulated)

Flow:

    Upload DNA → Tokenization → AI Inference → Risk Prediction
               → Explainable Output → Federated Update

------------------------------------------------------------------------

## ⚙️ Setup & Run (Localhost)

### Prerequisites

-   Python 3.9+
-   Node.js 18+

### Backend

``` bash
cd backend
pip3 install -r requirements.txt
uvicorn main:app --reload
```

Backend runs at:\
`http://127.0.0.1:8000`

------------------------------------------------------------------------

### Frontend

``` bash
cd frontend
npm install
npm run dev
```

Frontend runs at:\
`http://localhost:5173`

------------------------------------------------------------------------

## 🧪 Sample DNA Input

    ATGCGTACGTTAGCTAGCTAGGCTAACGTTAGCGATGCTAGCTAGGCTAACGATCGTACGTAGCTAGCTAGGCTAACGTTAGCGATGCTAGCTAGGCTAACGATCGTACGTAGCTAGCTAGGCTA

------------------------------------------------------------------------

## 🎯 Demo Flow (For Judges)

1.  Paste DNA sequence\
2.  Click **Analyze Genome**\
3.  View:
    -   Disease prediction\
    -   Risk percentage\
    -   Influenced gene regions\
4.  Click **Federated Sync**\
5.  See: \> "Model updated from Hospital B (Encrypted Weights)"

Explain: \> "Only encrypted model updates are shared. Raw DNA never
leaves the system."

------------------------------------------------------------------------

## 🌍 Vision

GenomeGuard AI shows the future of genomics:

-   No centralized DNA storage\
-   No privacy compromise\
-   Real-time AI-powered insights\
-   Global collaboration without data leakage

**Fast. Private. Collaborative.**\
*Genomics saved by privacy, powered by AI.*
