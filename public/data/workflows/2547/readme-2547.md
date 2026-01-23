# Call analyzer with AssemblyAI transcription and OpenAI assistant integration

> ### Video Guide

I prepared a detailed guide that showed the whole process of building a call analyzer.

[![OPENAI 8.png](https://cflobdhpqwnoisuctsoc.supabase.co/storage/v1/object/public/my_storage/OPENAI%20(8).png)](https://www.youtube.com/watch?v=kS41gut8l0g)


### Who is this for?
This workflow is ideal for sales teams, customer support managers, and online education services that conduct follow-up calls with clients. It’s designed for those who want to leverage AI to gain deeper insights into client needs and upsell opportunities from recorded calls.

### What problem does this workflow solve?
Many follow-up sales calls lack structured analysis, making it challenging to identify client needs, gauge interest levels, or uncover upsell opportunities. This workflow enables automated call transcription and AI-driven analysis to generate actionable insights, helping teams improve sales performance, refine client communication, and streamline upselling strategies.

### What this workflow does
This workflow transcribes and analyzes sales calls using AssemblyAI, OpenAI, and Supabase to store structured data. The workflow processes recorded calls as follows:

1. **Transcribe Call with AssemblyAI**: Converts audio into text with speaker labels for clarity.
2. **Analyze Transcription with OpenAI**: Using a predefined JSON schema, OpenAI analyzes the transcription to extract metrics like client intent, interest score, upsell opportunities, and more.
3. **Store and Access Results in Supabase**: Stores both transcription and analysis data in a Supabase database for further use and display in interfaces.

### Setup

#### Preparation
1. **Create Accounts**: Set up accounts for [N8N](https://n8n.partnerlinks.io/2hr10zpkki6a), [Supabase](https://supabase.com/), [AssemblyAI](https://www.assemblyai.com/), and [OpenAI](https://openai.com/).
2. **Get Call Link**: Upload audio files to public Supabase storage or Dropbox to generate a direct link for transcription.
3. **Prepare Artifacts for OpenAI**:
    - **Define Metrics**: Identify business metrics you want to track from call analysis, such as client needs, interest score, and upsell potential.
    - **Generate JSON Schema**: Use GPT to design a JSON schema for structuring OpenAI’s responses, enabling efficient storage, analysis, and display.
    - **Create Analysis Prompt**: Write a detailed prompt for GPT to analyze calls based on your metrics and JSON schema.

#### Scenario 1: Transcribe Call with AssemblyAI
1. **Set Up Request**:
    - **Header Authentication**: Set `Authorization` with AssemblyAI API key.
    - **URL**: POST to `https://api.assemblyai.com/v2/transcript/`.
    - **Parameters**:
        - `audio_url`: Direct URL of the audio file.
        - `webhook_url`: URL for an N8N webhook to receive the transcription result.
        - **Additional Settings**:
            - `speaker_labels` (true/false): Enables speaker diarization.
            - `speakers_expected`: Specify expected number of speakers.
            - `language_code`: Set language (default: `en_us`).

#### Scenario 2: Process Transcription with OpenAI
1. **Webhook Configuration**: Set up a POST webhook to receive AssemblyAI’s transcription data.
2. **Get Transcription**:
    - **Header Authentication**: Set `Authorization` with AssemblyAI API key.
    - **URL**: GET `https://api.assemblyai.com/v2/transcript/&lt;transcript_id&gt;`.
3. **Send to OpenAI**:
    - **URL**: POST to `https://api.openai.com/v1/chat/completions`.
    - **Header Authentication**: Set `Authorization` with OpenAI API key.
    - **Body Parameters**:
        - **Model**: Use `gpt-4o-2024-08-06` for JSON Schema support, or `gpt-4o-mini` for a less costly option.
        - **Messages**:
            - `system`: Contains the main analysis prompt.
            - `user`: Combined speakers’ utterances to analyze in text format.
        - **Response Format**:
            - `type`: `json_schema`.
            - `json_schema`: JSON schema for structured responses.

4. **Save Results in Supabase**:
    - **Operation**: Create a new record.
    - **Table Name**: `demo_calls`.
    - **Fields**:
        - **Input**: Transcription text, audio URL, and transcription ID.
        - **Output**: Parsed JSON response from OpenAI’s analysis.

## 📊 Basic Information

- **Workflow ID:** 2547
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 7714
- **Downloads:** 771
- **Created:** 2024/11/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2547)

## 👤 Author

- **Name:** Mark Shcherbakov
- **Username:** @lowcodingdev

## 🏷️ Categories

- CRM
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×2)
- **stickyNote** (×12)
- **httpRequest** (×3)
- **if** 
- **supabase** 
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
