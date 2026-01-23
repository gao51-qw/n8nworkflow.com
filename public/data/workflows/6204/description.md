## 📋 Description
This n8n workflow streamlines AI-powered post creation with image banners, includes manual approval steps, and publishes to LinkedIn — all dynamically.

It uses ImageKit.io to edit images, stores them on S3, and generates and revises posts through a Mistral AI Agent with human review.

## 🧠 How it Works (High-Level)
🔄 Triggered via incoming chat message

🧠 AI drafts a post and adds image instructions

🖼️ ImageKit API adds text overlay to image

☁️ Image is uploaded to S3 for public use

🧑‍⚖️ Human approval step via email

🔁 Optional revision loop

📢 Publishes approved content to LinkedIn

## 🛠️ Setup Requirements

🔑 API key for ImageKit.io

🧠 AI model via Mistral (or substitute like OpenAI)

📩 Email setup for Approval node

☁️ AWS S3 Bucket access

🔗 LinkedIn credentials for posting