# Aex724 Blog

基于开源主题 [Fuwari](https://github.com/saicaca/fuwari) 的个人技术博客。

- 站点：https://aex724.github.io/Aex-724blog/
- 仓库：https://github.com/Aex724/Aex-724blog

## 本地开发

需要 Node.js 22+ 与 pnpm：

```bash
pnpm install
pnpm dev
```

写文章：在 `src/content/posts/` 新建 Markdown，或使用 `pnpm new-post`。

站点配置见 `src/config.ts`（标题、青绿主题色 hue、导航、头像等）。

## 部署

推送到 `main` 后，GitHub Actions 会自动构建并发布到 GitHub Pages。
