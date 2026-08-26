# Aex724 Blog

基于 [Astro](https://astro.build) 的个人技术博客，仓库：[Aex724/Aex-724blog](https://github.com/Aex724/Aex-724blog)。

## 本地开发

本机需 **Node.js 22.12+**（已安装时可使用 `~/.local/node/bin`）。

```bash
cd ~/Aex-724blog
export PATH="$HOME/.local/node/bin:$PATH"   # 若终端里 node 版本不对
npm install
npm run dev
```

浏览器打开终端提示的地址（一般为 `http://localhost:4321`）。

## 写文章

在 `src/content/blog/` 下新建 `.md` 或 `.mdx` 文件，参考同目录示例文章的 frontmatter。

## 构建

```bash
npm run build
npm run preview
```

## 上线（GitHub Pages）

1. 仓库 **Settings → Pages → Build and deployment**  
   - Source 选 **GitHub Actions**
2. 推送 `main` 分支后，Actions 会自动构建并部署  
3. 站点地址：**https://aex724.github.io/Aex-724blog/**

站点标题等在 `src/consts.ts`，站点 URL 在 `astro.config.mjs` 的 `site` 与 `base`。
