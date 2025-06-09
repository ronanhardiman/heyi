# Heyi静态网站

这是一个简单的静态网站，适合部署到Vercel平台。

## 项目结构

```
heyi/
├── index.html         # 主页
├── about.html         # 关于页面
├── 404.html           # 自定义404错误页面
├── styles.css         # 样式表
├── script.js          # JavaScript脚本
├── images/            # 图片目录
├── vercel.json        # Vercel配置文件
└── package.json       # 项目配置文件
```

## 部署到Vercel

### 方法1：使用Vercel CLI

1. 安装Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. 登录到Vercel:
   ```bash
   vercel login
   ```

3. 部署项目:
   ```bash
   vercel
   ```

4. 按照提示完成部署。

### 方法2：通过GitHub部署

1. 将代码推送到GitHub仓库:
   ```bash
   git add .
   git commit -m "准备部署到Vercel"
   git push origin main
   ```

2. 登录到[Vercel平台](https://vercel.com)。

3. 点击"New Project"按钮。

4. 从GitHub导入您的仓库。

5. 配置项目设置（默认设置通常足够）。

6. 点击"Deploy"按钮开始部署。

## 本地开发

要在本地预览网站，可以使用以下命令：

```bash
npm install -g serve
serve
```

或者使用npm脚本：

```bash
npm run dev
```

## 自定义

- 修改HTML文件以更新内容
- 编辑styles.css自定义样式
- 在script.js中添加交互功能
- 根据需要添加更多页面

## 许可

MIT 