# 📸🍽️ Telegram Food Photo → 🤖 Gemini Vision AI → 📊 Nutrition Data → 📄 Google Sheets + 🗂️ Drive

## What this workflow does

- 📸 Snap and send a photo of your meal via Telegram
- 🧠 Gemini Vision AI analyzes the image and estimates calories, protein, carbs, and fats
- 🤖 AI Agent structures the data with meal name, description, and timestamp
- 📄 Auto-logs nutrition data to Google Sheets for tracking
- 🗂️ Saves original meal photos to Google Drive with timestamped filenames
- 💬 Sends instant Telegram reply with full nutrition breakdown

## Why it's useful

- ⚡ Track nutrition in seconds—no manual entry or food databases
- 📊 Build a complete meal history with photos and macros in one place 
- 🎯 AI estimates portion sizes and hidden ingredients (oils, sauces)
- 🏋️ Perfect for fitness tracking, meal prep, or health monitoring
- 📱 Works entirely through Telegram—no extra apps needed

## How it works

- 📲 Telegram Trigger → receives meal photo
- 🗂️ Google Drive → saves image with timestamp
- 🔎 Gemini Vision → analyzes food, estimates portions and macros
- 🤖 AI Agent → structures output (meal name, calories, protein, carbs, fats)
- 📄 Google Sheets → appends row with all nutrition data
- 💬 Telegram Reply → confirms with full breakdown

## What you'll need

- 🤖 Telegram Bot token
- 🧠 Google Gemini API key (includes Vision capabilities)
- 🔐 Google OAuth for Sheets + Drive
- 📊 Google Sheet with columns: Meal_Name, Date, Meal_description, Calories, Proteins, Carbs, Fats

## Setup steps

- 🔗 Connect credentials: Telegram, Google Gemini, Google Sheets, Google Drive
- 📄 Create Google Sheet with nutrition columns (see format above) 
- 🗂️ Create Google Drive folder for meal photos
- 🧭 Update sheet ID and Drive folder ID in workflow
- 🧪 Test: send a meal photo via Telegram and check Sheet + Drive

## Customization ideas

- 📈 Daily summary: add scheduled workflow to calculate daily totals
- 🎯 Goal tracking: set IF conditions to alert when over/under calorie targets
- 📊 Charts: connect to Data Studio/Looker for visual progress tracking
- 🏃 Fitness integration: sync with MyFitnessPal or fitness apps

## Who it's for

- 🏋️ Fitness enthusiasts tracking macros without manual logging
- 🥗 Meal preppers analyzing portion sizes and nutrition
- 💪 Athletes monitoring calorie and protein intake
- 🩺 Health-conscious individuals building meal history
- 👨‍🍳 Nutritionists collecting client food data

## Quick Setup Guide - Before You Start - What You Need:

- 🔗 Telegram Bot (create via @BotFather)
- 🧠 Google Gemini API key with Vision enabled (get it here)
- 🔐 Google account for Sheets and Drive access
- 📊 Basic spreadsheet to track your meals

## Want help customizing?
📧 anirpoke@gmail.com
🔗 LinkedIn