import pandas as pd

df = pd.read_json('output.json')

df.to_csv("hogehoge.csv")