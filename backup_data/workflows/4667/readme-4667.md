# Create Smart URLs with BioURL.link's Geo, Device & Language Targeting

> **Create sophisticated shortened URLs with advanced targeting and tracking capabilities using the BioURL.link API**

## Overview
This n8n workflow provides a powerful webhook-based URL shortening service that integrates with BioURL.link's comprehensive link management platform. Transform any long URL into a smart, trackable short link with advanced targeting features through a simple HTTP POST request.

## Key Features
- **Smart URL Shortening**: Create custom short URLs with optional passwords and expiry dates
- **Geo-targeting**: Redirect users to different URLs based on their geographic location
- **Device Targeting**: Serve different content to iPhone, Android, or other device users  
- **Language Targeting**: Customize redirects based on user language preferences
- **Deep Linking**: Automatically redirect mobile users to app store or native apps
- **Custom Meta Tags**: Set custom titles, descriptions, and images for social media sharing
- **Analytics & Tracking**: Integrate tracking pixels and campaign parameters
- **Splash Pages**: Create branded landing pages before redirects

## How It Works
1. **Webhook Trigger**: Send a POST request to the `/shorten-link` endpoint
2. **API Integration**: Workflow processes the request and calls [BioURL.link's API](https://biourl.link/?utm_source=website&utm_medium=n8n&utm_campaign=workflow)
3. **Response**: Returns the shortened URL with all configured features

## Setup Requirements
- BioURL.link account and API key
- Replace `"Bearer YOURAPIKEY"` in the HTTP Request node with your actual API key
- Customize the JSON body parameters as needed for your use case

## Use Cases
- Marketing campaigns with geo-specific landing pages
- Mobile app promotion with automatic app store redirects
- A/B testing with device or language-based targeting
- Social media sharing with custom preview metadata
- Time-sensitive promotions with expiry dates
- Password-protected internal links

## Technical Details
- **Trigger**: Webhook (POST to `/shorten-link`)
- **API Endpoint**: `https://biourl.link/api/url/add`
- **Response**: Complete shortened URL data
- **Authentication**: Bearer token required

Perfect for marketers, [developers](https://biourl.link/developers), and businesses needing advanced URL management capabilities beyond basic shortening services.

## 📊 Basic Information

- **Workflow ID:** 4667
- **Complexity:** beginner
- **Node Count:** 3
- **Views:** 255
- **Downloads:** 25
- **Created:** 2025/6/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4667)

## 👤 Author

- **Name:** Naser Emad
- **Username:** @nasermetani

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **httpRequest** 
- **respondToWebhook** 
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 3 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
