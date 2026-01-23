# Daily News Digest Video Generator for YouTube Shorts

## Instalations Instructions

[Youtube Instalation Instructions](https://youtu.be/hfc4BRIh3ZU)

## Overview

This workflow automatically creates and publishes daily news digest videos from WordPress articles to YouTube. It runs every evening at 7 PM, compiling the day's top stories from a news portal into a professionally formatted vertical video (1080x1920px) optimized for social media platforms like YouTube Shorts.

---

## What It Does

### 1. **🕐 Scheduled Trigger**
- Runs automatically every day at **19:00 (7 PM)**

### 2. **📰 Fetches Today's Articles**
- Retrieves all published WordPress posts from the current day

### 3. **✅ Validates Content**
- Ensures there are **at least 3 articles** before proceeding

### 4. **🎬 Video Detection**
- Scans article content HTML for embedded videos
- Extracts MP4 URLs from WordPress video players
- Parses `wp-playlist-script` JSON data
- Falls back to `<video>` and `&lt;source&gt;` tag detection

### 5. **🧹 Data Processing**
- **Extracts** article titles, links, and featured media IDs
- **Decodes HTML entities**: Converts `&#8211;` to `–`, `&quot;` to `"`, etc.
- **Fetches featured images** from WordPress Media API
- **Assigns default images** for articles without featured media
- **Calculates reading time** per article (3-7 seconds based on word count)
- **Cleans text**: Removes HTML tags and normalizes whitespace

### 6. **🎥 Video Generation** (via Shotstack API)

#### Intro Slide (3 seconds)
- Black background
- Large logo (centered)
- Title on center
- Current date in DD-MM-YYYY format

#### News Slides (3-7 seconds each)
Each article is displayed with:
- **Background**: Video (if available) or featured image, cropped to fit
- **Dark overlay**: 40% opacity black layer for text readability
- **Article headline**: Large white text at top
- **Small logo**: Top-right corner
- **Pagination counter**: Bottom-right white badge (e.g., "1 / 22")
- **CTA button**: Centered CTA
- **Background music**: Subtle looped audio track
- **Transitions**: Smooth fade in/out between slides

#### Outro Slide (3 seconds)
- Identical to intro slide
- Provides clean ending to the video

### 7. **⏳ Processing Wait**
- Waits **30 seconds** for Shotstack to render the video
- Polls Shotstack API to verify video completion

### 8. **📥 Download Video**
- Retrieves the finished MP4 file from Shotstack
- Downloads video data for YouTube upload

### 9. **📤 YouTube Upload**
Automatically uploads to YouTube with:
- **Title**: `"Daily Digest - [Day] [Weekday], [Year]"`
- **Description**: Same as title
- **Category**: News & Politics
- **Made for kids**: Yes
- **Tags**: `dailydigest`

---

## ✨ Key Features

### Intelligent Content Handling
- ✅ Automatic video/image detection and intelligent media selection
- ✅ Dynamic reading time calculation for optimal viewer engagement
- ✅ HTML entity cleaning for proper text display (WordPress compatibility)
- ✅ Fallback default images for articles without media
- ✅ Video background support with automatic muting

### Professional Video Production
- ✅ Vertical format optimized for mobile viewing (1080x1920px)
- ✅ Professional branding with logos and consistent styling
- ✅ Smooth fade transitions between slides
- ✅ Background music with looping support
- ✅ Dynamic pagination counters
- ✅ Call-to-action buttons for engagement

### Customization
- ✅ Centralized variables for easy branding updates
- ✅ Configurable logos, colors, and text
- ✅ Adjustable reading time calculation
- ✅ Flexible date formatting
- ✅ Customizable audio track

## 🎯 Use Cases

Perfect for:
- 📰 **News websites** wanting to repurpose daily articles
- 📱 **Media outlets** creating social media content
- 🎥 **Content creators** automating video production
- 🔄 **Publishers** maximizing content distribution
- 📊 **Marketing teams** driving traffic from social platforms

---

## 🔧 Customization Options

### Easy Changes
- Update logos by changing `logo_big` and `logo_small` URLs
- Modify branding colors via `button_bg_color` variable
- Adjust button text with `button_text` variable
- Change video title with `daily_digest_text` variable
- Update background music by replacing audio URL

### Advanced Customization
- Adjust reading time formula in `calculateReadingTime()` function
- Modify date format in `getRomanianDate()` function
- Change video dimensions (currently 1080x1920)
- Update font family and sizes
- Adjust overlay opacity and colors
- Modify transition effects

---

## 📋 Prerequisites

### Required Credentials
1. **WordPress API** - Access your WordPress site
2. **Shotstack API** - API key for video rendering (Stage environment)
3. **YouTube OAuth2** - Authenticated YouTube account for uploads



