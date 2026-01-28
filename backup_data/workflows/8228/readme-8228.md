# Supabase storage tutorial: Upload, fetch, sign & list files

> ## Learn Supabase Storage Fundamentals with n8n

This template demonstrates how to integrate **Supabase Storage** with **n8n** for uploading, fetching, generating temporary signed URLs, and listing files. It’s a beginner-friendly workflow that helps you understand how to connect Supabase’s storage API with n8n automation.

---

## Who it’s for
- Developers and teams new to **Supabase** who want a hands-on learning workflow.  
- Anyone looking to automate file uploads and retrieval from **Supabase Storage**.  
- Educators or technical teams teaching Supabase fundamentals with **practical demos**.  

---

## How it works
1. **Upload File** – A user uploads a file through an n8n form, which gets stored in a Supabase storage bucket.  
2. **Fetch File** – Retrieve files by providing their filename.  
3. **Temporary Access** – Generate **signed URLs** with custom expiry for secure file sharing.  
4. **List Objects** – View all stored files in the chosen Supabase bucket.  

---

## How to set up
- Create a **Supabase account** and set up a project.  
- Create a **bucket** in Supabase (e.g., `test-n8n`).  
- Get your **Project URL** and **Anon Key** from Supabase.  
- In n8n, create a **Supabase API Credential** using your keys.  
- Import this workflow and connect it with your credentials.  
- Run the forms to test file upload, retrieval, and listing.  

---

## Requirements
- A Supabase project with **storage enabled**.  
- A configured **Supabase API Credential** in n8n.  

---

## Customization
- Change the bucket name (`test-n8n`) to your own.  
- Adjust signed URL **expiry times** for temporary file access.  
- Replace Supabase with another S3-compatible storage if needed.  
- Extend the workflow with notifications (Slack, Email) after file upload.  

---

## 📝 Lessons Included
- **Lesson 1** – Upload file to Supabase storage.  
- **Lesson 2** – Fetch file from storage.  
- **Lesson 3** – Create a temporary signed document with expiry.  
- **Lesson 4** – List all items in Supabase storage.  

---

## 🔑 Prerequisites
- Supabase account + project.  
- Project URL and API Key (Anon).  
- Bucket created in Supabase.  
- Policy created to allow read/write access.  
- n8n with Supabase API credentials configured.  

## 📊 Basic Information

- **Workflow ID:** 8228
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 635
- **Downloads:** 63
- **Created:** 2025/9/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8228)

## 👤 Author

- **Name:** Alok Kumar
- **Username:** @alokkumar

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **httpRequest** (×4)
- **formTrigger** (×3)
- **manualTrigger** 
- **stickyNote** (×10)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
