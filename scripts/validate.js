#!/usr/bin/env node

/**
 * N8N Workflows 项目验证脚本
 * 检查项目配置和必需文件
 */

const fs = require('fs');
const path = require('path');

// 颜色代码
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

// 打印函数
const print = {
  success: (msg) => console.log(`${colors.green}✓ ${msg}${colors.reset}`),
  error: (msg) => console.log(`${colors.red}✗ ${msg}${colors.reset}`),
  warning: (msg) => console.log(`${colors.yellow}⚠ ${msg}${colors.reset}`),
  info: (msg) => console.log(`${colors.blue}ℹ ${msg}${colors.reset}`),
  header: (msg) => {
    console.log(`\n${colors.blue}========================================${colors.reset}`);
    console.log(`${colors.blue}${msg}${colors.reset}`);
    console.log(`${colors.blue}========================================${colors.reset}\n`);
  },
};

// 验证结果
let hasErrors = false;
let hasWarnings = false;

// 检查文件是否存在
function checkFileExists(filePath, required = true) {
  const exists = fs.existsSync(filePath);
  if (exists) {
    print.success(`文件存在: ${filePath}`);
    return true;
  } else {
    if (required) {
      print.error(`缺少必需文件: ${filePath}`);
      hasErrors = true;
    } else {
      print.warning(`缺少可选文件: ${filePath}`);
      hasWarnings = true;
    }
    return false;
  }
}

// 检查目录是否存在
function checkDirectoryExists(dirPath, required = true) {
  const exists = fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory();
  if (exists) {
    print.success(`目录存在: ${dirPath}`);
    return true;
  } else {
    if (required) {
      print.error(`缺少必需目录: ${dirPath}`);
      hasErrors = true;
    } else {
      print.warning(`缺少可选目录: ${dirPath}`);
      hasWarnings = true;
    }
    return false;
  }
}

// 检查 package.json
function checkPackageJson() {
  print.info('检查 package.json...');
  
  if (!checkFileExists('package.json')) {
    return;
  }
  
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    
    // 检查必需字段
    const requiredFields = ['name', 'version', 'scripts', 'dependencies'];
    requiredFields.forEach(field => {
      if (packageJson[field]) {
        print.success(`package.json 包含 ${field}`);
      } else {
        print.error(`package.json 缺少 ${field}`);
        hasErrors = true;
      }
    });
    
    // 检查必需脚本
    const requiredScripts = ['dev', 'build', 'preview'];
    requiredScripts.forEach(script => {
      if (packageJson.scripts && packageJson.scripts[script]) {
        print.success(`脚本存在: ${script}`);
      } else {
        print.error(`缺少脚本: ${script}`);
        hasErrors = true;
      }
    });
    
    // 检查关键依赖
    const requiredDeps = ['astro', '@astrojs/tailwind', 'tailwindcss'];
    requiredDeps.forEach(dep => {
      if (packageJson.dependencies && packageJson.dependencies[dep]) {
        print.success(`依赖存在: ${dep}`);
      } else {
        print.error(`缺少依赖: ${dep}`);
        hasErrors = true;
      }
    });
    
  } catch (error) {
    print.error(`解析 package.json 失败: ${error.message}`);
    hasErrors = true;
  }
}

// 检查环境变量文件
function checkEnvFiles() {
  print.info('检查环境变量文件...');
  
  checkFileExists('.env.example', true);
  
  if (checkFileExists('.env', false)) {
    try {
      const envContent = fs.readFileSync('.env', 'utf8');
      const requiredVars = [
        'SUPABASE_URL',
        'SUPABASE_ANON_KEY',
        'PUBLIC_SITE_URL',
        'PUBLIC_SITE_NAME'
      ];
      
      requiredVars.forEach(varName => {
        if (envContent.includes(varName)) {
          // 检查是否有值
          const match = envContent.match(new RegExp(`${varName}=(.+)`));
          if (match && match[1] && match[1].trim() && !match[1].includes('your-')) {
            print.success(`环境变量已配置: ${varName}`);
          } else {
            print.warning(`环境变量需要配置: ${varName}`);
            hasWarnings = true;
          }
        } else {
          print.warning(`环境变量缺失: ${varName}`);
          hasWarnings = true;
        }
      });
    } catch (error) {
      print.error(`读取 .env 文件失败: ${error.message}`);
      hasErrors = true;
    }
  }
}

// 检查配置文件
function checkConfigFiles() {
  print.info('检查配置文件...');
  
  const configFiles = [
    { path: 'astro.config.mjs', required: true },
    { path: 'tailwind.config.js', required: true },
    { path: 'tsconfig.json', required: true },
    { path: '.gitignore', required: true },
    { path: '.prettierrc', required: false },
  ];
  
  configFiles.forEach(({ path: filePath, required }) => {
    checkFileExists(filePath, required);
  });
}

