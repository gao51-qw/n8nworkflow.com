This workflow allows you to trigger a build in Travis CI when code changes are pushed to a GitHub repo or a pull request gets opened.

![workflow-screenshot](fileId:514)

**GitHub Trigger node:** This node will trigger the workflow when changes are pushed or when a pull request is created, updated, or deleted.

**IF node:** This node checks for the action type. We want to trigger a build when code changes are pushed or when a pull request is opened. We don't want to build the project when a PR is closed or updated.

**TravisCI node:** This node will trigger the build in Travis CI. If you're using CircleCI in your pipeline, replace the node with the CircleCI node.

**NoOp node:** Adding this node is optional.