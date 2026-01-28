This workflow automates the **backup** of your **n8n workflows** data to Google Drive every day. 

It ensures that important configurations and execution logs are securely stored, reducing the risk of data loss and improving workflow resilience.


## 🔹 Why Use This?
✅ Automates routine backups effortlessly.
✅ Reduces manual intervention and potential data loss.
✅ Securely stores critical workflow configurations in Google Drive.

With this workflow, you can focus on innovation while n8n takes care of your backups. 🔐✨


## 🚀 How It Works
This workflow operates seamlessly with a combination of scheduled triggers, JSON data transformation, and secure cloud storage.

🛠 Setup Steps
	1.	**Trigger the backup** – Choose between manual execution or automated scheduling at 1:30 AM daily.
	2.	**Data preparation** – Your workflow parameters define the backup location and organize files effectively.
	3.	**Transformation & Encoding** – The data is processed and converted into a JSON file in base64 format.
	4.	**Cloud Storage** – The backup is securely uploaded to your designated Google Drive folder.



## 🔧 Customization Options
You can modify various aspects of the backup workflow to better suit your needs:

1️⃣ Adjusting **Backup Frequency**

By default, the workflow runs daily at 1:30 AM. To change this:

Open the Trigger Node in n8n.

Modify the Cron Expression or select a different frequency (e.g., hourly, weekly, or custom intervals).

2️⃣ Selecting **Specific Workflows** to Backup

Instead of backing up all workflows, you can filter which ones to include:

Add a Filter Node before exporting data.

Define specific workflow IDs or names to include in the backup.

3️⃣ Changing the Backup **Destination**

The default destination is Google Drive, but you can change this:

Replace the Google Drive Node with a different storage provider (e.g., Dropbox, AWS S3, or local storage via FTP/SFTP).

Configure authentication for the new destination.

4️⃣ Modifying Data Format

By default, the workflow stores data in JSON format. If you need a different format:

Convert JSON to CSV using the Spreadsheet File Node.

Store backups in a compressed format (ZIP) by adding a Compression Node.

5️⃣ **Encrypting** the Backup for Extra Security

For added protection:

Use the Crypto Node to encrypt the JSON file before uploading.

Set up an Access-Controlled Folder in Google Drive with limited permissions.



## ✅ Verify That Your Backup Works

Before relying on this workflow for your automated backups, make sure it works correctly by performing a quick test:
	1.	Manually trigger the workflow in n8n and check if the backup file appears in your Google Drive.
	2.	Open Google Drive, navigate to the backup folder, and download the JSON file.
	3.	Verify its content by checking if the data matches your workflow’s execution logs.
	4.	Try to import the JSON file back into n8n using the “Import File” function to ensure the workflow structure is intact.
	5.	Alternatively, copy and paste a test file into Google Drive and confirm that it appears correctly in your workflow logs.

This quick test will confirm that your backup is running smoothly and that your data is retrievable whenever needed.

## 📁 How to Find Your Google Drive Directory ID
To ensure that the backup is uploaded to the correct folder, you need to retrieve your Google Drive Directory ID. Follow these simple steps:

1. Open Google Drive.
2. Navigate to the folder where you want to store your backups.
3. Click on the folder and check the URL in your browser.
4. The Directory ID is the long string of characters at the end of the URL after /folders/.

**Example:** 📌 If your folder URL is:

https://drive.google.com/drive/folders/14oUlH_LW_NT0Xb2woZWvuzRncV-bhla
Then, your Directory ID is:

14oUlH_LW_NT0Xb2woZWvuzRncV-bhla
Copy this Directory ID and use it in the workflow's parameters to ensure the backup is saved in the correct location.


.

---
[Phil | Inforeole](https://inforeole.fr) | [Linkedin](https://www.linkedin.com/in/philippe-eveilleau-inforeole/)

🇫🇷 Contactez nous pour automatiser vos processus