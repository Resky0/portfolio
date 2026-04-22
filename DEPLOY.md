# 部署指南

## 项目类型

这是一个基于 Vite 构建的 Vue 3 单页应用（SPA）。

- 开发环境使用 `vite`
- 生产构建产物目录是 `dist/`
- 生产环境不需要运行 Node.js 服务端渲染

## 环境要求

- Node.js >= 18.0.0
- npm >= 9.0.0

## 本地开发

```bash
npm install
npm run dev
```

默认访问地址：

- `http://localhost:3000`

## 生产构建

```bash
npm run build
```

构建完成后，静态文件输出到 `dist/` 目录。

如需本地预览构建结果，可运行：

```bash
npm run preview
```

`vite preview` 只适合本地验证，不建议作为生产部署方式。

## 部署方式

### 方式一：静态文件部署

适合部署到：

- Nginx
- 阿里云 OSS
- 腾讯云 COS
- Vercel
- Netlify
- GitHub Pages

基础流程：

```bash
npm install
npm run build
```

然后将 `dist/` 目录中的文件上传到静态站点托管目录即可。

### 方式二：Docker + Nginx

项目根目录已提供可直接使用的 `Dockerfile` 和 `nginx.conf`。

构建镜像：

```bash
docker build -t portfolio .
```

运行容器：

```bash
docker run -d -p 3000:80 --name portfolio portfolio
```

访问地址：

- `http://localhost:3000`

## Nginx 配置示例

如果你把 `dist/` 部署到自己的 Nginx，可以使用下面的配置。

```nginx
server {
    listen 80;
    server_name your-domain.com;

    root /var/www/portfolio/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /assets/ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

`try_files $uri $uri/ /index.html;` 是 SPA 路由回退的关键配置，否则刷新如 `/works`、`/about` 这类前端路由时会返回 404。

## 环境变量

当前项目没有必需的构建期或运行期环境变量。

如果后续需要在前端读取环境变量，请遵循 Vite 约定：

- 变量名必须以 `VITE_` 开头
- 在代码中通过 `import.meta.env` 访问

示例：

```env
VITE_SITE_NAME=我的个人作品集
```

## 子路径部署

如果站点不是部署在域名根路径，而是例如 `https://example.com/portfolio/`，需要在 `vite.config.ts` 中补充或调整 `base` 配置，例如：

```ts
export default defineConfig({
  base: '/portfolio/'
})
```
