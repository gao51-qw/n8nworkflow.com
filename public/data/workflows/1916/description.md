This workflow is the opposite of [this one](https://n8n.io/workflows/1621-split-out-binary-data/). It transforms multiple different items with one binary object named `data`  into a single item with multiple binary objects:

![image.png](fileId:706)

This can be useful when creating a single .zip archive for example. It uses the updated Code node instead of the older Function node.