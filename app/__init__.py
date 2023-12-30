from flask import Flask, render_template

app = Flask(__name__)

from app.routes import qa, summary, topics

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/question_answering")
def render_question_answering():
    return render_template("nlp_apps/question_answering.html")

@app.route("/document_summarizing")
def render_document_summarising():
    return render_template("nlp_apps/document_summarizer.html")

@app.route("/topics")
def render_topics_extractor():
    return render_template("nlp_apps/topics.html")

