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

- ドキュメント
  https://cmmnty-docs.notion.site/React-shadcn-ui-155111c24256805fbb80dcf027938e89
- Tailwind サービス
  https://zenn.dev/d0ne1s/articles/c4909f32ce8fed5ac251
-

## 💡 学びのポイント

- git init
- git add .
- git commit -m "React の導入"
- git remote add origin [GitHub のリポジトリ URL]
- git push origin main(初回の場合:git push -u origin main)

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

- 2024/12/13
  - 前回のハンズオンで学んだものを一から作ってみる。
  - shadcn/ui のサイドバー作成で躓いた。今日は終了(18:38)