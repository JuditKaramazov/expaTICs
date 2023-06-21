import { StreamingTextResponse, LangChainStream, Message } from "ai";
import { CallbackManager } from "langchain/callbacks";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { AIChatMessage, HumanChatMessage } from "langchain/schema";

export const runtime = "edge";

export async function post(req) {
  const { messages } = await req.json();

  const { stream, handlers } = LangChainStream();

  const llm = new ChatOpenAI({
    streaming: true,
    CallbackManager: CallbackManager.fromHandlers(handlers),
  });

  llm
    .call(
      messages.map((m) =>
        m.role === "user"
          ? new HumanChatMessage(m.content)
          : new AIChatMessage(m.content)
      )
    )
    .catch(console.error);

  return new StreamingTextResponse(stream);
}
