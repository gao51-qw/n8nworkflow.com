@echo off
REM N8N Workflows 项目设置脚本 (Windows)
REM 此脚本将自动设置开发环境

setlocal enabledelayedexpansion

REM 设置颜色代码
set "GREEN=[92m"
set "RED=[91m"
set "YELLOW=[93m"
set "BLUE=[94m"
set "NC=[0m"

echo.
echo ========================================
echo N8N Workflows 项目设置
echo ========================================
echo.

REM 步骤 1: 检查 Node.js
echo %BLUE%步骤 1/5: 检查 Node.js...%NC%
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo %RED%× 未找到 Node.js%NC%
    echo %RED%请安装 Node.js 18 或更高版本%NC%
    echo 访问: https://nodejs.org/
    pause
    exit /b 1
)

REM 获取 Node.js 版本
for /f "tokens=1 delims=v" %%i in ('node -v') do set NODE_VERSION=%%i
for /f "tokens=1 delims=." %%i in ("%NODE_VERSION:~1%") do set NODE_MAJOR=%%i

if %NODE_MAJOR% lss 18 (
    echo %RED%× Node.js 版本过低%NC%
    echo 当前版本: %NODE_VERSION%
    echo 需要版本: >= 18.0.0
    pause
    exit /b 1
)

echo %GREEN%√ Node.js 版本: %NODE_VERSION%%NC%

REM 步骤 2: 检查 npm
echo %BLUE%步骤 2/5: 检查 npm...%NC%
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo %RED%× 未找到 npm%NC%
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('npm -v') do set NPM_VERSION=%%i
echo %GREEN%√ npm 版本: %NPM_VERSION%%NC%

REM 步骤 3: 安装依赖
echo %BLUE%步骤 3/5: 安装项目依赖...%NC%
call npm install
if %errorlevel% neq 0 (
    echo %RED%× 依赖安装失败%NC%
    pause
    exit /b 1
)
echo %GREEN%√ 依赖安装成功%NC%

REM 步骤 4: 设置环境变量
echo %BLUE%步骤 4/5: 设置环境变量...%NC%
if not exist .env (
    if exist .env.example (
        copy .env.example .env >nul
        echo %GREEN%√ 已创建 .env 文件%NC%
        echo %YELLOW%⚠ 请编辑 .env 文件并填入实际的配置值%NC%
    ) else (
        echo %YELLOW%⚠ .env.example 文件不存在，跳过环境变量设置%NC%
    )
) else (
    echo %YELLOW%⚠ .env 文件已存在，跳过创建%NC%
)

REM 步骤 5: 验证项目
echo %BLUE%步骤 5/5: 验证项目配置...%NC%
if exist scripts\validate.js (
    call node scripts\validate.js
    if %errorlevel% neq 0 (
        echo %YELLOW%⚠ 项目验证发现一些问题，请检查上面的输出%NC%
    ) else (
        echo %GREEN%√ 项目验证通过%NC%
    )
) else (
    echo %YELLOW%⚠ 验证脚本不存在，跳过验证%NC%
)

REM 完成
echo.
echo ========================================
echo 设置完成！
echo ========================================
echo.
echo %GREEN%项目已成功设置！%NC%
echo.
echo %BLUE%下一步操作：%NC%
echo   1. 编辑 .env 文件，填入必要的配置
echo   2. 运行 'npm run dev' 启动开发服务器
echo   3. 访问 http://localhost:4321
echo.
echo %BLUE%常用命令：%NC%
echo   npm run dev      - 启动开发服务器
echo   npm run build    - 构建生产版本
echo   npm run preview  - 预览生产构建
echo   npm run format   - 格式化代码
echo.
echo %BLUE%文档：%NC%
echo   README.md                    - 项目介绍
echo   SETUP.md                     - 详细设置指南
echo   CONTRIBUTING.md              - 贡献指南
echo   DEPLOYMENT_CHECKLIST.md      - 部署检查清单
echo.

REM 询问是否立即启动开发服务器
set /p START_DEV="是否现在启动开发服务器？(y/n): "
if /i "%START_DEV%"=="y" (
    echo.
    echo %BLUE%启动开发服务器...%NC%
    call npm run dev
) else (
    echo.
    echo 设置完成！运行 'npm run dev' 启动开发服务器。
    pause
)

endlocal
