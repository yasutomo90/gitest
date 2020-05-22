import openpyxl
import pprint

if __name__ == '__main__':

    book = openpyxl.load_workbook('example.xlsx')
    sheet_names = book.sheetnames

    # print(sheet_names)

    sheet1 = sheet_names[0]
    sheet2 = sheet_names[1]

    # pprint.pprint(list(book[sheet1].values))


    text = """21:29 2020/05/22
テスト　太郎
項目1
0件
1件
25件
項目2
12件
55件
45件"""

    input_text = text.splitlines()
    # print(input_text)

    for i, row in enumerate(input_text,1):
        print(i,row)
        book[sheet2].cell( i, 5).value = row


    book.save('example.xlsx')