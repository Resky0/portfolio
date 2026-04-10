# 部署指南

## 环境要求

- Node.js >= 18.0.0
- npm >= 9.0.0

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```

## 生产构建

```bash
# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 部署到阿里云/腾讯云

### 方式一：使用 Node.js 应用托管

1. **构建项目**
```bash
npm install
npm run build
```

2. **配置 pm2 进程管理器**
```bash
npm install -g pm2
pm2 start .output/server/index.mjs --name "portfolio"
```

3. **上传到云服务器**
- 将整个项目上传到服务器
- 或使用 Git 拉取代码后执行构建

### 方式二：使用 Docker 部署

1. **创建 Dockerfile**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY .output ./
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
```

2. **构建和运行**
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

### 方式三：静态站点部署 (SSG)

如果不需要服务端渲染，可以生成纯静态站点：

```bash
npm run generate
```

生成的静态文件在 `.output/public` 目录，可以直接部署到：
- 阿里云 OSS
- 腾讯云 COS
- GitHub Pages
- Vercel
- 等等

## Nginx 配置示例

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 环境变量配置

创建 `.env` 文件：

```env
NUXT_PUBLIC_SITE_NAME=我的个人作品集
```
