# N8N Workflows - Dockerfile
# 多阶段构建以优化镜像大小

# ============================================
# 阶段 1: 依赖安装
# ============================================
FROM node:18-alpine AS deps

# 设置工作目录
WORKDIR /app

# 安装 libc6-compat 以提高兼容性
RUN apk add --no-cache libc6-compat

# 复制 package 文件
COPY package.json package-lock.json* ./

# 安装依赖
RUN npm ci --only=production && \
    npm cache clean --force

# ============================================
# 阶段 2: 构建应用
# ============================================
FROM node:18-alpine AS builder

WORKDIR /app

# 复制依赖
COPY --from=deps /app/node_modules ./node_modules

# 复制源代码
COPY . .

# 设置构建环境变量
ENV NODE_ENV=production

# 构建应用
RUN npm run build

# ============================================
# 阶段 3: 生产运行
# ============================================
FROM node:18-alpine AS runner

WORKDIR /app

# 设置环境变量
ENV NODE_ENV=production
ENV PORT=4321

# 创建非 root 用户
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 astro

# 复制必要文件
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json

# 安装生产服务器 (如果需要)
RUN npm install --production --ignore-scripts && \
    npm cache clean --force

# 切换到非 root 用户
USER astro

# 暴露端口
EXPOSE 4321

# 健康检查
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:4321/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# 启动命令
CMD ["node", "./dist/server/entry.mjs"]

# ============================================
# 构建说明
# ============================================
# 构建镜像:
#   docker build -t n8nworkflows:latest .
#
# 运行容器:
#   docker run -p 4321:4321 --env-file .env n8nworkflows:latest
#
# 使用 docker-compose:
#   docker-compose up -d
#
# ============================================
# 优化建议
# ============================================
# 1. 使用 .dockerignore 排除不必要的文件
# 2. 多阶段构建减小镜像大小
# 3. 使用 alpine 基础镜像
# 4. 清理 npm 缓存
# 5. 使用非 root 用户运行
# 6. 添加健康检查
# 7. 合理设置环境变量
