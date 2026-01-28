This workflow allows you to create a post a Reddit and add a comment on the post.

![workflow-screenshot](fileId:407)

**Reddit node:** This node creates a post in the subreddit `n8n`. If you want to create a post in a different subreddit, enter the name of that subreddit instead.

**Reddit1 node:** This node gets the post that we created previously. It returns the data like the post ID, title of the post, content of the post, etc.

**Reddit2 node:** This node adds a comment on the post that we created earlier.