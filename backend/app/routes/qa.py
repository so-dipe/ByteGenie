from flask import jsonify, request
from app import app
from ..nlp.question_answering.question_answering import generate_answer

@app.route("/answer", methods=["POST"])
def answer_question():
    data = request.get_json()
    question = data.get('question')

    answer = generate_answer(question)
    return jsonify({"answer": answer})