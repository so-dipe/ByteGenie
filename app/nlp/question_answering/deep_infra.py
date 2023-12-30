import requests
from config.config import Config

deep_infra_api = Config.DEEP_INFRA_API_KEY


URL = "https://api.deepinfra.com/v1/inference/meta-llama/Llama-2-7b-chat-hf"

def make_inference_request(input_text, url=URL):
    # API endpoint and payload
    url = url
    headers = {
        'Authorization': deep_infra_api,  # Replace with your access token
        'Content-Type': 'application/json'
    }
    payload = {
        'input': input_text,
        'max_new_tokens': 100
    }

    try:
        # Make the POST request
        response = requests.post(url, json=payload, headers=headers)

        # Check if the request was successful
        if response.status_code == 200:
            return response.json()  # Assuming the response is JSON
        else:
            return f"Error: {response.status_code} - {response.text}"

    except requests.RequestException as e:
        return f"Request Error: {e}"

def clean_response(response):
    return response['results'][0]['generated_text']