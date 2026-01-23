# 🌤️ Daily Weather Forecast Bot

A comprehensive n8n workflow that fetches detailed weather forecasts from OpenWeatherMap and sends beautifully formatted daily summaries to Telegram.

## 📋 Features

- **📊 Daily Overview**: Complete temperature range, rainfall totals, and wind conditions
- **⏰ Hourly Forecast**: Weather predictions at key times (9AM, 12PM, 3PM, 6PM, 9PM)
- **🌡️ Smart Emojis**: Context-aware weather icons and temperature indicators
- **💡 Smart Recommendations**: Contextual advice (umbrella alerts, clothing suggestions, sun protection)
- **🌪️ Enhanced Details**: Feels-like temperature, humidity levels, wind speed, UV warnings
- **📱 Rich Formatting**: HTML-formatted messages with emojis for excellent readability
- **🕐 Timezone-Aware**: Proper handling of Luxembourg timezone (CET/CEST)

## 🛠️ What This Workflow Does

1. **Triggers daily at 7:50 AM** to send morning weather updates
2. **Fetches 5-day forecast** from OpenWeatherMap API with 3-hour intervals
3. **Processes and analyzes** weather data with smart algorithms
4. **Formats comprehensive report** with HTML styling and emojis
5. **Sends to Telegram** with professional formatting and actionable insights

## ⚙️ Setup Instructions

### 1. OpenWeatherMap API
- Sign up at [OpenWeatherMap](https://openweathermap.org/api)
- Get your free API key (1000 calls/day included)
- Replace `API_KEY` in the HTTP Request node URL

### 2. Telegram Bot
- Message [@BotFather](https://t.me/BotFather) on Telegram
- Send `/newbot` command and follow instructions
- Copy the bot token to n8n credentials
- Get your chat ID by messaging the bot, then visiting:
- https://api.telegram.org/bot&lt;YOUR_BOT_TOKEN&gt;/getUpdates
- Update the `chatId` parameter in the Telegram node

### 3. Location Configuration
- Default location: Strassen, Luxembourg
- To change: modify `q=Strassen` in the HTTP Request URL
- Format: `q=CityName,CountryCode` (e.g., `q=Paris,FR`)

## 🎯 Technical Details

- **API Source**: OpenWeatherMap 5-day forecast
- **Schedule**: Daily at 7:50 AM (configurable)
- **Format**: HTML with rich emoji formatting
- **Error Handling**: 3 retry attempts with 5-second delays
- **Rate Limits**: Uses only 1 API call per day
- **Timezone**: Europe/Luxembourg (handles CET/CEST automatically)

## 📊 Weather Data Analyzed

- Temperature ranges and "feels like" temperatures
- Precipitation forecasts and accumulation
- Wind speed and conditions
- Humidity levels and comfort indicators
- Cloud coverage and visibility
- UV index recommendations
- Time-specific weather patterns

## 💡 Smart Features

- **Conditional Recommendations**: Only shows relevant advice
- **Night/Day Awareness**: Different emojis for time of day
- **Temperature Context**: Color-coded temperature indicators
- **Weather Severity**: Appropriate icons for weather intensity
- **Humidity Comfort**: Comfort level indicators
- **Wind Analysis**: Descriptive wind condition text

## 🔧 Customization Options

- **Schedule**: Modify trigger time in the Schedule node
- **Location**: Change city in HTTP Request URL
- **Forecast Hours**: Adjust `desiredHours` array in the code
- **Temperature Thresholds**: Modify emoji temperature ranges
- **Recommendation Logic**: Customize advice triggers

## 📱 Sample Output
🌤️ Weather Forecast for Strassen, LU
📅 Monday, 2 June 2025
📊 Daily Overview
🌡️ Range: 12°C - 22°C
💧 Comfortable (65%)
⏰ Hourly Forecast
🕒 09:00 ☀️ 15°C
🕒 12:00 🌤️ 20°C
🕒 15:00 ☀️ 22°C (feels 24°C)
🕒 18:00 ⛅ 19°C
🕒 21:00 🌙 16°C
📡 Data from OpenWeatherMap | Updated: 07:50 CET

## 🚀 Getting Started

1. Import this workflow to your n8n instance
2. Add your OpenWeatherMap API key
3. Set up Telegram bot credentials
4. Test manually first
5. Activate for daily automated runs

## 📋 Requirements

- n8n instance (cloud or self-hosted)
- Free OpenWeatherMap API account
- Telegram bot token
- Basic understanding of n8n workflows

---

**Perfect for**: Daily weather updates, team notifications, personal weather tracking, smart home automation triggers.