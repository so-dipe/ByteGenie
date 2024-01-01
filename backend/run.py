from app import app
from config.config import Config
import os

ENV = Config.ENV

if __name__ == "__main__":
    if ENV == "dev":
        app.run(debug=True)
    elif ENV == "prod":
        bind = '0.0.0.0:5000'
        workers = os.cpu_count() * 2 + 1
        loglevel = "info" 
        accesslog = "-" 
        errorlog = "-" 
        gunicorn_options = f"--bind={bind} --workers={workers} --log-level={loglevel} --access-logfile {accesslog} --error-logfile {errorlog}"

        os.system(f"gunicorn 'app:app' {gunicorn_options}")