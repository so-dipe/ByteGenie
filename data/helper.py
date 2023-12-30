import pandas as pd

ds = pd.read_csv("data/dataset/text_segments.csv")

def get_rows(rows):
    texts = ds.iloc[rows]['text']
    return list(texts)
