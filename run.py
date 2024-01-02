from app import app
from config.config import Config
import os

ENV = Config.ENV

if __name__ == "__main__":
    if ENV == "dev":
        app.run(debug=True)
    elif ENV == "prod":
        print("Run app with `gunicorn app:app 0.0.0.0` or `docker run [IMAGE NAME]`")