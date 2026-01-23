# Generate AI videos from text with HeyGen and voice cloning.

> # 🎥 AI Video Generator with HeyGen

### 🚀 Create AI-Powered Videos in n8n with HeyGen  

This workflow enables you to generate **realistic AI videos** using [HeyGen](https://www.heygen.com), an advanced AI platform for video automation. Simply input your **text**, choose an **AI avatar** and **voice**, and let HeyGen generate a high-quality video for you – all within n8n!  

✅ **Ideal for:**  
- Content creators & marketers 🏆  
- Automating personalized video messages 📩  
- AI-powered video tutorials & training materials 🎓  

---

## 🔧 How It Works  
1️⃣ **Provide a text script** – This will be spoken in the AI-generated video.  
2️⃣ **Select an Avatar & Voice** – Choose from a variety of AI-generated avatars and voices.  
3️⃣ **Run the workflow** – HeyGen processes your request and generates a video.  
4️⃣ **Download your video** – Get the direct link to your AI-powered video!  

---

## ⚡ Setup Instructions

### 1️⃣ Get Your HeyGen API Key  
- Sign up for a **[HeyGen account](https://www.heygen.com)**.  
- Go to your account settings and retrieve your **API Key**.  

### 2️⃣ Configure n8n Credentials  
- In n8n, create new credentials and select **"Custom Auth"** as the authentication type.
- In the Name provide : `X-Api-Key`
- And in the value paste your API key from Heygen
- Update the 2 http node with the right credentials.

### 3️⃣ Select an AI Avatar & Voice  
- Browse available avatars & voices in your HeyGen account.  
- Copy the **Avatar ID** and **Voice ID** for your video.  

### 4️⃣ Run the Workflow  
- Enter your **text, avatar ID, and voice ID**.  
- Execute the workflow – your video will be generated automatically!  

---

## 🎯 Why Use This Workflow?  
✔️ **Fully Automated** – No manual editing required!  
✔️ **Realistic AI Avatars** – Choose from a variety of digital avatars.  
✔️ **Seamless Integration** – Works directly within your n8n workflow.  
✔️ **Scalable & Fast** – Generate multiple videos in minutes.  

🔗 **Start automating AI-powered video creation today with n8n & HeyGen!**  


## 📊 Basic Information

- **Workflow ID:** 3054
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 19185
- **Downloads:** 1918
- **Created:** 2025/3/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3054)

## 👤 Author

- **Name:** Emmanuel Bernard - n8n Expert Lausanne
- **Username:** @n8ninja

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **wait** 
- **set** (×2)
- **stickyNote** (×3)
- **if** 
- **httpRequest** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
