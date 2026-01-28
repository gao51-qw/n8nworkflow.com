# Convert GIF to MP4 with FFmpegAPI

> FFmpeg is a powerful tool for media processing. While it can be used to perform virtually any kind of media processing (such as applying filters, cropping, or merging), this workflow only demonstrates format conversion: GIF to MP4.

This workflow uses a REST API for FFmpeg. Be sure to follow the steps outlined in the notes to create a free account and get an API key.

### How to use:
Execute the workflow to bring up the form. You can select the GIF that you want to convert. Once selected, click 'Convert'. You'll get the converted MP4 URL a few seconds later. Go ahead and download that.

### How it works
Here is a high-level overview of how it works:
1. Once you select a file and click 'Convert', we upload the file to n8n and get its name.
2. The name is then used to create a file entry in FFmpegAPI and get an Upload URL and a file path.
3. The upload URL is then used to upload the binary assets from step 1.
4. Finally, the file path from step 2 is used to process the file and convert it into an MP4.
5. The download URL is returned at the last step so you can download the final file.


### Requirements
- A free API key from FFmpegAPI

### Customization

- You can change the first node (*Attach file*) to accept multiple or different file formats. Currently, it's only restricted to .gif files.
- The *Process file* node can also be changed to perform any other operation on the file. Consult the FFmpegAPI docs for more information.



## 📊 Basic Information

- **Workflow ID:** 8321
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 378
- **Downloads:** 37
- **Created:** 2025/9/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8321)

## 👤 Author

- **Name:** Matt Delaney
- **Username:** @mattd

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **httpRequest** (×3)
- **merge** 
- **formTrigger** 
- **form** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
