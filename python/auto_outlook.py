#ライブラリ
import win32com.client

#Outlookのオブジェクト設定
outlook = win32com.client.Dispatch('Outlook.Application')
mymail = outlook.CreateItem(0)

#署名
sign = '''
株式会社 ホゲホゲドットコム
世界のナベヒロ
'''


#メールの設定
mymail.BodyFormat = 1
mymail.To = 'foo@hoge.co.jp; bar@hoge.co.jp'
mymail.cc = 'foo@hoge.com'
mymail.Bcc = 'bar@hoge.com'
mymail.Subject = '件名'
mymail.Body = '''各位
お疲れ様です。

以上、よろしくお願いいたします。
'''+ '\n' +sign

path = r'C:\\Users\watya\Desktop\hogehoge.txt' # 添付ファイルは絶対パスで指定
mymail.Attachments.Add (path)

#出来上がったメール確認
mymail.Display(True)
#確認せず送信する場合は、mymail.Display(True)を消して、下記コードを使用する
#mymail.Send()

# 参考　https://towel-memo.com/python/email_python/