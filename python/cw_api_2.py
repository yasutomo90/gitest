import requests
import  json
import pprint

api = 'dcf3ea2273d83ed41036182c6e5a60e9 '
url = 'https://api.chatwork.com/v2'
roomID = '192770919'

headers = {'X-ChatWorkToken': api}
target = '{}/rooms/{}/messages?force={}'.format(url, roomID, 1)
response = requests.get(target, headers = headers)
pprint.pprint(response)

dict_data = json.loads(response.content)
pprint.pprint(dict_data)
# pprint.pprint(dict_data[0]['body'])



