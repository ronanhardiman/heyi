# Heyi静态网站

这是一个简单的静态网站，专为Vercel平台部署而设计。

## 项目结构

```
/
├── index.html         # 主页
├── about.html         # 关于页面
├── 404.html           # 404错误页面
├── css/
│   └── style.css      # 样式文件
├── js/
│   └── main.js        # JavaScript文件
├── public/            # 静态资源目录
│   └── images/        # 图片目录
├── vercel.json        # Vercel配置
└── package.json       # 项目配置
```

## 部署到Vercel

### 通过GitHub部署

1. 确保代码已推送到GitHub仓库：
   ```bash
   git add .
   git commit -m "准备部署到Vercel"
   git push origin main
   ```

2. 登录到[Vercel平台](https://vercel.com)

3. 点击"Import Project"按钮

4. 选择从GitHub导入

5. 选择包含此代码的仓库

6. 使用默认设置，点击"Deploy"

### 使用Vercel CLI

1. 安装Vercel CLI：
   ```bash
   npm install -g vercel
   ```

2. 在项目目录中运行：
   ```bash
   vercel
   ```

3. 根据提示完成部署

## 本地开发

使用任何静态文件服务器运行此项目：

```bash
npx serve
```

## 自定义

- 编辑HTML文件修改内容
- 修改`css/style.css`自定义样式
- 在`js/main.js`中添加交互功能
- 在`public/images/`中添加或更新图片

## 许可

MIT 