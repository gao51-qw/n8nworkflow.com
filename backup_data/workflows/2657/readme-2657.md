# Vector database as a big data analysis tool for AI agents [2/2 KNN]

> # Vector Database as a Big Data Analysis Tool for AI Agents

Workflows from the webinar ["Build production-ready AI Agents with Qdrant and n8n"](https://www.youtube.com/watch?v=_BQTnXpuH-E).

This series of workflows shows how to build big data analysis tools for production-ready AI agents with the help of vector databases. These pipelines are adaptable to any dataset of images, hence, many production use cases.

1. [Uploading (image) datasets to Qdrant](https://n8n.io/workflows/2654-uploading-image-datasets-to-qdrant-13-anomaly12-knn/)
2. [Set up meta-variables for anomaly detection in Qdrant](https://n8n.io/workflows/2655-set-up-cluster-centresandthresholds-for-anomaly-detection-23-anomaly/)
3. [Anomaly detection tool](https://n8n.io/workflows/2656-anomaly-images-detection-tool-33-anomaly/)
4. **[KNN classifier tool](https://n8n.io/workflows/2657-knn-images-classifier-tool-22-knn/)**

### For anomaly detection
1. The first pipeline to upload an image dataset to Qdrant.
2. The second pipeline is to set up cluster (class) centres & cluster (class) threshold scores needed for anomaly detection.
3. The third is the anomaly detection tool, which takes any image as input and uses all preparatory work done with Qdrant to detect if it's an anomaly to the uploaded dataset.

### For KNN (k nearest neighbours) classification
1. The first pipeline to upload an image dataset to Qdrant.
2. **This pipeline is the KNN classifier tool, which takes any image as input and classifies it on the uploaded to Qdrant dataset.**

### To recreate both
You'll have to upload [crops](https://www.kaggle.com/datasets/mdwaquarazam/agricultural-crops-image-classification) and [lands](https://www.kaggle.com/datasets/apollo2506/landuse-scene-classification) datasets from Kaggle to your own Google Storage bucket, and re-create APIs/connections to [Qdrant Cloud](https://qdrant.tech/documentation/quickstart-cloud/) (you can use [Free Tier](https://cloud.qdrant.io/login) cluster), [Voyage AI API](https://www.voyageai.com/) & Google Cloud Storage.

## [This workflow] KNN classification tool
This tool takes any image URL, and as output, it returns a class of the object on the image based on the image uploaded to the Qdrant dataset (lands).

* An image URL is received via the *Execute Workflow Trigger*, which is then sent to the Voyage AI Multimodal Embeddings API to fetch its embedding.
* The image's embedding vector is then used to query Qdrant, returning a set of X similar images with pre-labeled classes.
* Majority voting is done for classes of neighbouring images.
* A loop is used to resolve scenarios where there is a tie in Majority Voting, and we increase the number of neighbours to retrieve.
* When the loop finally resolves, the identified class is returned to the calling workflow.


## 📊 Basic Information

- **Workflow ID:** 2657
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 1682
- **Downloads:** 168
- **Created:** 2024/12/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2657)

## 👤 Author

- **Name:** Jenny 
- **Username:** @mrscoopers

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **httpRequest** (×2)
- **code** 
- **set** (×5)
- **if** 
- **stickyNote** (×8)
- **executeWorkflowTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
