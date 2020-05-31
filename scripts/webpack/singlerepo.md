## 概要

案件特化のライブラリを制作したくなるケース、存在しませんか？
単一ファイルの場合は、1ファイルで終わりですが、必ずしも単一ファイルで終わりなわけではありません。
対応するにも懸念点が多かったりもします。

- browserへの対応 `hogehoge.min.js`
- commonjsへの対応 `hogehoeg.cjs.js`
- ESModuleへの対応 `hogehoge.es.js`

Webpackの場合、これらのだし分けが苦労したため、今回は、`Rollup`というバンドラーを用い、ライブラリの基礎を作成していくことにしました。

今回使用する`Rollup`は`React`や`babel`で使用されており、設定が非常に軽微であるためこれを使用しました。


## なぜ出し分けが必要なのか

- NodeJSでサラッとアプリを作る際に`import`と`export`構文が邪魔になる。
- TypeScriptを使用している際に、`commonjs`でないと`import`できない
    - CommonJSだと`tree shaking`が使用できない
- CDNサーバーを公開して、browserに直接ライブラリ提供を行いたい

上記を柔軟に対応するため、出し分けを行えるように作成したほうが利用者に対し、やさしいためです。

当初`lodash`は、`CommonJS`のみに対応していた（と思う）ため、`tree shaking`などが行えない、などの弊害がありましたが
のちに`lodash-es`が開発されたという事もあり、両方の対応（特にESModule）の対応は結構大事だと思います。

## 使用するライブラリ

- typescript
- rollup
- ts-node

## マイクロレポジトリとは

1レポジトリに対して、1ライブラリを管理する手法です。

### 良い部分

- 同一レポジトリの依存関係が無く（そりゃそう）見通しが良い
- 基本的にすべてのnpmコマンドは1レポジトリを起点に作成されているため、コマンドをスクリプトで記述する必要がない

### 悪い部分

- パッケージを分けたい場合、柔軟ではない
    - 例) `react-router`と`react-router-dom`のような分け方をする際適していない
    - 例) https://github.com/OnsenUI/OnsenUI のように forReact forVue などコアライブラリに対して派生させるのには向いていない
        - 上記に関しては別レポジトリに分けても良いとは思ってるため議論するべき項目


## 今回なぜ`rollup`を使用するのか

場合分けアウトプットが非常に楽になるためです。

利用者は下記の3種類考えられると思っています

- Broserからscriptタグを直接使用したい
- `import / export` 構文のモジュールを使用して `Tree Shaking`を使用したい
- `commonjs`を使用し、`require('hogehoge')`という風に記述したい

webapckでのだし分け

https://webpack.js.org/configuration/output/

rollupでのだし分け

https://rollupjs.org/guide/en/#configuration-files

rollupの場合、非常に簡素に、出し分けが行えます。

## rollupのコンフィグ

- rollup
- @rollup/plugin-commonjs
- @rollup/plugin-node-resolve
- @rollup/plugin-typescript
- rollup-plugin-dts

### example(cjs mjs)

```ts:rollup.config.js
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

const extensions = [ '.js', '.jsx', '.ts', '.tsx' ];
const packageName = 'hogePackage';

export default {
  input: './src/index.ts',
  output: [
    {
      // CommonJS
      file: `dist/${packageName}.cjs.js`,
      format: 'cjs',
    },
    {
      // ES Module
      file: `dist/${packageName}.esm.js`,
      format: 'es',
    },
    {
      // min.js
      file: `dist/${packageName}.min.js`,
      format: 'iife',
      file: packageName,
      globals: {},
    },
  ],
  plugins: [
    resolve({
      extensions,
    }),
    commonjs(),
    babel({
      extensions,
      include: ['src/**/*'],
    }),
  ],
};
```

```json
// .babelrc
{
  "presets": [
    "@babel/env",
    "@babel/typescript"
  ],
  "plugins": [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread"
  ]
}
```

## NPMへの公開タスク

ターミナルから会員登録が可能です

```sh
$ npm set init.author.name "araki takaki"
$ npm set init.author.email "arakitakaki@team-lab.com"
$ npm set init.author.url "http://qiita.com/ArakiTakaki"
$ npm adduser  # 会員登録情報の入力
```

