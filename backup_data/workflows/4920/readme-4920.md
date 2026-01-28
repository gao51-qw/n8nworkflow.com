# Upload & categorize files with Supabase Storage and secure URL generation

> # Supabase Storage File Upload Workflow

*works with selfhosted Supabase*

## ℹ️ How it works
• Accepts file data (MIME type, filename, base64 content) from other workflows
• Automatically routes files to appropriate storage buckets based on file type (images, audio, video, documents)
• Uploads files to Supabase Storage using the REST API
• Generates secure signed URLs for file access with 30-day expiration
• Returns structured success/error responses for downstream processing

## 🏗️ Set up steps
• Configure Supabase API credentials in n8n 

• Create storage buckets in your Supabase project (image-files, audio-files, video-files, document-files) (or choose your own structuring system)

• Replace url paths with your own

• Test the workflow using the included form trigger

• Remove test form and integrate with your main workflows

**📚 Reference:** [Supabase Storage Documentation](https://supabase.com/docs/guides/storage)

## 📊 Basic Information

- **Workflow ID:** 4920
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 2379
- **Downloads:** 237
- **Created:** 2025/6/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4920)

## 👤 Author

- **Name:** Jan Willem Altink
- **Username:** @jwa91

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **set** (×5)
- **convertToFile** 
- **formTrigger** 
- **stickyNote** (×5)
- **httpRequest** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
