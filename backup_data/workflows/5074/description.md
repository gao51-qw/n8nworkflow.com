
A complete, ready-to-deploy Telegram chatbot template for food delivery businesses. This intelligent assistant handles orders, payments, customer service, and order tracking with human-in-the-loop payment verification.
✨ Key Features

## 🤖 AI-Powered Conversations - Natural language order processing using Google Gemini
📱 Telegram Integration - Seamless customer interaction via Telegram
💳 Payment Verification - Screenshot-based payment confirmation with admin approval
📊 Order Tracking - Automatic Google Sheets logging of all orders
🧠 Memory Management - Contextual conversation memory for better customer experience
🌍 Multi-Currency Support - Easily customizable for any currency (USD, EUR, GBP, etc.)
📍 Location Flexible - Adaptable to any city/country
🔄 Human Oversight - Manual payment approval workflow for security

## 🛠️ What This Template Includes
Core Workflow

Customer Interaction - AI assistant takes orders via Telegram
Order Confirmation - Summarizes order with total and payment details
Information Collection - Gathers customer name, phone, and delivery address
Payment Processing - Handles payment screenshots and verification
Admin Approval - Human verification of payments before order confirmation
Order Tracking - Automatic logging to Google Sheets with delivery estimates

## Technical Components

AI Agent Node - Google Gemini-powered conversation handler
Memory System - Maintains conversation context per customer
Google Sheets Integration - Automatic order logging and tracking
Telegram Nodes - Customer and admin communication
Payment Verification - Screenshot detection and approval workflow
Conditional Logic - Smart routing based on message types

## 🚀 Quick Setup Guide
Prerequisites

n8n instance (cloud or self-hosted)
Telegram Bot Token
Google Sheets API access
Google Gemini API key

## Step 1: Replace Placeholders
Search and replace the following placeholders throughout the template:
Business Information

[YOUR_BUSINESS_NAME] → Your restaurant/food business name
[ASSISTANT_NAME] → Your bot's name (e.g., "Alex", "Bella", "Chef Bot")
[YOUR_CITY] → Your city
[YOUR_COUNTRY] → Your country
[YOUR_ADDRESS] → Your business address
[YOUR_PHONE] → Your business phone number
[YOUR_EMAIL] → Your business email
[YOUR_HOURS] → Your operating hours (e.g., "9AM - 11PM daily")

Currency & Localization

[YOUR_CURRENCY] → Your currency name (e.g., "USD", "EUR", "GBP")
[CURRENCY_SYMBOL] → Your currency symbol (e.g., "$", "€", "£")
[YOUR_TIMEZONE] → Your timezone (e.g., "EST", "PST", "GMT")
[PREFIX] → Order ID prefix (e.g., "FB" for "Food Business")

Menu Items (Customize Completely)

[CATEGORY_1] → Food category (e.g., "Burgers", "Pizza", "Sandwiches")
[ITEM_1] through [ITEM_8] → Your menu items
[PRICE_1] through [DELIVERY_FEE] → Your prices
Add or remove categories and items as needed

Payment & Support

[YOUR_PAYMENT_DETAILS] → Your payment information
[YOUR_PAYMENT_PROVIDER] → Your payment method (e.g., "Venmo", "PayPal", "Bank Transfer")
[YOUR_SUPPORT_HANDLE] → Your Telegram support username

## Step 2: Configure Credentials

Telegram Bot - Add your bot token to Telegram credentials
Google Sheets - Connect your Google account and create/select your orders spreadsheet
Google Gemini - Add your Gemini API key
Sheet ID - Replace [YOUR_GOOGLE_SHEET_ID] with your actual Google Sheet ID

## Step 3: Customize Menu
Update the menu section in the AI Agent system message with your actual:

Food categories
Item names and prices
Delivery fees
Any special offerings or combos

## Step 4: Test & Deploy

Import the template into your n8n instance
Test the conversation flow with a test Telegram account
Verify Google Sheets logging works correctly
Test the payment approval workflow
Activate the workflow

💰 Currency Examples
USD Version
🍔 MENU & PRICES (USD)
Burgers
- Classic Burger – $12.99
- Cheese Burger – $14.99
- Deluxe Burger – $18.99

Delivery Fee – $3.99
EUR Version
🍔 MENU & PRICES (EUR)
Burgers
- Classic Burger – €11.50
- Cheese Burger – €13.50
- Deluxe Burger – €17.50

Delivery Fee – €3.50
📊 Google Sheets Structure
The template automatically logs orders with these columns:

Order ID
Customer Name
Chat ID
Phone Number
Delivery Address
Order Info
Total Price
Payment Status
Order Status
Timestamp

🔧 Customization Options
Easy Customizations

Menu Items - Add/remove/modify any food items
Pricing - Update to your local pricing structure
Currency - Change to any currency worldwide
Business Hours - Modify operating hours
Delivery Areas - Add location restrictions
Payment Methods - Update payment information# Header 1