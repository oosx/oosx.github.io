# Wu Kechen · 个人学术主页

一个无需构建工具、可直接部署到 GitHub Pages 的英文响应式个人学术主页。

## 修改个人信息

主要内容都在 `index.html` 中，搜索以下文字即可快速定位并替换：

- 首页简介段落：研究方向
- `Selected Publications`：论文信息
- `News`：学术动态
- `https://scholar.google.com/citations?user=n6vNDhkAAAAJ`：Google Scholar 个人链接
- `wukechen@fzfu.edu.cn`：联系邮箱

头像文件位于 `assets/avatar.png`，首页通过圆形裁切展示。

## 部署到 GitHub Pages

1. 在 GitHub 创建仓库。个人主页建议命名为 `你的用户名.github.io`。
2. 将本目录推送到仓库的 `main` 分支。
3. 打开仓库的 **Settings → Pages**。
4. 在 **Build and deployment** 中选择 **Deploy from a branch**，分支选 `main`，目录选 `/ (root)`。
5. 保存后等待约 1–2 分钟，即可通过 `https://你的用户名.github.io` 访问。

如果使用普通仓库名，访问地址通常为 `https://你的用户名.github.io/仓库名/`。

## 本地预览

```bash
python3 -m http.server 8000
```

浏览器打开 `http://localhost:8000`。

## 文件结构

```text
.
├── index.html    # 页面内容与结构
├── styles.css    # 视觉样式与响应式布局
├── script.js     # 滚动动画与进度条
└── README.md     # 编辑和部署说明
```
