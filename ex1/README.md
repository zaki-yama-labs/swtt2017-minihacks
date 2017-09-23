課題1
=====

### 使い方

- 事前に Force.com Migration Tool をインストール
	- https://help.salesforce.com/apex/HTViewSolution?id=000176910&language=ja
- `build.properties.sample` に自分の組織のusername, password を入力し、`build.properties` として保存
- 以下のコマンドでメタデータをデプロイ

```
$ ant deployCode
```

- 組織にログインすると「課題1」というアプリケーションが作成されている（中身はカスタムオブジェクトのタブ）


### Author

[zaki-yama](https://github.com/zaki-yama) ( [blog(Japanese)](http://dackdive.hateblo.jp/) )
