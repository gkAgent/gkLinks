# gkLinks v2.0.0 — IT 開発者・PM のための万能ブックマーク

**サーバー無し・DB 無し・HTML ファイル1つで動く高機能リンク管理アプリ**

「え？こんなことも HTML 1ファイルでできるの？」と驚かせるのが目的のアプリです。

[![Latest Release](https://img.shields.io/github/v/release/gkAgent/gkLinks?label=Download&color=d4af37)](https://github.com/gkAgent/gkLinks/releases/latest)
[![License](https://img.shields.io/badge/license-Free-green)](LICENSE)
[![HTML](https://img.shields.io/badge/Made%20with-HTML%2FJS-orange)]()
[![Web](https://img.shields.io/badge/web-gkagent.jp-d4af37)](https://gkagent.jp)

---

## スクリーンショット

| メイン画面 | ダッシュボード |
|---|---|
| ![main](screenshots/01_main.png) | ![dashboard](screenshots/02_dashboard.png) |

| AIツール | コードスニペット |
|---|---|
| ![ai](screenshots/03_ai_tools.png) | ![snippets](screenshots/04_snippets.png) |

| ノートブック | Cmd Palette (Ctrl+K) |
|---|---|
| ![notebook](screenshots/05_notebook.png) | ![cmd](screenshots/06_cmd_palette.png) |

---

## ⬇ ダウンロード

最新版：**[gkLinks v2.0.0](https://github.com/gkAgent/gkLinks/releases/latest/download/gkLinks_v2.0.0.zip)**

ZIP を解凍して `gkLinks.html` をダブルクリックするだけで使えます。

---

## 概要

業務でよく使うリンク・コードスニペット・AI プロンプト・議事録メモを、たった 1 つの HTML ファイルで一元管理できます。インストール不要、ブラウザで開くだけ。データはブラウザのローカルストレージに保存されるので、サーバーも DB も認証も不要です。

---

## 主要機能

### 🔗 リンク管理
- カテゴリ階層管理（カラー設定・並び替え）
- パネル（リンクカード）にタグ・説明文・期限・お気に入り
- ドラッグ&ドロップで並び替え
- Favicon 自動取得（URL を入れるだけでアイコン表示）
- 右クリックコンテキストメニュー（開く・コピー・QR・編集・削除）
- 期限リマインダー（🔴 過ぎ / 🟡 今日 / 🟢 7日以内）

### 🔍 検索・フィルタ
- 全文検索（タイトル・URL・タグ・説明文）
- AND/OR/除外 演算子対応
- タグフィルター（複数選択）
- 日付フィルター（今週・今月・先月以前）
- 🎤 音声検索（「Google を開く」と話すと開く）
- ⌘ Cmd Palette（Ctrl+K でモダンなコマンド呼び出し）

### 📊 ダッシュボード
- 累計パネル数 / カテゴリ数 / お気に入り数 / クリック数
- 最もよく開くリンク Top10
- タグクラウド（出現頻度でフォントサイズ可変）
- 90日 ヒートマップカレンダー（GitHub風）
- カテゴリ別パネル数 横棒グラフ

### 📋 業務効率化
- **デイリースタンドアップ自動生成**（昨日のクリック・追加・編集を Markdown に）
- **PR レビュータイマー**（経過時間表示・3日以上で警告）
- **工数記録**（タスク別タイマー・CSV出力）
- **期限近いタスク**（ダッシュボードに自動表示）
- **プロジェクトコンテキスト切替**（タグでプロジェクト切替・リネーム/削除UI）

### 🤖 AI ツール（業務改善のキラー機能）
- **AI プロンプトライブラリ 18 種**：
  - コードレビュー（PR・セキュリティ・日本SI観点）
  - リファクタリング・命名改善
  - 仕様書生成・PlantUML
  - 単体テスト・E2Eテスト生成
  - エラー調査・スタックトレース解析
  - 議事録要約・タスク見積もり
  - SQL最適化・N+1検出
  - コメント自動生成・翻訳
- 変数置換でプロンプトをカスタマイズ
- Claude Code / Copilot Chat / VS Code 用にコピー
- カスタムテンプレート保存可能

### 🧩 コードスニペット集 18 種
- Java / TypeScript / C# / VB.NET / Python / SQL / PowerShell / Bash
- 業務でよく使うパターン（Optional・LINQ・try/catch・CTE 等）
- カスタムスニペット保存・編集・削除

### 📝 ノートブック
- 複数ノート管理（タイトル・タグ・最終更新）
- 6種テンプレート：議事録 / 設計書 / ADR / デイリーログ / PR説明文 / 空白
- Quill リッチテキストエディタ
- HTML / PDF / TXT 出力

### 🎫 開発者向け連携
- チケット番号自動検出（JIRA `PROJ-123` / Backlog `[BACK-1234]` / Redmine `#1234`）
- ベース URL 設定でクリック→該当チケットへ
- Markdown 対応（説明文で **太字** *斜体* `code` `[link](url)` 使用可）

### 🌐 共有・バックアップ
- JSON でのインポート / エクスポート
- ブラウザブックマーク (HTML) インポート / エクスポート
- 🔗 URL 共有（設定全体を Base64 で URL 化、他人に渡せる）
- 📷 QR コード生成（リンクをスマホに転送）

---

## 動作環境

- **OS**: Windows 11
- **ブラウザ**: Chrome / Edge（最新版推奨）
- **インストール**: 不要 — ZIP を解凍して HTML をダブルクリック

※ 音声検索は Chrome / Edge のみ対応（Web Speech API 利用）

---

## 使い方

1. ZIP を任意のフォルダに解凍
2. `gkLinks.html` をダブルクリック（またはブラウザにドラッグ）
3. 「スターターセットを追加」で初期リンクを読み込み
4. カテゴリ・パネルを追加してカスタマイズ
5. Ctrl+K でコマンドパレット起動

### データの保存
データはブラウザのローカルストレージに保存されます。**ファイル削除や別ブラウザで開いても消えません**（同じブラウザで開けば復元）。
バックアップは「データ管理」タブから JSON エクスポートで取得可能。

---

## ライセンス

**MIT License** — 個人・商用問わず無料でご利用いただけます。
再配布・改変の際は著作権表示（© 2026 gkAgent）と LICENSE ファイルをそのまま含めてください。

詳細は [LICENSE](LICENSE) を参照。

---

## バージョン履歴

- **v2.0.0** (2026/04/25) — 正式版公開（v2 リリース）。タブバー sticky 固定・全機能リグレッションテスト 38/38 PASS
- **v1.7.0** (2026/04/22) — UI/UX 最終調整・ヘルプ全面刷新
- **v1.5.0** (2026/04/18) — 業務改善機能群追加（AI/スニペット/PRタイマー/工数）
- **v1.3.0** (2026/04/12) — ダッシュボード・スタンドアップ生成
- **v1.1.0** (2026/04/06) — 拡張機能（音声・QR・Cmd Palette・Markdown）
- **v1.0.0** (2026/03/30) — α版リリース（基本機能）

---

## 開発元

**gkAgent**
- Web: https://gkagent.jp/
- Note: https://note.com/gkagent
- Zenn: https://zenn.dev/gk3
