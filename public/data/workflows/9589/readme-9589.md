# Create .SRT subtitles & .LRC lyrics from audio with Whisper AI and GPT-5-nano

> ## Overview

This workflow automates the entire process of creating professional subtitle (.SRT) and synced lyrics (.LRC) files from audio recordings. Upload your vocal track, let Whisper AI transcribe it with precise timestamps, and GPT-5-nano segments it into natural, singable lyric lines. With an optional quality control step, you can manually refine the output while maintaining perfect timestamp alignment.

## Key Features

- **Whisper AI Transcription**: Word-level timestamps with multi-language support via ISO codes
- **Intelligent Segmentation**: GPT-5-nano formats transcriptions into natural lyric lines (2-8 words per line)
- **Quality Control Option**: Download, edit, and re-upload corrections with smart timestamp matching
- **Advanced Alignment**: Levenshtein distance algorithm preserves timestamps during manual edits
- **Dual Format Export**: Generate both .SRT (video subtitles) and .LRC (synced lyrics) files
- **No Storage Needed**: Files generated in-memory for instant download
- **Multi-Language**: Supports various languages through Whisper API

## Use Cases
- Generate synced lyrics for music video releases on YouTube
- Create .LRC files for Musixmatch, Apple Music, and Spotify
- Prepare professional subtitles for social media content
- Batch process subtitle files for catalog releases
- Maintain consistent lyric formatting across artists
- Streamline content delivery for streaming platforms
- Speed up video editing workflow

## Perfect For
- For Musicians & Artists
- For Record Labels
- For Content Creators

## What You'll Need

### Required Setup
- **OpenAI API Key** for Whisper transcription and GPT-5-nano segmentation

### Recommended Input
- **Format**: MP3 audio files (max 25MB)
- **Content**: Clean vocal tracks work best (isolated vocals recommended, but whole tracks works still good)
- **Languages**: Any language supported by Whisper (specify via ISO code)

## How It Works

### Automatic Mode (No Quality Check)
1. **Upload** your MP3 vocal track to the workflow
2. **Transcription**: Whisper AI processes audio with word-level timestamps
3. **Segmentation**: GPT-5-nano formats text into natural lyric lines
4. **Generation**: Workflow creates .SRT and .LRC files
5. **Download** your ready-to-use subtitle files

### Manual Quality Control Mode
1. **Upload** your MP3 vocal track and enable quality check
2. **Transcription**: Whisper AI processes audio with timestamps
3. **Initial Segmentation**: GPT-5-nano creates first draft
4. **Download** the .TXT file for review
5. **Edit** lyrics in any text editor (keep line structure intact)
6. **Re-upload** corrected .TXT file
7. **Smart Matching**: Advanced diff algorithm aligns changes with original timestamps
8. **Download** final .SRT and .LRC files with perfect timing

## Technical Details

- **Transcription API**: OpenAI Whisper (`/v1/audio/transcriptions`)
- **Segmentation Model**: GPT-5-nano with custom lyric-focused prompt
- **System Prompt**: *"You are helping with preparing song lyrics for musicians. Take the following transcription and split it into lyric-like lines. Keep lines short (2–8 words), natural for singing/rap phrasing, and do not change the wording."*
- **Timestamp Matching**: Levenshtein distance + alignment algorithm
- **File Size Limit**: 25MB (n8n platform default)
- **Processing**: All in-memory, no disk storage
- **Cost**: Based on Whisper API usage (varies with audio length)

## Output Formats

### .SRT (SubRip Subtitle)
Standard format for:
- YouTube video subtitles
- Video editing software (Premiere, DaVinci Resolve, etc.)
- Media players (VLC, etc.)

### .LRC (Lyric File)
Synced lyrics format for:
- Musixmatch
- Apple Music
- Spotify
- Music streaming services
- Audio players with lyrics display

## Pro Tips

💡 **For Best Results:**
- Use isolated vocal tracks when possible (remove instrumentals)
- Ensure clear recordings with minimal background noise
- For quality check edits, only modify text content—don't change line breaks
- Test with shorter tracks first to optimize your workflow

⚙️ **Customization Options:**
- Adjust GPT segmentation style by modifying the system prompt
- Add language detection or force specific languages in Whisper settings
- Customize output file naming conventions in final nodes
- Extend workflow with additional format exports if needed

## Workflow Components

1. **Audio Input**: Upload interface for MP3 files
2. **Whisper Transcribe**: OpenAI API call with timestamp extraction
3. **Post-Processing**: GPT-5-nano segmentation into lyric format
4. **Routing Quality Check**: Decision point for manual review
5. **Timestamp Matching**: Diff and alignment for corrected text
6. **Subtitles Preparation**: JSON formatting for both output types
7. **File Generation**: Convert to .SRT and .LRC formats
8. **Download Nodes**: Export final files

## Template Author:
Questions or need help with setup?
📧 Email:[xciklv@gmail.com](mailto:xciklv@gmail.com)
💼 LinkedIn:[https://www.linkedin.com/in/vaclavcikl/](https://www.linkedin.com/in/vaclavcikl/)

## 📊 Basic Information

- **Workflow ID:** 9589
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 498
- **Downloads:** 49
- **Created:** 2025/10/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9589)

## 👤 Author

- **Name:** Václav Čikl
- **Username:** @venca

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **httpRequest** 
- **formTrigger** 
- **code** (×3)
- **wait** 
- **if** 
- **convertToFile** (×3)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
