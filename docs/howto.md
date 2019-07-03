# どうやって動かすの？
これはOSK Web班向けなのでJavaScriptを取り上げる

JavaScriptはブラウザで動く言語だが、Node.jsを使うとサーバーとして動作させることができる

Node.jsは、ChromeのJavaScript実行環境 ( [V8](https://v8.dev/docs) ) を移植してコマンドライン上で動くようにしたもの

## サーバーフレームワーク
- [Express](https://expressjs.com/)
	- デファクトスタンダード
- [Koa](https://koajs.com/)
	- Expressの非同期を改良したものらしい

[フレームワークなしでもサーバーを立てることはできる](https://developer.mozilla.org/ja/docs/Learn/Server-side/Node_server_without_framework)が、面倒くさいのでフレームワークを使うことが多い

## 環境構築
### Node.jsの使い方
前述の通り、Node.jsはJavaScriptをコマンドライン上で実行するためのアプリケーション

#### インストール

1. [NVM](https://github.com/nvm-sh/nvm#installation-and-update)のインストール

	NVM ( Node Version Manager ) は複数のバージョンのNode.jsをいい感じに切り替えて使うことができる優秀なアプリケーション
	```shell
	$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

	$ nvm --version
	```
	NVMのバージョン番号が表示されればOK

2. Node.jsのインストール

	NVM経由でLTS ( Long Term Support ) 版をインストール
	```shell
	$ nvm install --lts

	$ node -v
	```
	Node.jsのバージョン番号が表示されればOK

#### Hello, World!
任意のディレクトリで以下のようなhello.jsを作成してNode.jsで実行してみよう

```js
// hello.js
console.log("Hello, World!")
```

```shell
$ node hello.js
Hello, World!
```

### NPMの使い方
NPM ( Node Package Manager ) はパッケージと呼ばれる、Node.jsで動作するライブラリのようなものを管理するためのアプリケーションで、Node.jsに同梱されている

プロジェクトが依存しているパッケージの情報は package.json というファイルに保存され、これは```npm init```を実行することによって生成する

#### パッケージのインストール
```npm install <パッケージ名>```を実行することでパッケージをインストールすることができる

また、これは```npm i <パッケージ名>```と省略して記述できる

- -S ( --save ) オプション
	- package.json の dependencies に追加する
- -D ( --save-dev ) オプション
	- package.json の devDependencies に追加する
- -g オプション
	- グローバルインストール
	- コマンドのように実行できるようになる

### Expressの使い方
ExpressはNode.jsで最もユーザー数が多そうなサーバーフレームワーク

#### ping pong
任意のディレクトリにexpressをインストールしよう

```shell
$ npm init -y	# -y オプションをつけると質問にすべてyesで答える
$ npm i -S express
```

以下のようなserver.jsを作成してNode.jsで実行してみよう

```js
const express = require("express")
const app = express()

app.get("/ping", function (req, res) {
	res.send("pong")
})

app.listen(3000)
```

```shell
$ node server.js
```

動きはじめたら [localhost:3000/ping](http://localhost:3000/ping) にアクセスしてみよう

```pong```と表示されていれば成功

# 演習
## クライアントからAPIを叩いてみよう
国際宇宙ステーションの位置を取得できるAPIにクライアントサイドJSからアクセスして、HTML上に緯度と経度を表示してみよう

```http://api.open-notify.org/iss-now.json```

参考: [Fetch](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch)

## 掲示板を作ってみよう
某「○ch」みたいな掲示板を作ってみよう

送信・表示はテキストだけでよい

余力があればそれぞれのメッセージの投稿時刻も表示してみよう

## じゃんけんアプリを作ってみよう (発展)
Socket通信を使ってじゃんけんのリアルタイム対戦

これはExampleがありません

決して作るのがめんどくさかったとかではありません

参考: [Socket.io](https://socket.io/docs/#Using-with-Node-http-server)
