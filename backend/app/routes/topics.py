from flask import jsonify, request
from app import app
from ..nlp.topic_modelling.topic_modelling import get_key_topics

@app.route("/get_topics", methods=["POST"])
def get_topics():
    data = request.get_json()
    document = data.get('document')

    topics = get_key_topics(document)
    return jsonify({"topics": topics})