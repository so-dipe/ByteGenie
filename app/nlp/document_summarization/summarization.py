from transformers import pipeline

#download summarizer model
summarizer = pipeline("summarization", model="Falconsai/text_summarization")

def generate_summary(document, max_length=250, min_length=30):
    summary = summarizer(
        document,
        max_length=max_length, 
        min_length=min_length, 
        do_sample=False
    )
    return summary[0]['summary_text']
