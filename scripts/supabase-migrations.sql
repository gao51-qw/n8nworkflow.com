/**
 * Supabase 数据库迁移脚本
 * 版本: 1.0
 * 用途: 为网站改版P0阶段创建新表结构
 * 
 * 运行说明:
 * 1. 连接到 Supabase PostgreSQL 数据库
 * 2. 在 SQL 编辑器中执行此脚本
 * 3. 创建完成后验证所有表和索引
 */

-- ============================================================================
-- 1. 工作流详情表 (workflow_details)
-- ============================================================================
-- 存储结构化的工作流详情内容，包括概览、逻辑块和节点分析
-- 与 workflows 表一对一关系

CREATE TABLE IF NOT EXISTS workflow_details (
  id SERIAL PRIMARY KEY,
  workflow_id INT NOT NULL UNIQUE REFERENCES workflows(id) ON DELETE CASCADE,
  
  -- 免责声明
  disclaimer TEXT,
  
  -- 工作流概览
  overview JSONB DEFAULT NULL,
  -- 结构: {
  --   title: string,
  --   workflowName: string,
  --   description: string,
  --   features?: string[],
  --   useCases?: string[]
  -- }
  
  -- 逻辑块列表
  logical_blocks JSONB[] DEFAULT NULL,
  -- 结构: [{
  --   id: string,
  --   order: number,
  --   title: string,
  --   description: string,
  --   blockType?: 'trigger' | 'action' | 'condition'
  -- }, ...]
  
  -- 节点详细信息
  node_details JSONB[] DEFAULT NULL,
  -- 结构: [{
  --   name: string,
  --   type: string,
  --   role: string,
  --   config?: object,
  --   connections?: string[],
  --   edgeCases?: string[],
  --   configDescription?: string,
  --   failureHandling?: string
  -- }, ...]
  
  -- 元数据
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  -- 审核信息
  is_reviewed BOOLEAN DEFAULT false,
  review_notes TEXT
);

CREATE INDEX IF NOT EXISTS idx_workflow_details_workflow_id 
ON workflow_details(workflow_id);

CREATE INDEX IF NOT EXISTS idx_workflow_details_created_at 
ON workflow_details(created_at DESC);

-- ============================================================================
-- 2. Newsletter 订阅表 (newsletter_subscriptions)
-- ============================================================================
-- 管理邮件订阅用户，支持分类偏好和订阅频率

CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  
  -- 订阅频率 (daily, weekly, monthly)
  subscription_frequency VARCHAR(50) DEFAULT 'weekly',
  
  -- 分类偏好 (多选)
  category_interests TEXT[] DEFAULT '{}',
  
  -- 订阅状态
  is_active BOOLEAN DEFAULT true,
  confirmed_at TIMESTAMP,
  unsubscribed_at TIMESTAMP,
  
  -- 元数据
  subscription_source VARCHAR(100), -- 'homepage', 'widget', 'sidebar', 'email'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_email_sent_at TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_email 
ON newsletter_subscriptions(email UNIQUE);

CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_is_active 
ON newsletter_subscriptions(is_active);

CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_created_at 
ON newsletter_subscriptions(created_at DESC);

-- ============================================================================
-- 3. 工作流提交表 (workflow_submissions)
-- ============================================================================
-- 存储用户提交的新工作流，用于审核流程

CREATE TABLE IF NOT EXISTS workflow_submissions (
  id SERIAL PRIMARY KEY,
  
  -- 工作流信息
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  categories TEXT[] DEFAULT '{}',
  complexity_level VARCHAR(50), -- 'beginner', 'intermediate', 'advanced'
  
  -- 提交者信息
  submitter_email VARCHAR(255) NOT NULL,
  submitter_name VARCHAR(255),
  
  -- 工作流定义
  workflow_json JSONB,
  
  -- 审核状态 (pending, approved, rejected, published)
  status VARCHAR(50) DEFAULT 'pending',
  
  -- 时间戳
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  reviewed_at TIMESTAMP,
  
  -- 审核者信息
  reviewer_email VARCHAR(255),
  reviewer_notes TEXT,
  
  -- 合规检查
  has_disclaimer BOOLEAN DEFAULT false,
  has_documentation BOOLEAN DEFAULT false,
  spam_score FLOAT DEFAULT 0.0
);

CREATE INDEX IF NOT EXISTS idx_workflow_submissions_status 
ON workflow_submissions(status);

CREATE INDEX IF NOT EXISTS idx_workflow_submissions_submitted_at 
ON workflow_submissions(submitted_at DESC);

CREATE INDEX IF NOT EXISTS idx_workflow_submissions_submitter_email 
ON workflow_submissions(submitter_email);

-- ============================================================================
-- 4. 工作流评论/评分表 (workflow_reviews)
-- ============================================================================
-- 存储用户对工作流的评分和评论

