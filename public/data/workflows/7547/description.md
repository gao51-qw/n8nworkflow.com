# Automated and Periodic AWS S3 Bucket Object Integrity Audit to detect unexpected changes (by Humans, Tenants or Ransomwares)


$\mapsto$ Working with AWS S3, but could also be working with Microsoft Azure, Google Storage Plateform or any other Cloud Provider ! Interested ? Send us an email : contact@sienna.dev

## What this workflow does ?

This workflow performs automated, periodic audits of an AWS S3 bucket containing objects (files) that can be added, deleted, modified, renamed, or moved at any time by people, tenants, applications, or even ransomware, which could corrupt your resources. 

Audits are performed on a single bucket and use optical character recognition (OCR) and artificial intelligence (AI) to characterize changes that may have been made to specific files (TXT, PDF, and logs) in order to determine their sensitivity and integrity (is the file sensitive and complete/intact).


## Who's this intended for ?

Storage administrators, cloud architects, or DevOps who need a solution to audit movements on remote cloud storage spaces (such as AWS S3).

This helps prevent data loss and ensures your compliance level!

## How it works ?

Everything is explained in the workflow. It is taking a "picture" of your bucket at a given moment, and then, every X Hours/Days/Weeks, it's taking another picture. 

After that, we will compare the two photos (like a game of spot the difference) to determine which objects are present in one of the two photos (added or deleted), or present in both but modified.

The workflow will extract and download added and modified files, select those in text format (PDF, TXT, and logs), and characterize the changes that have been made to these files to ensure that their integrity level is sufficient.

You can obviously modify this workflow to only get Added or Modified Files, and change prompts (ex : tell if the file is containing specific informations, ...).

## Requirements

- An access to an AWS S3 Bucket obviously;
- A MinIO S3 Bucket running locally on the Host, or on a different VM/LXC/Container (Using PVE ? Check this : https://community-scripts.github.io/ProxmoxVE/scripts?id=minio) ;
- Permissions for your N8N Docker Container to write/read on the Host FS (using SSH Nodes with the “execute command” option) ;
- A Python Script (here : https://sienna.dev/bitnami/wordpress/wp-content/uploads/assets/fileFormatter.py) for the final AI Report Creation
- A Mistral Account for OCR and LLM with API Keys (or an OCR running locally with Ollama for example
- MongoDB running on a separate container to get all reports saved

Need help with something ? Contact us by Mail !


## Need a similar Workflow to audit Files & Objects on another Cloud Storage Provider ?

Good news, we have what you need! We can work with any cloud provider, audit files and objects on remote spaces (Backblaze, Wasabi, Scaleway, OVH, IBM, Oracle, Storadera, etc.) using custom scripts and open-source tools!

Simply contact us by email to get in touch with a cloud storage expert and find out today how you can mitigate your cloud storage issues or recover data from the cloud to an on-premises infrastructure.