// 检查源代码目录
function checkSourceDirectories() {
  print.info('检查源代码目录...');
  
  const requiredDirs = [
    'src',
    'src/components',
    'src/layouts',
    'src/pages',
    'src/lib',
    'src/styles',
  ];
  
  requiredDirs.forEach(dir => {
    checkDirectoryExists(dir, true);
  });
  
  const optionalDirs = [
    'src/data',
    'src/scripts',
    'public',
    'public/images',
  ];
  
  optionalDirs.forEach(dir => {
    checkDirectoryExists(dir, false);
  });
}

// 检查关键文件
function checkKeyFiles() {
  print.info('检查关键文件...');
  
  const keyFiles = [
    { path: 'src/layouts/BaseLayout.astro', required: true },
    { path: 'src/layouts/MainLayout.astro', required: true },
    { path: 'src/pages/index.astro', required: true },
    { path: 'src/styles/global.css', required: true },
    { path: 'public/robots.txt', required: false },
    { path: 'public/manifest.json', required: false },
  ];
  
  keyFiles.forEach(({ path: filePath, required }) => {
    checkFileExists(filePath, required);
  });
}

// 检查文档文件
function checkDocumentation() {
  print.info('检查文档文件...');
  
  const docFiles = [
    { path: 'README.md', required: true },
    { path: 'SETUP.md', required: false },
    { path: 'CONTRIBUTING.md', required: false },
    { path: 'CHANGELOG.md', required: false },
    { path: 'LICENSE', required: false },
  ];
  
  docFiles.forEach(({ path: filePath, required }) => {
    checkFileExists(filePath, required);
  });
}

// 检查 node_modules
function checkNodeModules() {
  print.info('检查依赖安装...');
  
  if (checkDirectoryExists('node_modules', true)) {
    // 检查关键包是否安装
    const keyPackages = ['astro', 'tailwindcss', '@astrojs/tailwind'];
    keyPackages.forEach(pkg => {
      const pkgPath = path.join('node_modules', pkg);
      if (fs.existsSync(pkgPath)) {
        print.success(`包已安装: ${pkg}`);
      } else {
        print.error(`包未安装: ${pkg}`);
        hasErrors = true;
      }
    });
  }
}

// 检查 Git 配置
function checkGitConfig() {
  print.info('检查 Git 配置...');
  
  if (checkDirectoryExists('.git', false)) {
    print.success('Git 仓库已初始化');
    
    // 检查 .gitignore
    if (fs.existsSync('.gitignore')) {
      const gitignoreContent = fs.readFileSync('.gitignore', 'utf8');
      const requiredIgnores = ['node_modules', '.env', 'dist', '.astro'];
      
      requiredIgnores.forEach(pattern => {
        if (gitignoreContent.includes(pattern)) {
          print.success(`.gitignore 包含: ${pattern}`);
        } else {
          print.warning(`.gitignore 缺少: ${pattern}`);
          hasWarnings = true;
        }
      });
    }
  }
}

// 检查 TypeScript 配置
function checkTypeScriptConfig() {
  print.info('检查 TypeScript 配置...');
  
  if (!checkFileExists('tsconfig.json')) {
    return;
  }
  
  try {
    const tsconfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));
    
    if (tsconfig.compilerOptions) {
      print.success('TypeScript 编译选项已配置');
      
      // 检查关键选项
      const recommendedOptions = {
        'strict': true,
        'moduleResolution': 'bundler',
      };
      
      Object.entries(recommendedOptions).forEach(([option, value]) => {
        if (tsconfig.compilerOptions[option] !== undefined) {
          print.success(`TypeScript 选项已设置: ${option}`);
        } else {
          print.warning(`建议设置 TypeScript 选项: ${option}`);
          hasWarnings = true;
        }
      });
    }
  } catch (error) {
    print.error(`解析 tsconfig.json 失败: ${error.message}`);
    hasErrors = true;
  }
}

// 主函数
function main() {
  print.header('N8N Workflows 项目验证');
  
  // 执行所有检查
  checkPackageJson();
  console.log();
  
  checkEnvFiles();
  console.log();
  
  checkConfigFiles();
  console.log();
  
  checkSourceDirectories();
  console.log();
  
  checkKeyFiles();
  console.log();
  
  checkDocumentation();
  console.log();
  
  checkNodeModules();
  console.log();
  
  checkGitConfig();
  console.log();
  
  checkTypeScriptConfig();
  console.log();
  
  // 输出总结
  print.header('验证总结');
  
  if (hasErrors) {
    print.error('发现错误！请修复上述问题。');
    process.exit(1);
  } else if (hasWarnings) {
    print.warning('验证通过，但有一些警告。');
    print.info('建议修复警告以获得最佳体验。');
    process.exit(0);
  } else {
    print.success('所有检查通过！项目配置正确。');
    process.exit(0);
  }
}

// 运行验证
main();
