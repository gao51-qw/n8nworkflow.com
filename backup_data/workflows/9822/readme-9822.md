# Convert training prescriptions to Intervals.icu workouts with Claude Opus AI

> # Description

Transform training prescriptions into perfectly formatted Intervals.icu workouts using AI. This workflow automatically converts free-text workout descriptions into structured interval training sessions with proper heart rate zones, pace calculations, and exercise formatting.

## What this workflow does

1. **Collects workout details** via a web form (date, title, and workout description)
2. **Fetches athlete data** from Intervals.icu (FTP, max HR, threshold pace, LTHR)
3. **Processes with AI** using Claude Opus 4.1 to intelligently parse and format the workout
4. **Auto-detects workout type** (Run, Ride, Strength, HYROX, CrossFit, etc.)
5. **Converts training zones** - RPE → HR%, pace calculations, power zones
6. **Formats workout structure** with proper transitions, rest periods, circuit formatting
7. **Creates the workout** in Intervals.icu via API

## Use cases

- **Coaches**: Convert training plans from documents/spreadsheets into Intervals.icu format
- **Athletes**: Quickly add structured workouts from coaching apps or training programs
- **Hybrid training**: Handle complex HYROX, CrossFit, or multi-sport sessions with circuit formatting
- **Time savings**: Eliminate manual workout entry and zone calculations

## Supported workout types

Running, cycling, swimming, strength training, HYROX, CrossFit, indoor rowing, virtual training (Zwift), triathlon, and more.

## Key features

✅ Intelligent workout type detection  
✅ Automatic RPE to HR zone conversion using athlete-specific data  
✅ Proper formatting for intervals, circuits, supersets, and progressions  
✅ Adds transitions between exercises/machines  
✅ Calculates exercise durations and pacing  
✅ Handles warmup/cooldown sections  
✅ Generates unique workout IDs  

## Setup requirements

- **Intervals.icu account** with API access (API key required)
- **Anthropic API key** for Claude AI
- Athlete must have training zones configured in Intervals.icu (FTP, max HR, LTHR, threshold pace)

## Setup instructions

### Getting your Intervals.icu API key

1. Log in to [Intervals.icu](https://intervals.icu)
2. Go to **Settings** (gear icon) → **Developer Settings**
3. Click **Generate API Key** (or copy your existing key)
4. Save the API key securely

### Configuring credentials in n8n

**For Intervals.icu (HTTP Basic Auth):**
1. In n8n, open the **GetAthleteInfo** or **CreateWorkoutAPI** node
2. Click on **Credentials** → **Create New Credential**
3. Select **HTTP Basic Auth**
4. Enter:
   - **Username**: `API_KEY` (literally type "API_KEY")
   - **Password**: Your actual API key from Intervals.icu
5. Click **Save**
6. Apply this credential to both HTTP Request nodes

**For Anthropic:**
1. Open the **Anthropic Chat Model** node
2. Click on **Credentials** → **Create New Credential**
3. Enter your Anthropic API key
4. Click **Save**

**Important**: The Intervals.icu API uses HTTP Basic Authentication where the username is always the literal string "API_KEY" and the password is your actual API key.

## How it works

The workflow uses a sophisticated AI agent with a detailed system prompt that understands training terminology, zones, and Intervals.icu formatting requirements. It applies sport-specific rules to ensure workouts are properly structured for tracking during training sessions.

## 📊 Basic Information

- **Workflow ID:** 9822
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 234
- **Downloads:** 23
- **Created:** 2025/10/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9822)

## 👤 Author

- **Name:** Martijn Kerver
- **Username:** @mkc

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **set** 
- **formTrigger** 
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **code** 
- **stickyNote** (×5)
- **form** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
