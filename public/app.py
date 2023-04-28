import json
import pickle

# Load pickled data from file
with open('Finalized_model123.p', 'rb') as f:
    data = pickle.load(f)

# Convert data to JSON format
json_data = json.dumps(data)

# Write JSON data to file
with open('data.json', 'w') as f:
    f.write(json_data)
