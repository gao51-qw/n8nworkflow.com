# Automated AWS S3 / Azure / Google to local MinIO object backup with scheduling

> # Automated AWS S3 / Azure / Google to local MinIO Object Backup with Scheduling

## What this workflow does ?

This workflow performs automated, periodic backups of objects from an AWS S3 bucket, an Azure Container or a Google Storage Space to a MinIO S3 bucket running locally or on a dedicated container/VM/server. It can also work if the MinIO bucket is running on a remote cloud provider's infrastructure; you just need to change the URL and keys.

## Who's this intended for ?

Storage administrators, cloud architects, or DevOps who need a simple and scalable solution for retrieving data from AWS, Azure or GCP.

## How it works

This workflow uses the official AWS S3 API to list and download objects from a specific bucket, or the Azure BLOB one, then send them to MinIO using their version of the S3 API.  


## Requirements

None, just a source Bucket on your Cloud Storage Provider and a destination one on MinIO. You'll also need to get MinIO running. 

You're using Proxmox VE ? Create a MinIO LXC Container : https://community-scripts.github.io/ProxmoxVE/scripts?id=minio

## Need a Backup from another Cloud Storage Provider ?

Need automated backup from another Cloud Storage Provider ?

$\mapsto$ Check out our templates, we've done it with AWS, Azure, and GCP, and we even have a version for FTP/SFTP servers!

For a dedicated source Cloud Storage Provider, please contact us !

$\odot$ These workflow can be integrated to bigger ones and modified to best suit your needs ! You can, for example, replace the MinIO node to another S3 Bucket from another Cloud Storage Provider (Backblaze, Wasabi, Scaleway, OVH, ...)


## 📊 Basic Information

- **Workflow ID:** 7284
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 537
- **Downloads:** 53
- **Created:** 2025/8/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7284)

## 👤 Author

- **Name:** SIENNA
- **Username:** @sienna

## 🏷️ Categories

- File Management
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×6)
- **splitOut** (×3)
- **scheduleTrigger** 
- **awsS3** (×2)
- **s3** (×3)
- **azureStorage** (×2)
- **googleCloudStorage** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
