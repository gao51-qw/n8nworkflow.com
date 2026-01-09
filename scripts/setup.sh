#!/bin/bash

# N8N Workflows 项目设置脚本 (Linux/Mac)
# 此脚本将自动设置开发环境

set -e  # 遇到错误时退出

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 打印带颜色的消息
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

print_header() {
    echo -e "\n${BLUE}========================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}========================================${NC}\n"
}

# 检查命令是否存在
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# 检查 Node.js 版本
check_node_version() {
    if command_exists node; then
        NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
        if [ "$NODE_VERSION" -ge 18 ]; then
            print_success "Node.js 版本: $(node -v)"
            return 0
        else
            print_error "Node.js 版本过低 (当前: $(node -v), 需要: >= 18.0.0)"
            return 1
        fi
    else
        print_error "未找到 Node.js"
        return 1
    fi
}

# 检查 npm 版本
check_npm_version() {
    if command_exists npm; then
        print_success "npm 版本: $(npm -v)"
        return 0
    else
        print_error "未找到 npm"
        return 1
    fi
}

# 主函数
main() {
    print_header "N8N Workflows 项目设置"
    
    # 步骤 1: 检查 Node.js
    print_info "步骤 1/5: 检查 Node.js..."
    if ! check_node_version; then
        print_error "请安装 Node.js 18 或更高版本"
        print_info "访问: https://nodejs.org/"
        exit 1
    fi
    
    # 步骤 2: 检查 npm
    print_info "步骤 2/5: 检查 npm..."
    if ! check_npm_version; then
        print_error "请安装 npm"
        exit 1
    fi
    
    # 步骤 3: 安装依赖
    print_info "步骤 3/5: 安装项目依赖..."
    if npm install; then
        print_success "依赖安装成功"
    else
        print_error "依赖安装失败"
        exit 1
    fi
    
    # 步骤 4: 设置环境变量
    print_info "步骤 4/5: 设置环境变量..."
    if [ ! -f .env ]; then
        if [ -f .env.example ]; then
            cp .env.example .env
            print_success "已创建 .env 文件"
            print_warning "请编辑 .env 文件并填入实际的配置值"
        else
            print_warning ".env.example 文件不存在，跳过环境变量设置"
        fi
    else
        print_warning ".env 文件已存在，跳过创建"
    fi
    
    # 步骤 5: 验证项目
    print_info "步骤 5/5: 验证项目配置..."
    if [ -f scripts/validate.js ]; then
        if node scripts/validate.js; then
            print_success "项目验证通过"
        else
            print_warning "项目验证发现一些问题，请检查上面的输出"
        fi
    else
        print_warning "验证脚本不存在，跳过验证"
    fi
    
    # 完成
    print_header "设置完成！"
    
    echo -e "${GREEN}项目已成功设置！${NC}\n"
    
    print_info "下一步操作："
    echo "  1. 编辑 .env 文件，填入必要的配置"
    echo "  2. 运行 'npm run dev' 启动开发服务器"
    echo "  3. 访问 http://localhost:4321"
    echo ""
    
    print_info "常用命令："
    echo "  npm run dev      - 启动开发服务器"
    echo "  npm run build    - 构建生产版本"
    echo "  npm run preview  - 预览生产构建"
    echo "  npm run format   - 格式化代码"
    echo ""
    
    print_info "文档："
    echo "  README.md                    - 项目介绍"
    echo "  SETUP.md                     - 详细设置指南"
    echo "  CONTRIBUTING.md              - 贡献指南"
    echo "  DEPLOYMENT_CHECKLIST.md      - 部署检查清单"
    echo ""
    
    # 询问是否立即启动开发服务器
    read -p "是否现在启动开发服务器？(y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        print_info "启动开发服务器..."
        npm run dev
    fi
}

# 运行主函数
main
