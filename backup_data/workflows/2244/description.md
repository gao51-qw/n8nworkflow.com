**🎉 Do you want to master AI automation, so you can save time and build cool stuff?** 

I’ve created a welcoming Skool community for non-technical yet resourceful learners.

**👉🏻 [Join the AI Atelier](https://www.skool.com/the-ai-atelier-3311/about) 👈🏻**

---

This workflow exposes an API endpoint that lets you dynamically replace an image in Google Slides, perfect for automating deck presentations like updating backgrounds or client logos.

**[📺 Youtube Overview 📺 ](https://www.youtube.com/watch?v=3kM7lKorWkQ)**

## Here's how to get started:

### Step 1: Set Up a Key Identifier in Google Slides
Add a unique key identifier to the images you want to replace.
1. Click on the image.
2. Go to **Format Options** and then **Alt Text**.
3. Enter your unique identifier, like `client_logo` or `background`.

### Step 2: Use a POST Request to Update the Image
Send a POST request to the workflow endpoint with the following parameters in the body:
- `presentation_id`: The ID of your Google Slides presentation.
You can find it in the URL of your Google presentation: `https://docs.google.com/presentation/d/&lt;this-part&gt;/edit`)
- `image_key`: The unique identifier you created.
- `image_url`: The URL of the new image.

That's it! The specified image in your Google Slides presentation will be replaced with the new one from the provided URL.

This workflow is designed to be flexible, allowing you to use the same identifier across multiple slides and presentations. I hope it streamlines your slide automation process!

Example Curl Request to execute: 
```
curl --location 'https://workflow.url' \
--form 'presentation_id="google-presentation-id"' \
--form 'image_key="background"' \
--form 'image_url="https://picsum.photos/536/354"'
`````
Happy automating!
The n8Ninja 🥷