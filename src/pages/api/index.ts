// 此文件用于配置和初始化 Google API 的连接

// 从环境变量中读取 Google API 密钥
export const apiKey = import.meta.env.GOOGLE_API_KEY;

// 设置默认的模型名称，确保这是 Google API 支持的模型
export const defaultModel = 'gemini-pro';

// 定义一个数组，列出所有支持的模型
export const supportedModels = [
  'gemini-pro',
  // 你可以在这里添加更多 Google 支持的模型
];

// 读取环境变量中的密码（如果你的应用需要）
export const password = process.env.PASSWORD || '';

// 如果你的应用涉及到 Discord 集成，保留这些配置
export const discordServerId = process.env.DISCORD_SERVER_ID || '';
export const discordChannelId = process.env.DISCORD_CHANNEL_ID || '';
export const discordToken = process.env.DISCORD_TOKEN || '';
export const discordImageProxy = (
  process.env.DISCORD_IMAGE_PROXY || ''
).replace(/^https?:\/\//i, '');

// 应用的运行时配置和地区限制
export const config = {
  runtime: 'edge',
  regions: [
    'arn1',
    'bom1',
    'bru1',
    'cdg1',
    'cle1',
    'cpt1a',
    'dub1',
    'fra1',
    'gru1',
    'hnd1',
    'iad1',
    'icn1',
    'kix1',
    'lhr1',
    'pdx1',
    'sfo1',
    'sin1',
    'syd1',
  ],
};
