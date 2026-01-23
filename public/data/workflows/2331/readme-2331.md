# Build your own image search using AI object detection, CDN and ElasticSearch

> This n8n workflow demonstrates how to automate indexing of images to build a object-based image search.

By utilising a Detr-Resnet-50 Object Classification model, we can identify objects within an image and store these associations in Elasticsearch along with a reference to the image.

## How it works

* An image is imported into the workflow via HTTP request node.
* The image is then sent to Cloudflare's Worker AI API where the service runs the image through the Detr-Resnet-50 object classification model.
* The API returns the object associations with their positions in the image, labels and confidence score of the classification.
* Confidence scores of less the 0.9 are discarded for brevity.
* The image's URL and its associations are then index in an ElasticSearch server ready for searching.

## Requirements
* A Cloudflare account with Workers AI enabled to access the object classification model.
* An ElasticSearch instance to store the image url and related associations.

## Extending this workflow
Further enrich your indexed data with additional attributes or metrics relevant to your users.

Use a vectorstore to provide similarity search over the images.

## 📊 Basic Information

- **Workflow ID:** 2331
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 8258
- **Downloads:** 825
- **Created:** 2024/7/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2331)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×4)
- **splitOut** 
- **filter** 
- **editImage** 
- **set** 
- **elasticsearch** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
