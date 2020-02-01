import os
import csv

data = "E:\\SYS\\Desktop\\実験用\\github\\python\\folders.csv"

with open(data) as f:
    reader = csv.reader(f)

    for row in reader:
        folder_name = row[0]

        if not os.path.exists(folder_name):
            os.makedirs(folder_name, exist_ok=True)
