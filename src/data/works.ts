import aiCodeGenImage from '../assets/AICodeGenPhoto.png'
import photoMentorImage from '../assets/PhotoMentor.png'
import travelMemoryImage from '../assets/TravelMemory.png'

export interface WorkChallenge {
  title: string
  solution: string
}

export interface WorkProject {
  id: number
  slug: string
  title: string
  description: string
  role: string
  tags: string[]
  image: string
  github: string
  highlights: string[]
  background: string
  responsibilities: string[]
  features: string[]
  architecture: string[]
  challenges: WorkChallenge[]
  outcomes: string[]
  nextSteps: string[]
}

export const works: WorkProject[] = [
  {
    id: 1,
    slug: 'ai-project-generator',
    title: 'AI 项目生成器',
    description: '面向 AI 应用从需求到代码生成的工程化平台，核心围绕多阶段 AI 工作流编排与稳定性治理。',
    role: '独立开发 / 后端与 AI 工作流主导',
    tags: ['Spring Boot 3', 'LangChain4j', 'LangGraph4j', 'Redis', 'Redisson'],
    image: aiCodeGenImage,
    github: 'https://github.com/Resky0/AI-assisted-code-generation-platform',
    highlights: [
      '使用 LangChain4j 与 LangGraph4j 组织生成链路，拆分需求理解、代码生成、结果校验等阶段',
      '引入多级缓存、分布式限流、异步处理与护轨重试，提升高并发场景下的可用性',
      '沉淀 Spring Boot 3 + Redis + Redisson 的后端工程实践，可作为 AI 应用平台脚手架'
    ],
    background: '传统代码生成工具更偏模板填充，难以理解自然语言需求并完成多阶段推理。这个项目尝试把大模型能力接入真实后端流程，让需求分析、代码生成和结果校验形成可治理的 AI 工作流。',
    responsibilities: [
      '设计后端业务流程与 AI 工作流分层，拆分需求理解、生成、校验和失败处理链路',
      '实现 Redis 缓存、Redisson 分布式限流、异步任务与异常兜底策略',
      '整理项目脚手架结构和接口契约，保证生成流程可扩展、可观测、可维护'
    ],
    features: [
      '自然语言需求输入与 AI 分析',
      '多阶段代码生成与结果校验',
      '缓存命中、限流保护与重试兜底',
      '生成记录管理与结果追踪'
    ],
    architecture: [
      '前端交互层：Vue 页面承载需求输入与结果展示',
      '业务服务层：Spring Boot 3 负责接口、任务状态和业务编排',
      'AI 编排层：LangChain4j + LangGraph4j 组织多阶段生成流程',
      '稳定性层：Redis / Redisson 提供缓存、限流和分布式协同能力'
    ],
    challenges: [
      {
        title: 'AI 生成结果不稳定',
        solution: '将生成流程拆成多个阶段，并加入结果校验、护轨重试和失败兜底，降低单次大模型输出波动对系统的影响。'
      },
      {
        title: '高频 AI 调用带来资源压力',
        solution: '引入多级缓存和分布式限流，优先复用可缓存结果，并限制异常流量对后端和模型服务的冲击。'
      },
      {
        title: 'AI 工作流难维护',
        solution: '用图式工作流拆分节点职责，让需求分析、代码生成、校验等阶段有清晰边界，便于后续扩展。'
      }
    ],
    outcomes: [
      '完成从需求输入到 AI 生成结果的闭环流程',
      '沉淀 AI 应用工程化中的缓存、限流、异步与重试实践',
      '验证 LangChain4j / LangGraph4j 在 Java 后端 AI 工作流中的落地方式'
    ],
    nextSteps: [
      '加入更细粒度的生成质量评分',
      '扩展项目模板和技术栈选择',
      '补充在线预览、生成代码差异对比与权限体系'
    ]
  },
  {
    id: 2,
    slug: 'travel-memory',
    title: '旅游回忆册',
    description: '企业级图片素材与协同图库平台，围绕图片上传、空间管理、权限控制和实时协作构建完整业务闭环。',
    role: '独立开发 / 图片平台与协同能力实现',
    tags: ['Spring Boot', 'Redis', 'WebSocket', 'AI', 'COS'],
    image: travelMemoryImage,
    github: 'https://github.com/Resky0/picture',
    highlights: [
      '支持公共、私有与团队空间，覆盖个人素材管理和多人协同图库两类场景',
      '接入 COS 对象存储与 Redis 缓存，优化图片资源管理、访问速度和系统扩展性',
      '结合 AI 与 WebSocket 能力，增强素材处理体验和团队协同反馈效率'
    ],
    background: '图片素材平台不仅是上传和浏览，还需要处理空间权限、团队协作、资源存储和实时反馈。该项目围绕图库业务构建完整链路，兼顾个人使用和团队协同场景。',
    responsibilities: [
      '设计公共图库、私有图库和团队图库的空间模型与权限边界',
      '接入 COS 对象存储并结合 Redis 优化资源访问与热点数据读取',
      '实现 WebSocket 协同反馈能力，提升多人操作时的实时体验'
    ],
    features: [
      '图片上传、检索、分类和素材管理',
      '公共空间、私有空间与团队协同空间',
      '对象存储接入与缓存优化',
      '团队协作状态同步和实时反馈'
    ],
    architecture: [
      '接口层：Spring Boot 提供图库、空间和用户相关接口',
      '存储层：COS 承载图片资源，数据库保存元数据与权限关系',
      '缓存层：Redis 优化热点数据、访问状态和业务查询',
      '协同层：WebSocket 支持团队图库中的实时反馈'
    ],
    challenges: [
      {
        title: '不同空间的权限边界复杂',
        solution: '将公共、私有、团队空间抽象成清晰的空间模型，并在接口层统一校验用户访问权限。'
      },
      {
        title: '图片资源访问链路长',
        solution: '用 COS 承载文件本体，数据库保存业务元数据，Redis 缓存热点信息，降低重复查询成本。'
      },
      {
        title: '团队协同需要实时反馈',
        solution: '通过 WebSocket 推送协同状态，让团队空间的操作变化能被及时感知。'
      }
    ],
    outcomes: [
      '完成图片素材平台从存储、权限到协同的核心业务闭环',
      '强化对象存储、缓存和实时通信在业务系统中的组合实践',
      '形成可扩展的图库空间模型，便于继续接入 AI 标注、审核和推荐能力'
    ],
    nextSteps: [
      '补充图片 AI 标签和智能搜索',
      '增加团队成员权限分级与操作审计',
      '优化大批量图片上传和压缩处理流程'
    ]
  },
  {
    id: 3,
    slug: 'photomentor',
    title: 'PhotoMentor',
    description: 'AI 摄影辅助平台，面向摄影学习与作品改进场景，提供照片理解、评分反馈和拍摄建议。',
    role: '独立开发 / 多模态 AI 能力接入',
    tags: ['Spring Boot 3', 'Spring AI', 'Vue3'],
    image: photoMentorImage,
    github: 'https://github.com/Resky0/PictureMentor',
    highlights: [
      '集成通义千问多模态模型，实现照片智能评分、问题诊断与改进建议生成',
      '前后端采用 Vue 3 + Spring Boot 3 分层实现，兼顾交互体验与服务端扩展',
      '面向多端设备适配实时拍摄指导流程，让 AI 建议更贴近实际拍摄场景'
    ],
    background: '摄影学习需要即时、具体、可执行的反馈。PhotoMentor 通过多模态模型理解照片内容，并将构图、光线、主体等维度转化为可读建议，帮助用户快速改进拍摄结果。',
    responsibilities: [
      '接入 Spring AI 与通义千问多模态模型，设计照片评分与建议生成流程',
      '实现前端上传、结果展示和多端适配交互',
      '整理提示词结构与返回结果格式，让 AI 反馈更稳定、更便于展示'
    ],
    features: [
      '照片上传与多模态识别',
      '构图、光线、主体等维度评分',
      '改进建议生成与拍摄指导',
      '适配移动端的实时拍摄辅助流程'
    ],
    architecture: [
      '前端层：Vue 3 提供照片上传、评分结果和建议展示',
      '后端层：Spring Boot 3 负责接口、文件处理和业务编排',
      'AI 层：Spring AI 接入多模态模型并管理提示词调用',
      '数据层：MySQL 保存用户、记录和分析结果'
    ],
    challenges: [
      {
        title: '多模态模型反馈容易泛化',
        solution: '通过结构化提示词约束评分维度，让模型围绕构图、光线、主体、色彩等具体方面输出建议。'
      },
      {
        title: 'AI 结果需要适合前端展示',
        solution: '将返回内容设计成评分、问题、建议三段式结构，降低页面解析和用户阅读成本。'
      },
      {
        title: '移动端使用场景更复杂',
        solution: '围绕照片上传和实时指导优化页面布局，让核心操作在手机端也能快速完成。'
      }
    ],
    outcomes: [
      '完成多模态模型从上传图片到生成摄影建议的应用闭环',
      '积累 Spring AI 接入、提示词结构化和 AI 结果展示经验',
      '验证 AI 在摄影学习、内容创作和作品点评场景中的产品化价值'
    ],
    nextSteps: [
      '增加历史作品对比和成长曲线',
      '支持更细分的摄影主题和风格建议',
      '接入实时相机预览与拍摄前构图提醒'
    ]
  }
]

export const getWorkBySlug = (slug: string) => {
  return works.find((work) => work.slug === slug)
}
