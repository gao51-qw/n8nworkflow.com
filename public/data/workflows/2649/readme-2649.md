# Prompt-based object detection with Gemini 2.0

> This n8n template demonstrates how to get started with Gemini 2.0's new Bounding Box detection capabilities in your workflows.

The key difference being this enables prompt-based object detection for images which is pretty powerful for things like contextual search over an image. eg. "Put a bounding box around all adults with children in this image" or "Put a bounding box around cars parked out of bounds of a parking space".

## How it works
* An image is downloaded via the HTTP node and an "Edit Image" node is used to extract the file's width and height.
* The image is then given to the Gemini 2.0 API to parse and return coordinates of the bounding box of the requested subjects. In this demo, we've asked for the AI to identify all bunnies.
* The coordinates are then rescaled with the original image's width and height to correctl align them.
* Finally to measure the accuracy of the object detection, we use the "Edit Image" node to draw the bounding boxes onto the original image.

## How to use
* Really up to the imagination! Perhaps a form of grounding for evidence based workflows or a higher form of image search can be built.

## Requirements
* Google Gemini for LLM

## Customising the workflow
* This template is just a demonstration of an experimental version of Gemini 2.0. It is recommended to wait for Gemini 2.0 to come out of this stage before using in production.

## 📊 Basic Information

- **Workflow ID:** 2649
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 3103
- **Downloads:** 310
- **Created:** 2024/12/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2649)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Engineering
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **httpRequest** (×2)
- **code** 
- **editImage** (×2)
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
