# メモ

### 宣言の配列について

#### textboxとradioのvalueチェックを簡単にするための配列

{type : type, id : [id1, id2, id3], name : name, value : [value1, value2, value3]}

#### valueをゲットするための備考

```html:sample
for(配列の数繰り返す)
  if(typeがテキストなら)
    idでvalueをゲット

  if(typeがラジオなら)
    for(nameの数だけ繰り返す)
    if(チェックが入っているか)
      valueをゲット
```
