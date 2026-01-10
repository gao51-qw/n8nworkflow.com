/**
 * 模拟工作流详情数据
 * 对应数据库中的 workflow_details 表
 */

export const mockWorkflowDetails: Record<number, any> = {
  12398: {
    workflow_id: 12398,
    disclaimer: 'This workflow is for educational purposes. Ensure you comply with the terms of service of the social media platforms you use.',
    overview: {
      description: 'This workflow automates the process of posting content to multiple social media platforms (Twitter, LinkedIn, Facebook) simultaneously. It uses a central Google Sheet to manage the content and schedule.',
      features: [
        'Multi-platform support (Twitter, LinkedIn, Facebook)',
        'Centralized content management via Google Sheets',
        'Scheduled posting',
        'Automatic image handling'
      ],
      useCases: [
        'Social media management for small businesses',
        'Content distribution for bloggers',
        'Automated marketing campaigns'
      ]
    },
    logical_blocks: [
      {
        order: 1,
        title: 'Content Retrieval',
        description: 'Fetches the latest scheduled posts from a Google Sheet.'
      },
      {
        order: 2,
        title: 'Platform Routing',
        description: 'Filters and routes content to the appropriate social media nodes.'
      },
      {
        order: 3,
        title: 'Execution & Logging',
        description: 'Executes the posts and updates the Google Sheet with the status.'
      }
    ],
    node_details: [
      {
        name: 'Google Sheets Trigger',
        type: 'googleSheetsTrigger',
        role: 'Triggers the workflow when a new row is added or updated in the sheet.',
        configDescription: 'Connected to a specific spreadsheet and worksheet.',
        connections: ['Filter'],
        edgeCases: 'Empty rows are ignored.'
      },
      {
        name: 'Filter',
        type: 'if',
        role: 'Checks if the post is scheduled for "now".',
        configDescription: 'Compares the scheduled date with the current date.',
        connections: ['Twitter Node', 'LinkedIn Node'],
        edgeCases: 'Invalid date formats will stop the workflow.'
      },
      {
        name: 'Twitter Node',
        type: 'twitter',
        role: 'Posts the content to Twitter.',
        configDescription: 'Uses Twitter API credentials.',
        connections: ['Update Sheet'],
        edgeCases: 'Exceeding character limits will cause an error.'
      }
    ]
  }
};
