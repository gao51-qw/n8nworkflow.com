# 图片资源说明

本目录包含网站所需的各种图片资源。

## 需要的图片文件

### 1. 工作流占位图
- **文件名**: `placeholder-workflow.webp`
- **尺寸**: 1280x720 (16:9)
- **格式**: WebP
- **用途**: 当工作流缩略图加载失败或不存在时显示
- **建议**: 使用 n8n 品牌色的简单图形设计

### 2. Open Graph 图片
- **文件名**: `og-image.png`
- **尺寸**: 1200x630
- **格式**: PNG
- **用途**: 社交媒体分享时显示的预览图
- **建议**: 包含网站 Logo 和标语

### 3. PWA 图标
需要以下尺寸的 PNG 图标：
- `icon-72x72.png`
- `icon-96x96.png`
- `icon-128x128.png`
- `icon-144x144.png`
- `icon-152x152.png`
- `icon-192x192.png`
- `icon-384x384.png`
- `icon-512x512.png`

**格式**: PNG  
**用途**: PWA 应用图标  
**建议**: 使用 n8n 或网站 Logo，确保在小尺寸下清晰可见

### 4. 快捷方式图标
- `icon-popular.png` (96x96)
- `icon-recent.png` (96x96)
- `icon-categories.png` (96x96)

**用途**: PWA 快捷方式图标

### 5. 截图
- `screenshot-desktop.png` (1280x720)
- `screenshot-mobile.png` (750x1334)

**用途**: PWA 应用商店截图

### 6. Logo
- `logo.svg`

**格式**: SVG  
**用途**: 网站 Logo，用于导航栏和页脚

## 图片优化建议

### WebP 格式
使用 WebP 格式可以减少 25-35% 的文件大小，同时保持相同的视觉质量。

**转换工具**:
- [Squoosh](https://squoosh.app/)
- [ImageMagick](https://imagemagick.org/)
- [cwebp](https://developers.google.com/speed/webp/docs/cwebp)

**命令行示例**:
```bash
# 使用 cwebp 转换
cwebp -q 80 input.png -o output.webp

# 使用 ImageMagick
convert input.png -quality 80 output.webp
```

### PNG 优化
对于 PNG 图标，使用以下工具优化：
- [TinyPNG](https://tinypng.com/)
- [OptiPNG](http://optipng.sourceforge.net/)
- [PNGQuant](https://pngquant.org/)

### SVG 优化
对于 SVG 文件，使用 [SVGO](https://github.com/svg/svgo) 优化：
```bash
svgo input.svg -o output.svg
```

## 生成图标的工具

### 在线工具
- [Favicon Generator](https://realfavicongenerator.net/)
- [PWA Asset Generator](https://www.pwabuilder.com/)
- [App Icon Generator](https://appicon.co/)

### 命令行工具
```bash
# 使用 ImageMagick 批量生成不同尺寸
for size in 72 96 128 144 152 192 384 512; do
  convert logo.png -resize ${size}x${size} icon-${size}x${size}.png
done
```

## 临时占位图

在开发阶段，可以使用以下方法生成临时占位图：

### 1. 使用 SVG 占位图
已提供 `placeholder-workflow.svg`，可以转换为 WebP：
```bash
convert placeholder-workflow.svg placeholder-workflow.webp
```

### 2. 使用在线服务
- [Placeholder.com](https://placeholder.com/)
- [Lorem Picsum](https://picsum.photos/)
- [Unsplash Source](https://source.unsplash.com/)

### 3. 使用纯色图片
```bash
# 生成纯色占位图
convert -size 1280x720 xc:#FF5E4D placeholder-workflow.png
```

## 注意事项

1. **版权**: 确保所有图片都有适当的使用权限
2. **优化**: 所有图片都应该经过优化以减少文件大小
3. **命名**: 使用描述性的文件名，使用小写和连字符
4. **格式**: 优先使用 WebP，备用 PNG/JPG
5. **尺寸**: 确保图片尺寸符合要求
6. **Alt 文本**: 在使用图片时始终提供 alt 文本

## 当前状态

- [ ] placeholder-workflow.webp
- [ ] og-image.png
- [ ] icon-72x72.png
- [ ] icon-96x96.png
- [ ] icon-128x128.png
- [ ] icon-144x144.png
- [ ] icon-152x152.png
- [ ] icon-192x192.png
- [ ] icon-384x384.png
- [ ] icon-512x512.png
- [ ] icon-popular.png
- [ ] icon-recent.png
- [ ] icon-categories.png
- [ ] screenshot-desktop.png
- [ ] screenshot-mobile.png
- [ ] logo.svg
