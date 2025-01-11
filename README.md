# React + TypeScript 学習プロジェクト

[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61dafb)](https://reactjs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15.1.4-000000)](https://nextjs.org/)

## 🔧 開発環境

- Node.js: 22.10.0
- パッケージマネージャー: npm
- エディタ: Cursor

### 使用している主要パッケージ

- React: 19.0.0
- Next.js: 15.1.4
- TypeScript: 5
- TailwindCSS: 3.4.1
- ESLint: 9
- Lucide React: 0.469.0
- Radix UI React Slot: 1.1.1
- Class Variance Authority: 0.7.1
- Clsx: 2.1.1
- Tailwind Merge: 2.6.0
- Tailwind Animate: 1.0.7

## 📖 参考にした資料

- ()や\_から始まるディレクトリのルーティングについて
  - https://nextjs.org/docs/app/building-your-application/routing/route-groups
  - https://nextjs.org/docs/app/getting-started/project-structure#private-folders

## 💡 学びのポイント

- git remote add origin https://github.com/Toridesu/portfolio-showcase.git

- 変更をステージング
  git add .
- コミット
  git commit -m "Initial commit"
- GitHub にプッシュ
  git push -u origin main

- useStateなどのフックは、サーバー上では使用できないので、フックを使う場合は、クライアントコンポーネントにする必要がある。
- slice(1)は、配列の最初の要素（インデックス0）を除いた新しい配列を返します。つまり、最初のプロジェクトを除いたすべてのプロジェクトを取得
- 

### つまずきポイント

- 環境構築での初期エラー
  - tsconfig.app .node にエラー。
    "incremental": true, // この行を追加 これで対処した。
  - "noUncheckedSideEffectImports": true ここでエラー出てた。
    削除して対処した。
- "Unknown at rule @tailwind"の警告が出ていた。
  PostCSS Language Support の拡張機能を入れて対処した
- TailWind の ClassName がコードの整形をすると''になる。今度聞いてみたい。

## 📚 学習メモ

- 2025/01/09 (2h)
  - 環境構築
  - サイトレイアウトの作成
- 2025/01/10 (1h)
  - データフェッチ
