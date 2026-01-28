## 🌦️ Intelligent Aquaculture Automation for Indonesia

Transform your fish farming operation with this cutting-edge n8n workflow that combines Indonesia's official BMKG weather data with IoT-powered feeding automation. This system intelligently reduces feed by 20% when rain probability exceeds 60%, preventing overfeeding during adverse weather conditions that could compromise water quality and fish health.

## 🚀 Key Features

**🌦️ Real-time BMKG Integration:** Fetches official Indonesian weather forecasts every 12 hours using BMKG's public API with precise ADM4 regional targeting

**🤖 Smart Decision Engine:** Advanced JavaScript algorithms analyze 6-hour and 12-hour rain probabilities to make optimal feeding decisions automatically

**📱 ESP8266 IoT Control:** Seamlessly sends HTTP webhook commands to your ESP8266/ESP32-based fish feeder hardware with JSON payloads

**💬 Rich Telegram Notifications:** Comprehensive reports including weather analysis, feeding decisions, hardware status, and next feeding schedule

**⏰ Precision Scheduling:** Automated execution at 05:30 and 16:30 WIB (Indonesian Western Time) with cron-based triggers

**📊 Activity Logging:** Complete audit trail with timestamps, weather data, and feeding decisions for operational monitoring

## 🛠️ Technical Architecture

**Core Node Components:**
- **Schedule Trigger:** Automated twice-daily execution
- **HTTP Request:** BMKG API integration with timeout handling  
- **Code (JavaScript):** Weather parsing and feeding ratio calculations
- **IF Condition:** Intelligent branching based on configurable rain thresholds
- **Telegram:** Formatted notifications with markdown support
- **Set Variables:** Secure credential management with placeholder tokens

## 📋 Prerequisites

✅ **n8n Instance:** Self-hosted or cloud deployment  
✅ **Telegram Bot:** Create via @BotFather for notifications  
✅ **ESP8266/ESP32:** Hardware with servo motor for automated feeding  
✅ **Arduino Skills:** Basic programming knowledge for hardware setup  
✅ **Indonesian Location:** Uses BMKG API with ADM4 regional codes  

## ⚙️ Configuration Requirements

**📍 Location Settings:** Update latitude, longitude, and BMKG ADM4 code in the Config node  
**🤖 Telegram Bot:** Configure bot token and chat ID in credentials  
**🔗 ESP8266 Webhook:** Set your device's IP address for hardware communication  
**📊 Feeding Parameters:** Customize rain threshold (default: 60%) and feed reduction (default: -20%)

## 🎯 Perfect For

**🏭 Commercial Aquaculture:** Large-scale fish farming operations requiring weather-aware feeding
**🏠 Hobbyist Enthusiasts:** Home aquarium and pond automation projects  
**🌱 Smart Agriculture:** Integration with comprehensive farm management ecosystems
**🔧 IoT Learning:** Educational platform for weather-based automation development
**🌍 Environmental Research:** Combining meteorological data with livestock care protocols

## 📊 Rich Output Examples

The workflow generates detailed Telegram reports featuring:
- **Current Weather Analysis:** 6-hour and 12-hour rain probability breakdowns
- **Feeding Decision Logic:** Clear rationale for feed adjustments with percentages
- **Hardware Confirmation:** ESP8266 response status and command execution verification  
- **Schedule Preview:** Next automated feeding time with countdown
- **Historical Logs:** Comprehensive activity tracking for pattern analysis

## 🔧 Hardware Integration Guide

Designed for ESP8266-based feeders accepting HTTP POST commands. The workflow transmits structured JSON containing:
```json
{
  "command": "FEED_REDUCE_20",
  "feed_ratio": -20,
  "rain_prob": 75,
  "timestamp": "2024-09-18T10:30:00Z",
  "location": "Main Pond"
}
```

## 🌍 Regional Adaptation

**Indonesia-Optimized:** Built specifically for BMKG's official weather API with ADM4 regional precision
**Global Compatibility:** Easily adaptable for international weather services by modifying HTTP requests and parsing logic
**Scalable Architecture:** Supports multiple pond locations with separate ADM4 configurations

## 🔒 Security & Credentials

- All API keys use `{{PLACEHOLDER}}` format for secure credential management
- No hardcoded sensitive information in workflow nodes
- Telegram bot tokens managed through n8n's credential system
- ESP8266 webhooks support local network security

## 📈 Performance Benefits

- **20% Feed Optimization:** Automatic reduction during high rain probability periods
- **Water Quality Protection:** Prevents overfeeding that degrades aquatic environment  
- **Cost Efficiency:** Reduces feed waste while maintaining fish health
- **24/7 Monitoring:** Continuous weather analysis without manual intervention
- **Scalable Operations:** Supports multiple feeding locations from single workflow

---