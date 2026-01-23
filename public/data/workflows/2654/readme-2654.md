# Vector database as a big data analysis tool for AI agents [1/3 anomaly][1/2 KNN]

> # Vector Database as a Big Data Analysis Tool for AI Agents

Workflows from the webinar ["Build production-ready AI Agents with Qdrant and n8n"](https://www.youtube.com/watch?v=_BQTnXpuH-E).

This series of workflows shows how to build big data analysis tools for production-ready AI agents with the help of vector databases. These pipelines are adaptable to any dataset of images, hence, many production use cases.

1. **[Uploading (image) datasets to Qdrant](https://n8n.io/workflows/2654-uploading-image-datasets-to-qdrant-13-anomaly12-knn/)**
2. [Set up meta-variables for anomaly detection in Qdrant](https://n8n.io/workflows/2655-set-up-cluster-centresandthresholds-for-anomaly-detection-23-anomaly/)
3. [Anomaly detection tool](https://n8n.io/workflows/2656-anomaly-images-detection-tool-33-anomaly/)
4. [KNN classifier tool](https://n8n.io/workflows/2657-knn-images-classifier-tool-22-knn/)


### For anomaly detection
**1. This is the first pipeline to upload an image dataset to Qdrant.**
2. The second pipeline is to set up cluster (class) centres & cluster (class) threshold scores needed for anomaly detection.
3. The third is the anomaly detection tool, which takes any image as input and uses all preparatory work done with Qdrant to detect if it's an anomaly to the uploaded dataset.

### For KNN (k nearest neighbours) classification
**1. This is the first pipeline to upload an image dataset to Qdrant.**
2. The second is the KNN classifier tool, which takes any image as input and classifies it on the uploaded to Qdrant dataset.

### To recreate both
You'll have to upload [crops](https://www.kaggle.com/datasets/mdwaquarazam/agricultural-crops-image-classification) and [lands](https://www.kaggle.com/datasets/apollo2506/landuse-scene-classification) datasets from Kaggle to your own Google Storage bucket, and re-create APIs/connections to [Qdrant Cloud](https://qdrant.tech/documentation/quickstart-cloud/) (you can use [Free Tier](https://cloud.qdrant.io/login) cluster), [Voyage AI API](https://www.voyageai.com/) & Google Cloud Storage. 

## [This workflow] Batch Uploading Images Dataset to Qdrant 
This template imports dataset images from Google Could Storage, creates Voyage AI embeddings for them in batches, and uploads them to Qdrant, also in batches. In this particular template, we work with [crops dataset](https://www.kaggle.com/datasets/mdwaquarazam/agricultural-crops-image-classification). However, it's analogous to uploading [lands dataset](https://www.kaggle.com/datasets/apollo2506/landuse-scene-classification), and in general, it's adaptable to any dataset consisting of image URLs (as the following pipelines are).

* First, check for an existing Qdrant collection to use; otherwise, create it here. Additionally, when creating the collection, we'll create a [payload index](https://qdrant.tech/documentation/concepts/indexing/#payload-index), which is required for a particular type of Qdrant requests we will use later.
* Next, import all (dataset) images from Google Cloud Storage but keep only non-tomato-related ones (for anomaly detection testing).
* Create (per batch) embeddings for all imported images using the Voyage AI multimodal embeddings API.
* Finally, upload the resulting embeddings and image descriptors to Qdrant via batch upload.

## 📊 Basic Information

- **Workflow ID:** 2654
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 3737
- **Downloads:** 373
- **Created:** 2024/12/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2654)

## 👤 Author

- **Name:** Jenny 
- **Username:** @mrscoopers

## 🏷️ Categories

- Engineering
- AI RAG

## 🔗 Nodes Used

- **manualTrigger** 
- **googleCloudStorage** 
- **set** (×3)
- **httpRequest** (×5)
- **code** 
- **if** 
- **stickyNote** (×12)
- **filter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
