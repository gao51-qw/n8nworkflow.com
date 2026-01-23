# Narrating over a video using multimodal AI

> This n8n template takes a video and extracts frames from it which are used with a multimodal LLM to generate a script. The script is then passed to the same multimodal LLM to generate a voiceover clip.

This template was inspired by [Processing and narrating a video with GPT's visual capabilities and the TTS API](https://cookbook.openai.com/examples/gpt_with_vision_for_video_understanding)

## How it works
* Video is downloaded using the HTTP node.
* Python code node is used to extract the frames using OpenCV.
* Loop node is used o batch the frames for the LLM to generate partial scripts.
* All partial scripts are combined to form the full script which is then sent to OpenAI to generate audio from it.
* The finished voiceover clip is uploaded to Google Drive.

Sample the finished product here: [https://drive.google.com/file/d/1-XCoii0leGB2MffBMPpCZoxboVyeyeIX/view?usp=sharing](https://drive.google.com/file/d/1-XCoii0leGB2MffBMPpCZoxboVyeyeIX/view?usp=sharing)

## Requirements

* OpenAI for LLM
* Ideally, a mid-range (16GB RAM) machine for acceptable performance!

## Customising this workflow

* For larger videos, consider splitting into smaller clips for better performance
* Use a multimodal LLM which supports fully video such as Google's Gemini.


## 📊 Basic Information

- **Workflow ID:** 2467
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 9667
- **Downloads:** 966
- **Created:** 2024/10/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2467)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **code** 
- **splitOut** 
- **httpRequest** 
- **convertToFile** 
- **manualTrigger** 
- **aggregate** (×2)
- **googleDrive** 
- **stickyNote** (×7)
- **wait** 
- **splitInBatches** 
- **editImage** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.chainLlm** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
