# Vercel静态网站模板

这是一个简单的静态网站模板，专为Vercel平台部署而设计。项目使用纯HTML、CSS和JavaScript构建，无需任何构建工具或框架，便于快速开发和部署。

## 项目结构

```
vercel-static-site/
├── index.html        # 主页面
├── about.html        # 关于页面
├── styles.css        # 样式表
├── script.js         # JavaScript文件
├── vercel.json       # Vercel配置文件
└── README.md         # 项目说明文件
```

## 特性

- 响应式设计，适配各种设备尺寸
- 简洁现代的UI界面
- 页面过渡动画效果
- 可自定义内容和样式
- 可直接部署到Vercel平台

## 本地开发

由于这是一个纯静态网站，您可以直接在浏览器中打开HTML文件进行开发和预览。

如果您想要一个简单的本地服务器，可以使用Python的HTTP服务器：

```bash
# 如果安装了Python 3
python -m http.server

# 如果安装了Python 2
python -m SimpleHTTPServer
```

或者使用Node.js的http-server（需要先安装）：

```bash
npx http-server
```

## 部署到Vercel

1. 在GitHub、GitLab或Bitbucket上创建一个新仓库
2. 将此项目代码上传到您的仓库
3. 在Vercel上注册账号（如果尚未注册）
4. 在Vercel控制台中点击"New Project"
5. 导入您的Git仓库
6. 点击"Deploy"开始部署
7. 部署完成后，Vercel会自动分配一个域名供您访问

## 自定义

您可以通过修改以下文件来自定义网站：

- `index.html` 和 `about.html` - 修改页面内容
- `styles.css` - 修改样式和布局
- `script.js` - 添加交互功能
- `vercel.json` - 自定义Vercel部署配置

## 许可

MIT License 