import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    ENV = os.environ.get("ENV")
    DEEP_INFRA_API_KEY = os.environ.get("DEEP_INFRA_API_KEY")
    PINECONE_API = os.environ.get("PINECONE_API")
    PINECONE_ENV = os.environ.get("PINECONE_ENV")