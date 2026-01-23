### 🧑‍💼 Who is this for?

This workflow is for **anyone with two YouTube channels** who wants to **copy playlists from one to the other** — no technical skills required.

Whether you're a content creator, hobbyist, educator, or just someone managing multiple channels, this workflow helps you **save time** and avoid the manual work of recreating playlists video by video.

### 🧠 What problem is this workflow solving?

YouTube doesn't provide an option to transfer or duplicate playlists between accounts or channels. That means if you want the same playlists in two places, you're stuck:

* Creating new playlists manually
* Searching for each video again
* Copy-pasting links one by one

This workflow automates the entire process for you — **accurately, quickly, and with no manual work**.

### ⚙️ What this workflow does

* Retrieves **all playlists** from a source YouTube channel (excluding private ones)
* For each playlist:

  * Gets all its videos
  * Filters out private or unavailable videos
  * Creates a new playlist in the **target channel** with the same title
  * Adds the videos to the new playlist
* Continues smoothly even if some videos fail to copy (e.g., if they’re restricted or deleted)

### 🛠️ Setup

1. **Create two YouTube OAuth2 credentials** in n8n:

   * One for your **source channel**
   * One for your **target channel**

2. **Assign the credentials** to the correct nodes as indicated in the sticky notes:

   * Source nodes → source credentials
   * Target nodes → target credentials

3. **Click “Test workflow”** to run it.

&gt; ⚠️ Note: If you have many playlists or videos, you may hit YouTube’s API quota. You can request a quota increase in your Google Cloud Console if needed.

### 🧩 How to customize this workflow to your needs

* ✂️ **Copy only specific playlists**
  Use a `Filter` node after the playlist fetch to include only certain titles or IDs.

* 📝 **Change the title of the copied playlists**
  Modify the title in the `Create playlist` node (e.g., add “(Copy)” or a prefix).

* 🔄 **Automate it regularly**
  Replace the `Manual Trigger` with a `Cron` node if you want to run this periodically.

* 🧪 **Test safely**
  If you're unsure, use a secondary channel as your test target before applying changes to your main account.