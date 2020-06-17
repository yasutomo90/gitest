# coding: utf-8

import requests
import json
import csv
import configparser


if __name__ == '__main__':

    URL = 'https://api.chatwork.com/v2'
    # APIKEY = 'dcf3ea2273d83ed41036182c6e5a60e9'
    ROOMID = '192770919'

    config_ini = configparser.ConfigParser()
    config_ini.read('config.ini', encoding='utf-8')
    token = config_ini['chatwork']['token']


    file_name  = 'test.csv'
    headers = { 'X-ChatWorkToken': token }




    url = '{}/rooms/{}/messages'.format(URL, ROOMID)



    resp = requests.get( url, headers=headers)


    print(resp)