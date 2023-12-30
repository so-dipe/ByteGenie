from flask import jsonify, request
from app import app
from ..nlp.document_summarization.summarization import generate_summary

@app.route("/summarize", methods=["POST"])
def summary():
    data = request.get_json()
    document = data.get('document')

    summary = generate_summary(document)
    return jsonify({"summary": summary})