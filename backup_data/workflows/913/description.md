This workflow takes a text file as input. It pulls the information from the text file and used it as a parameter to execute a command for each text line.

This workflow references a file */home/n8n/filelist.txt* in the *Read Binary File* node which will need to be changed to work properly. You can also edit the *Execute Command* node to modify what happens for each of these lines of text.

![workflow-screenshot](fileId:394)

**Note:** This workflow requires the Execute Command node which is only available on the on-premise version of n8n.