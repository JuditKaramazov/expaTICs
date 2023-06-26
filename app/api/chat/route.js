// app/api/chat/route.js

import { Configuration, OpenAIApi } from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from 'ai'

export const runtime = 'edge'

const apiConfig = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(apiConfig)

export async function POST(req) {
  // Extracts the `messages` from the body of the request.
  const { messages } = await req.json();

  // Requests the OpenAI API for the response based on the prompt.
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: messages,
    max_tokens: 500,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  })

  // Converts the response into a friendly text-stream.
  const stream = OpenAIStream(response)

  // Responds with the stream.
  return new StreamingTextResponse(stream)
}
