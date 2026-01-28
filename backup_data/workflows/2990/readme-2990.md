# Generate text images from the Free DummyJSON API using the HTTP request node

> ## Who is this for?

This workflow template is ideal for marketers, designers, content creators, and developers who need to generate custom text-based images dynamically. Whether you want to create social media graphics, placeholder images, or text-based LinkedIn carousels, this workflow provides a simple, no-code solution using an API that requires no authentication.

## What problem does this workflow solve?

Creating text-based images often requires design software or complex integrations with graphic tools. This workflow eliminates that hassle by allowing users to generate images with custom text, font styles, colors, and background colors using a simple HTTP request. It’s perfect for automating image generation without relying on external tools or manual effort.

## What this workflow does

This workflow leverages an HTTP request to a free API that generates text-based images dynamically. Here's what it enables you to do:

- Define custom image text
- Set image dimensions (width x height)
- Choose a background color and text color using hex codes
- Select a font family and font size
- Specify the image format (PNG, JPG, or WebP)

The generated image can be used immediately, making it ideal for automating content creation workflows.

### Setup

1. Open the workflow in n8n.
2. Modify the Set node to define your preferred image properties:
```
- text: The message displayed on the image.
- size: Image dimensions (e.g., 500x300 pixels).
- backgroundColor: Hex color code for the background.
- textColor: Hex color code for the text.
- fontFamily: Select from available font options (e.g., Pacifico, Ubuntu).
- fontSize: Define the text size.
- type: Choose the image format (PNG, JPG, or WebP).
```

3. Execute the workflow to generate an image.
4. The HTTP request returns the generated image, ready for use.

## How to customize this workflow

- 1.     Adjust the Set node values to match your desired design.
- 2.     Use dynamic data for text, allowing personalized images based on user input.
- 3.     Automate image delivery by adding email or social media posting nodes.
- 4.     Integrate this workflow into larger automation sequences, such as content marketing pipelines.

## 📊 Basic Information

- **Workflow ID:** 2990
- **Complexity:** beginner
- **Node Count:** 3
- **Views:** 4698
- **Downloads:** 469
- **Created:** 2025/2/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2990)

## 👤 Author

- **Name:** Akram Kadri
- **Username:** @akramkadri

## 🏷️ Categories

- Content Creation

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 3 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