CREATE TABLE IF NOT EXISTS workflow_reviews (
  id SERIAL PRIMARY KEY,
  workflow_id INT NOT NULL REFERENCES workflows(id) ON DELETE CASCADE,
  
  -- 评分 (1-5)
  rating INT CHECK (rating >= 1 AND rating >= 5),
  comment TEXT,
  
  -- 有用性计数
  helpful_count INT DEFAULT 0,
  unhelpful_count INT DEFAULT 0,
  
  -- 评论者信息
  reviewer_id INT REFERENCES authors(id) ON DELETE SET NULL,
  reviewer_name VARCHAR(255),
  reviewer_email VARCHAR(255),
  
  -- 时间戳
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_workflow_reviews_workflow_id 
ON workflow_reviews(workflow_id);

CREATE INDEX IF NOT EXISTS idx_workflow_reviews_rating 
ON workflow_reviews(rating DESC);

CREATE INDEX IF NOT EXISTS idx_workflow_reviews_created_at 
ON workflow_reviews(created_at DESC);

-- ============================================================================
-- 5. 性能优化视图
-- ============================================================================

-- 工作流热度排行视图
CREATE OR REPLACE VIEW workflow_rankings AS
SELECT
  w.id,
  w.title,
  w.slug,
  COUNT(DISTINCT wr.id) as review_count,
  COALESCE(AVG(wr.rating), 0) as avg_rating,
  w.downloads as downloads_count,
  w.visitors as views_count,
  ROW_NUMBER() OVER (ORDER BY w.visitors DESC) as view_rank,
  ROW_NUMBER() OVER (ORDER BY COUNT(DISTINCT wr.id) DESC) as review_rank
FROM workflows w
LEFT JOIN workflow_reviews wr ON w.id = wr.workflow_id
GROUP BY w.id, w.title, w.slug, w.downloads, w.visitors;

-- ============================================================================
-- 6. 数据库触发器和函数
-- ============================================================================

-- 自动更新 updated_at 时间戳
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ language 'plpgsql';

-- 为关键表添加 updated_at 触发器
CREATE TRIGGER update_newsletter_subscriptions_updated_at 
  BEFORE UPDATE ON newsletter_subscriptions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_workflow_reviews_updated_at 
  BEFORE UPDATE ON workflow_reviews
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- 7. 权限配置 (RLS - Row Level Security)
-- ============================================================================

-- 启用 RLS (如果使用 Supabase 身份认证)
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE workflow_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE workflow_reviews ENABLE ROW LEVEL SECURITY;

-- 允许匿名用户创建订阅
CREATE POLICY "Enable insert for anonymous users" ON newsletter_subscriptions
  FOR INSERT WITH CHECK (true);

-- 允许用户查看自己的订阅
CREATE POLICY "Enable read for own subscriptions" ON newsletter_subscriptions
  FOR SELECT USING (true);

-- 允许用户更新自己的订阅
CREATE POLICY "Enable update for own subscriptions" ON newsletter_subscriptions
  FOR UPDATE USING (true);

-- 允许所有用户提交工作流
CREATE POLICY "Enable insert for workflow submissions" ON workflow_submissions
  FOR INSERT WITH CHECK (true);

-- 允许所有用户查看公开提交
CREATE POLICY "Enable read public submissions" ON workflow_submissions
  FOR SELECT USING (status = 'published' OR status = 'approved');

-- 允许所有用户创建评论
CREATE POLICY "Enable insert for reviews" ON workflow_reviews
  FOR INSERT WITH CHECK (true);

-- 允许所有用户查看评论
CREATE POLICY "Enable read reviews" ON workflow_reviews
  FOR SELECT USING (true);

-- ============================================================================
-- 8. 批量操作注释
-- ============================================================================

/*
-- 添加演示数据（可选）:

-- 插入演示工作流详情
INSERT INTO workflow_details (workflow_id, disclaimer, overview, created_at)
VALUES (
  1,
  'This workflow requires n8n Pro or v1.0+',
  '{
    "title": "Advanced Email Automation",
    "workflowName": "Email Automation with AI Analysis",
    "description": "自动化处理邮件并使用AI进行分析",
    "features": ["Auto-reply", "AI Analysis", "Draft Review"],
    "useCases": ["Customer Support", "Email Triage"]
  }'::jsonb,
  CURRENT_TIMESTAMP
);

-- 插入演示 Newsletter 订阅
INSERT INTO newsletter_subscriptions (email, subscription_frequency, category_interests)
VALUES ('user@example.com', 'weekly', '{"ai", "automation"}');

-- 查询热度排行
SELECT * FROM workflow_rankings ORDER BY view_rank LIMIT 10;
*/

-- ============================================================================
-- 批注: 迁移完成检查清单
-- ============================================================================
-- [ ] 所有表已创建
-- [ ] 所有索引已建立
-- [ ] 所有视图已创建
-- [ ] 触发器已设置
-- [ ] RLS 策略已配置
-- [ ] 备份已完成
-- [ ] 测试查询已验证
