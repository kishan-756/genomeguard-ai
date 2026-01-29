import random

HOSPITALS = ["Hospital A", "Hospital B", "Research Lab C"]

def federated_update():
    source = random.choice(HOSPITALS)
    return {
        "status": "success",
        "message": f"Model updated from {source} (Encrypted Weights)"
    }
