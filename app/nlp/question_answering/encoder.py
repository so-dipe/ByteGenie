from sentence_transformers import SentenceTransformer

model = SentenceTransformer('sentence-transformers/all-MiniLM-L6-v2')

def query_to_vector(query):
    return model.encode(query).tolist()   