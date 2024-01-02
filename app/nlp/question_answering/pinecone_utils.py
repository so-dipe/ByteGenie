import pinecone
from config.config import Config
from data.helper import get_rows
from .encoder import query_to_vector

pinecone_api = Config.PINECONE_API
pinecone_env = Config.PINECONE_ENV

pinecone.init(      
	api_key=pinecone_api,      
	environment=pinecone_env      
)      
pinecone_index = pinecone.Index('bytegenie')

#vector search
def get_context(query, top_k=5):
    query_vector = query_to_vector(query)
    matches = pinecone_index.query(vector=query_vector, top_k=top_k)["matches"]
    rows = [match['id'] for match in matches]
    return get_rows(rows)