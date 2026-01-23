# Generate and store AI images with Sora GPT, Google Drive and Sheets

> # **Automation Flow: Image to Image Using GPT Sora**

This flow automates the process of generating images using a provided prompt and reference image via the **Sora GPT Image API** from [RapidAPI](https://rapidapi.com/skdeveloper/api/sora-gpt-image). The generated images are stored in **Google Drive**, and details are logged in **Google Sheets**.

## **Nodes Overview**

### 1. **On Form Submission**
- **Type**: `n8n-nodes-base.formTrigger`
- **Description**: This node triggers when a user submits the form containing the prompt and image URL. It ensures the form fields are filled in and ready for processing.
  - **Form Fields**:
    - **Prompt**: A text description of the desired image.
    - **Image URL**: The URL of the reference image to be used.
  - **Webhook ID**: Unique identifier for form submission.

---

### 2. **HTTP Request to Sora GPT Image API**
- **Type**: `n8n-nodes-base.httpRequest`
- **Description**: Sends the prompt and image URL to the **Sora GPT Image API** to generate a new image based on the provided inputs.
  - **API Endpoint**: [Sora GPT Image API](https://sora-gpt-image.p.rapidapi.com/ai-img/img-to-img.php) (via **RapidAPI**)
  - **Method**: `POST`
  - **Body Parameters**:
    - **Prompt**: User-provided text.
    - **Image URL**: The reference image URL.
    - **Width & Height**: Image size is set to `1024x1024`.

---

### 3. **Code (Base64 Conversion)**
- **Type**: `n8n-nodes-base.code`
- **Description**: This node processes the base64-encoded image data returned from the API. It decodes and formats the image to be uploaded to Google Drive.
  - **Output**: Converts the base64 string into a binary JPEG file.

---

### 4. **Upload Image to Google Drive**
- **Type**: `n8n-nodes-base.googleDrive`
- **Description**: Uploads the generated image to **Google Drive**, storing it in a designated folder.
  - **Authentication**: Google Service Account.
  - **File Name**: The image file name is dynamically set from the previous node.

---

### 5. **Log Details to Google Sheets**
- **Type**: `n8n-nodes-base.googleSheets`
- **Description**: This node logs the **Prompt**, **Generated Image**, and **Generation Date** into a **Google Sheets** document for tracking and auditing purposes.
  - **Columns Mapped**:
    - **Prompt**: The user’s input text.
    - **Image**: The name of the generated image file.
    - **Generated Date**: Date and time of image generation.

---

## **Flow Summary**
1. **User Submits Form**: Triggered when the form with the prompt and image URL is submitted.
2. **Image Generation**: The data is sent to the **Sora GPT Image API** from [RapidAPI](https://rapidapi.com/skdeveloper/api/sora-gpt-image) to generate the image.
3. **Image Processing**: The generated image (base64 format) is decoded and saved as a file.
4. **Google Drive Upload**: The image is uploaded to **Google Drive** for storage.
5. **Google Sheets Logging**: All relevant details (Prompt, Image, Date) are saved in **Google Sheets**.

---

## **Benefits**
- **Automated Image Creation**: Quickly generate images using AI based on a simple prompt and reference image via **RapidAPI**.
- **Efficient Workflow**: The entire process from form submission to image generation and storage is automated, saving time and reducing manual work.
- **Centralized Storage**: Generated images are stored in **Google Drive**, ensuring easy access and organization.
- **Audit Trail**: The details of each generated image are logged in **Google Sheets**, making it easy to track, review, and manage past creations.
- **Scalable and Reusable**: Can be adapted to multiple use cases, such as creative design, marketing materials, or social media content generation.

---

## **Problems Solved**
- **Manual Image Editing**: Eliminates the need for manual image manipulation and creation, allowing for automatic generation based on user inputs.
- **Disorganized File Storage**: With automatic uploads to **Google Drive**, the images are stored in a centralized and organized manner.
- **Lack of Record-Keeping**: By logging image generation details in **Google Sheets**, there's always a record of past creations, improving tracking and management.
- **Time-Consuming Processes**: The automation drastically reduces the time spent on manual tasks, allowing users to focus on other aspects of their work or creative processes.

---

This flow simplifies the process of creating AI-generated images based on user inputs, leveraging the power of the **Sora GPT Image API** via [RapidAPI](https://rapidapi.com/skdeveloper/api/sora-gpt-image), making it a powerful tool for creative, design, and marketing purposes.


## 📊 Basic Information

- **Workflow ID:** 5932
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 2102
- **Downloads:** 210
- **Created:** 2025/7/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5932)

## 👤 Author

- **Name:** Sk developer 
- **Username:** @skdeveloper

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **httpRequest** 
- **googleSheets** 
- **googleDrive** 
- **code** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
