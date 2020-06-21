import requests
import  json
import pprint
import pandas as pd
import datetime

api = 'dcf3ea2273d83ed41036182c6e5a60e9 '
url = 'https://api.chatwork.com/v2'
roomID = '192770919'

headers = {'X-ChatWorkToken': api}
target = '{}/rooms/{}/messages?force={}'.format(url, roomID, 1)
response = requests.get(target, headers = headers)
pprint.pprint(response)

dict_data = json.loads(response.content)
# pprint.pprint(dict_data)
# # pprint.pprint(dict_data[0]['body'])
# print('--------------------------------------------------------------------')
# pprint.pprint(dict_data.body)


# data = json.loads(dict_data)
# print(json.dumps(data, indent=2))

f = open("output.json", "w")
json.dump(dict_data, f, indent=4, sort_keys=True, separators=(',', ': ')) # ensure_ascii=False,


# for i in dict_data:
#pprint.pprint(dict_data[0]) # ["account"]["name"]
  # pprint.pprint(dict_data[i]) # ["body"]
  # pprint.pprint(dict_data[i]) # ["send_time"]

  # pprint.pprint(dict_data[key])

# pprint.pprint(dict_data[0]["body"])

# df = pd.read_json("output.json")

# df.to_csv("test.csv")
user_name = dict_data[0]["account"]["name"]
print(user_name)
dt = datetime.datetime.fromtimestamp(dict_data[0]["send_time"])
print(dt)

text_test = dict_data[0]["body"].replace("[info]","")
text_test = text_test.replace("[title]","")
text_test = text_test.replace("[dtext:chatroom_groupchat_created]","")
text_test = text_test.replace("[/title]","")
text_test = text_test.replace("[dtext:chatroom_chatname_is]","")
text_test = text_test.replace("[dtext:chatroom_set]","")
text_test = text_test.replace("[dtext:chatroom_description_is]","")
del text_test[-1]


# pprint.pprint(dict_data[0]["body"])
pprint.pprint(text_test)