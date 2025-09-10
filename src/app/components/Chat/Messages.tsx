import { Message } from "ai";
import { useRef } from "react";
import { Card, CardContent, CardHeader } from "../../components/ui/card"; // New import

export default function Messages({ messages }: { messages: Message[] }) {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="border-2 border-gray-600 p-6 rounded-lg overflow-y-scroll flex-grow flex flex-col justify-end bg-gray-700">
      {messages.map((msg, index) => (
        <Card
          key={index}
          className={`my-2 flex slide-in-bottom ${
            msg.role === "assistant" ? "bg-secondary" : "bg-primary"
          }`}
        >
          <CardHeader className="flex items-center justify-center p-2 border-r">
            {msg.role === "assistant" ? "🤖" : "🧑‍💻"}
          </CardHeader>
          <CardContent className="flex items-center p-2">
            {msg.content}
          </CardContent>
        </Card>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}
