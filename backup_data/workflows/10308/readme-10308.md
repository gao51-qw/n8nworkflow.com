# Generate AI short-form videos with Creatomate, ElevenLabs & Pexels Stock

> ## Who is this for?
- Creators, agencies, and marketers who need short-form vertical video at scale.
- Anyone who wants to turn a topic into an edited “talking shorts” style clip without opening a video editor.

## What problem does it solve?
Manually producing shorts is slow and repetitive. You have to write the script, hunt for b-roll, generate voiceover, layer music, edit timing, and export. This workflow automates that from prompt to rendered MP4 using AI, stock video, and Creatomate.

Note: this template requires a Creatomate template like the one shown below:
![Screenshot 20251030 at 3.52.41 PM.jpg](fileId:3155)

## How it works
1. You submit a topic in a simple n8n form.
2. The workflow uses an AI model to generate a YouTube Shorts style script (~100 words) with hook, body, and looping ending.
3. A second AI step turns that script into 8 visual search terms (for example “person typing at desk,” “happy team in office,” “corporate meeting”) that are likely to exist in stock footage.
4. For each term, the workflow calls the Pexels Videos API and pulls the best portrait clip. It fetches clip details and filters files under 50 MB, then keeps the largest high quality version under that limit.
5. The selected clip URLs are combined into a list that will later map to eight background layers in the Creatomate template.
6. The generated script is sent to ElevenLabs (text-to-speech) to create the voiceover audio file.
7. That audio is uploaded to Google Drive. The workflow then:
   - Randomly picks a background music track from a Drive folder.
   - Sets the Drive file sharing to “anyone with the link” so Creatomate can fetch it directly.
8. The workflow calls Creatomate’s Render API:
   - Injects the voiceover URL, the chosen music URL, and the eight stock video URLs into a predefined vertical template.
   - Also enables auto-subtitles in the template by linking the transcript to on-screen captions.
9. The workflow polls Creatomate until render status is `succeeded`.
10. When rendering is done, cleanup runs:
    - The temporary voice file in Drive is deleted.
    - Final output metadata (including the render ID and status) is passed to the last node.

Result: You get an edited 9:16 short with stock b-roll, captions, voiceover, background music, and transitions.

## Setup steps
1. n8n
   1. Import this workflow JSON into n8n.
   2. Expose the included Form Trigger to capture the `topic` input.
2. AI script + search terms
   1. Connect your AI model credentials in the `Short Text` node for script generation.
   2. Connect your AI model credentials in the `Video Search Terms` node for visual search term generation.
   3. Confirm both nodes are wired to output structured JSON to their paired Structured Output Parser nodes.
3. Stock footage
   1. Add your Pexels API key as the `Authorization` header in both `Search Videos` and `Get The Video Details`.
   2. Keep `orientation=portrait` so clips match 9:16.
4. Voiceover
   1. Add your ElevenLabs API key to the `Generate Voice` request header (`xi-api-key`).
   2. Set the voice ID in the ElevenLabs URL if you want a different voice.
5. Google Drive
   1. Connect Google Drive OAuth in `Google Drive`, `List Short Music Files`, and `Set File Permissions`.
   2. In `List Short Music Files`, point `q` and `folderId` to the folder that stores your background music tracks.
   3. Confirm `Set File Permissions` is using `role: reader`, `type: anyone` so Creatomate can fetch the audio file.
6. Creatomate render
   1. Set your Creatomate API key (`Authorization: Bearer &lt;key&gt;`) in `Create Short` and `Check Video Status`.
   2. Replace `template_id` with your own Creatomate template ID if different.
   3. Map each `Background-1` ... `Background-8` field in the JSON body to the combined clip URLs. These correspond to layers in your Creatomate template.
7. Test end to end
   1. Run the workflow with a sample topic.
   2. Confirm:
      - Script is generated.
      - At least 8 stock clips are found.
      - Voice file uploads to Drive and becomes publicly readable.
      - Creatomate render finishes with `status = succeeded`.
   3. Adjust template timing and transitions in Creatomate if visuals do not match pacing.

## Notes
- The cleanup step deletes the temporary voiceover file from Drive after render to avoid clutter.
- The workflow chooses a random music track each run to keep videos from sounding identical.
- The render loop will keep polling Creatomate until the final MP4 is ready.

## Resources
- n8n workflow basics: [n8n Docs](https://docs.n8n.io/)
- Using AI models in n8n: [n8n Docs on AI](https://docs.n8n.io/integrations/builtin/ai/)
- Anthropic model usage: [Anthropic Docs](https://docs.anthropic.com/en/docs)
- Pexels API reference: [Pexels API](https://www.pexels.com/api/)
- ElevenLabs text to speech: [ElevenLabs Docs](https://docs.elevenlabs.io/)
- Google Drive file access control: [Google Drive API](https://developers.google.com/drive/api)
- Creatomate render API: [Creatomate API](https://docs.creatomate.com/)

## 📊 Basic Information

- **Workflow ID:** 10308
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 76
- **Downloads:** 7
- **Created:** 2025/10/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10308)

## 👤 Author

- **Name:** Matty Reed
- **Username:** @mattyreed1

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **splitInBatches** 
- **code** (×5)
- **httpRequest** (×7)
- **wait** (×2)
- **stickyNote** (×6)
- **if** 
- **googleDrive** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **formTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 24 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
