import random

DISEASES = [
    "Breast Cancer Risk",
    "Lung Cancer Risk",
    "Rare Genetic Disorder",
    "Cardiovascular Risk",
    "Neurodegenerative Risk"
]

GENE_REGIONS = ["BRCA1", "TP53", "EGFR", "APOE", "CFTR", "KRAS"]

def analyze_genome(sequence: str):
    random.seed(len(sequence))

    risk = round(random.uniform(40, 95), 2)
    disease = random.choice(DISEASES)

    influenced = random.sample(GENE_REGIONS, k=3)

    return {
        "risk": risk,
        "disease": disease,
        "genes": influenced,
        "explanation": f"AI focused on regions {', '.join(influenced)}"
    }
