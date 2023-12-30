from app import app
from config.config import Config

ENV = Config.ENV

if __name__ == "__main__":
    if ENV == "dev":
        app.run(debug=True)
    elif ENV == "prod":
        pass