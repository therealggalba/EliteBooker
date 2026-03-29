export interface FeedbackData {
  type: 'Bug' | 'Suggestion' | 'Praise' | 'Other';
  message: string;
  username?: string;
  timestamp: string;
  browserInfo: string;
}

const sanitizeInput = (str: string): string => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

export const sendFeedbackToDiscord = async (data: FeedbackData): Promise<void> => {
  const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

  if (!webhookUrl || webhookUrl === 'YOUR_DISCORD_WEBHOOK_URL_HERE') {
    throw new Error('Discord Webhook URL not configured');
  }

  const sanitizedMessage = sanitizeInput(data.message.substring(0, 2000));
  const sanitizedUsername = data.username ? sanitizeInput(data.username.substring(0, 100)) : 'Anonymous';

  const payload = {
    embeds: [
      {
        title: `EliteBooker Feedback: ${data.type}`,
        color: data.type === 'Bug' ? 0xff0000 : (data.type === 'Suggestion' ? 0x00ff00 : 0x0000ff),
        fields: [
          {
            name: 'User',
            value: sanitizedUsername,
            inline: true,
          },
          {
            name: 'Message',
            value: sanitizedMessage,
          },
          {
            name: 'System Info',
            value: data.browserInfo,
          },
          {
            name: 'Timestamp',
            value: data.timestamp,
          },
        ],
        footer: {
          text: 'EliteBooker Feedback System',
        },
      },
    ],
  };

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Discord error:', errorText);
    throw new Error('Failed to send feedback to Discord');
  }
};
