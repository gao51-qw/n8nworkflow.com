# Compress binary files to zip format

> This workflow allows you to compress binary files to zip format.

![Screenshot_20210127 n8n  ▶️3.png](https://f000.backblazeb2.com/file/n8n-website-images/a88b80ff0abc46e3adfd1fc68388ddd8.png)


**HTTP Request node:** The workflow uses the HTTP Request node to fetch files from the internet. If you want to fetch files from your local machine, replace it with the **Read Binary File** or **Read Binary Files** node.

**Compression node:** The Compression node compresses the file into a zip. If you want to compress the files to gzip, then select the gzip format instead.

Based on your use-case, you may want to write the files to your disk or upload it to Google Drive or Box. If you want to write the compressed file to your disk, replace the **Dropbox node** with the **Write Binary File node**, or if you want to upload the file to a different service, use the respective node.

## 📊 Basic Information

- **Workflow ID:** 908
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 2212
- **Downloads:** 221
- **Created:** 2021/1/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/908)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **dropbox** 
- **compression** 
- **httpRequest** (×2)
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
