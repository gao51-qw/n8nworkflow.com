## ✅ What problem does this workflow solve?

Shopify and E-Commerce store owners often struggle to create engaging 3D videos from static product images. This workflow automates that entire process—from image upload to video delivery—so store owners can get professional-looking 3D videos without any manual editing or follow-up.

![ecommerceautomation.gif](fileId:1518)

---

## ⚙️ What does this workflow do?

1. Accepts a 2D product image and name via a public n8n form.
2. Generates a unique slug and folder in Google Drive for the product.
3. Uploads the original image to Google Drive and logs data in a spreadsheet.
4. Removes the background from the image using remove.bg API.
5. Uploads the cleaned image to Google Drive and updates the spreadsheet.
6. Creates a 3D product video using the cleaned image via the Fal.ai API.
7. Periodically checks the video creation status.
8. Once completed, download the video, upload it to Google Drive, and log the link.
9. Notifies the store owner via email with the video download link.

---

## 🔧 Setup

### 🟢 Google Services
- **Google Drive**: Create and connect a folder where all product assets will be stored.
- **Google Spreadsheet**: A spreadsheet to log the product name, original image link, cleaned image link, and final video URL.
- **Gmail**: Connect Gmail to send the final notification email to the store owner.

### 🔑 API Keys Required
- **Remove.bg**: Get an API key from [remove.bg](https://www.remove.bg/api).
- **Fal.ai**: Sign up at [fal.ai](https://fal.ai/) and obtain your API key to use the image-to-video generation service.

---

## 🧠 How it Works

### 📝 1. Product Form Submission
A store owner submits the product name and 2D image via a public n8n form.

### 🗂 2. Organize in Google Drive
- A unique slug is generated for the product.
- A new folder is created inside Google Drive using that slug.
- The original image is uploaded into the folder.

### 📊 3. Record in a Spreadsheet
- The product name and original image URL are stored in a Google Sheet.

### 🧹 4. Background Removal
- The uploaded image is processed through **remove.bg API** to eliminate noisy or cluttered backgrounds.
- The cleaned image is uploaded back into the product’s Drive folder.
- The cleaned image link is updated in the spreadsheet.

### 🎥 5. Create 3D Video (via Fal.ai)
- The cleaned image is passed to the **Fal.ai** video generation API.
- The workflow periodically checks the status until the video is ready.

### ☁️ 6. Store Final Video
- Once the video is ready, the file is downloaded.
- The final video is uploaded into the same Google Drive folder.
- Its link is saved in the spreadsheet next to the respective product entry.

### 📧 7. Notify the Store Owner
An automated email is sent to the store owner with the video link, letting them know it's ready for use—no waiting, no manual follow-up needed.

---

## 👤 Who can use it?

This workflow is ideal for:
- 🛍 **Shopify Sellers**
- 🧺 **E-commerce Store Owners**
- 📸 **Product Photographers**
- 🎬 **Marketing Teams**
- 🤖 **Automation Enthusiasts**

If you want to automate 3D product video creation using AI—this is the no-code workflow you’ve been waiting for!
