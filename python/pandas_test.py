import pandas as pd
import pprint

if __name__ == '__main__':

    # class which_sheet:
    #     def __init__(self):
    #         self.name = ''

    #     def avg( self, math, english):
    #         print(( math + english) / 2)

    #     def work_sheet(self,file_name,sheet):
    #         return pd.read_excel(file_name,sheet_name = sheet)

    # ws = which_sheet()
    # print(ws.work_sheet('example.xlsx','テスト　太郎'))


    input_value = """21:29 2020/05/22
テスト　太郎
項目1
0件
1件
25件
項目2
12件
55件
45件
"""
    file_name = 'example.xlsx'
    sheet1_name = 'テスト　太郎'
    sheet2_name = 'テスト　次郎'
    # ws = pd.read_excel('example.xlsx',sheet_name = None)
    ws = pd.read_excel(file_name, sheet_name = sheet2_name)

    target_value = input_value.splitlines()

    # pprint.pprint(target_value)

    # for i, key in enumerate(target_value, 3):
        # print(i,key)

    df = pd.DataFrame(target_value)


    # print(ws[sheet_name])
    print(df)

    df.to_excel(file_name, sheet_name = sheet2_name)

    # pandasを使ってexcelを追記すると新規ブックで上書きされる