import os
from dotenv import load_dotenv

load_dotenv()

js = f"""
export const baseUri = "{os.environ.get("BASE_URL")}"
"""

with open("frontend/src/config.js", "w") as f:
    f.write(js)
    print("successfully written env variable to config.js")