# Convert text to speech with local KOKORO TTS

> ## Disclaimer
The *Execute Command* node is only supported on *self-hosted* (local) instances of n8n.

## Introduction
![1.jpg](fileId:1114)

**KOKORO TTS** - Kokoro TTS is a compact yet powerful text-to-speech model, currently available on Hugging Face and GitHub. Despite its modest size—trained on less than 100 hours of audio—it delivers impressive results, consistently topping the TTS leaderboard on Hugging Face. Unlike larger systems, Kokoro TTS offers the advantage of running locally, even on devices without GPUs, making it accessible for a wide range of users.

**Who will benefit from this integration?**

This will be useful for video bloggers, TikTokers, and it will also enable the creation of a free voice chat bot. Currently, TTS models are mostly paid, but this integration will allow for fully free voice generation. The possibilities are limited only by your imagination.


#### Note
Unfortunately, we can't interact with the KOKORO API via browser URL (GET/POST), 
**but** we can run a Python script through n8n and pass any variables to it.

In the tutorial, the D drive is used, but you can rewrite this for any paths, including the C drive.


## Step 1 

You need to have Python installed. [link](https://github.com/PierrunoYT/Kokoro-TTS-Local)
Also, download and extract the portable version of KOKORO from GitHub.

Create a file named voicegen.py with the following code in the KOKORO folder: (C:\KOKORO). As you can see, the output path is: (D:\output.mp3).

```
import sys
import shutil
from gradio_client import Client

# Set UTF-8 encoding for stdout
sys.stdout.reconfigure(encoding='utf-8')

# Get arguments from command line
text = sys.argv[1] # First argument: input text
voice = sys.argv[2] # Second argument: voice
speed = float(sys.argv[3]) # Third argument: speed (converted to float)

print(f"Received text: {text}")
print(f"Voice: {voice}")
print(f"Speed: {speed}")

# Connect to local Gradio server
client = Client("http://localhost:7860/")

# Generate speech using the API
result = client.predict(
text=text,
voice=voice,
speed=speed,
api_name="/generate_speech"
)

# Define output path
output_path = r"D:\output.mp3"

# Move the generated file
shutil.move(result[1], output_path)

# Print output path
print(output_path)
```

## Step 2
Go to n8n and create the following workflow.
![2.jpg](fileId:1111)



## Step 3
Edit Field Module.
```
{
  "voice": "af_sarah",
  "text": "Hello world!"
}
```
![33.jpg](fileId:1110)  


## Step 4 
We’ll need an Execute Command module with the command: python 
```
C:\KOKORO\voicegen.py “{{ $json.text }}” “{{ $json.voice }}” 1
```

![44.jpg](fileId:1112)


## Step 5 
The script is already working, but to listen to it, you can connect a Binary module with the path to the generated MP3 file 
```
D:/output.mp3
```
![55.jpg](fileId:1113)


## Step 6
Click “Text workflow” and enjoy the result.

There are more voices and accents than in ChatGPT, plus it’s free.

### P.S.
If you want, there is a [detailed tutorial](https://blog.bswlife.site/2025/04/14/n8n-kokoro-tts-integration-setup/) on my blog.



## 📊 Basic Information

- **Workflow ID:** 3547
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 5783
- **Downloads:** 578
- **Created:** 2025/4/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3547)

## 👤 Author

- **Name:** bswlife
- **Username:** @bswlife

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **executeCommand** 
- **set** 
- **manualTrigger** 
- **readBinaryFiles** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
