from gensim import corpora, models
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
import string
import re

nltk.download('punkt')
nltk.download('stopwords')

def preprocessing(document):
    tokens = word_tokenize(document.lower())
    tokens = [token for token in tokens if token not in stopwords.words('english') + list(string.punctuation)]
    text = [token for token in tokens if token.isalnum()]
    return text

def topic_modelling(text, num_topics):
    dictionary = corpora.Dictionary([text])
    corpus = [dictionary.doc2bow(text)]

    #apply LDA
    lda_model = models.LdaModel(corpus, num_topics=num_topics, id2word=dictionary, passes=15)
    topics = lda_model.show_topics(num_topics=5, num_words=5)
    return topics

def clean_topics(topics):
    key_topics = []
    for topic in topics:
        topic_text = topic[1]
        cleaned_topic = re.sub(r'[0-9*+\\"\'.-]', '', topic_text)
        key_topics.append(cleaned_topic.strip())  # Remove leading/trailing whitespace if any
    return key_topics

def get_key_topics(document, num_topics=5):
    document = preprocessing(document)
    topics = topic_modelling(document, num_topics=num_topics)
    return clean_topics(topics)


