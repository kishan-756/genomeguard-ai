from fastapi import FastAPI
from pydantic import BaseModel
from ai_engine import analyze_genome
from federated import federated_update
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="GenomeGuard AI Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class GenomeInput(BaseModel):
    sequence: str

@app.post("/analyze")
def analyze(data: GenomeInput):
    result = analyze_genome(data.sequence)
    return result

@app.post("/federated-sync")
def sync():
    return federated_update()

@app.get("/")
def root():
    return {"message": "GenomeGuard AI Backend Running"}
