/* eslint-disable no-console */
import type { APIRoute } from 'astro';
import { GoogleGenerativeAI } from '@google/generative-ai';

import { apiKey, defaultModel, supportedModels } from '.';

export const post: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { messages, password } = body;

  const model = body.model || defaultModel;

  if (!supportedModels.includes(model)) {
    console.log(`Model not supported: ${model}`); // Debugging line
    return new Response(
      JSON.stringify({ msg: `Not supported model ${model}` }),
      {
        status: 400,
      }
    );
  }

  try {
    console.log(`Using API Key: ${apiKey}`); // Debugging line
    const genAI = new GoogleGenerativeAI(apiKey);
    const geminiModel = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const chat = geminiModel.startChat({
      history: messages.map((message) => ({
        role: message.role,
        parts: message.content,
      })),
      generationConfig: {
        maxOutputTokens: 100,
      },
    });

    // Before sending the message, log it for debugging
    console.log('Sending message:', messages[messages.length - 1].content); // Debugging line

    const response = await chat.sendMessage(
      messages[messages.length - 1].content
    );
    const text = await response.response.text();

    return new Response(JSON.stringify({ text }));
  } catch (e) {
    console.log('Error with Google API:', e); // Debugging line
    console.log(`API Key used: ${apiKey}`); // Debugging line
    return new Response(JSON.stringify({ msg: e?.message || e?.stack || e }), {
      status: 500,
    });
  }
};
