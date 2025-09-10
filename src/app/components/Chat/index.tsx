// Chat.tsx

import React, { FormEvent, ChangeEvent } from "react";
import Messages from "./Messages";
import { Message } from "ai/react";
import { Input } from "../../components/ui/input"; // New import

interface Chat {
  input: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleMessageSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  messages: Message[];
}

const Chat: React.FC<Chat> = ({
  input,
  handleInputChange,
  handleMessageSubmit,
  messages,
}) => {
  return (
    <div id="chat" className="flex flex-col w-full lg:w-3/5 mr-4 mx-5 lg:mx-0">
      <Messages messages={messages} />
      <>
        <form
          onSubmit={handleMessageSubmit}
          className="mt-5 mb-5 relative bg-gray-700 rounded-lg"
        >
          <Input // Changed from input
            type="text"
            placeholder="Type your message..." // Added placeholder
            value={input}
            onChange={handleInputChange}
            className="pr-10" // Keep some padding for the "Press ⮐ to send" text
          />

          <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
            Press ⮐ to send
          </span>
        </form>
      </>
    </div>
  );
};

export default Chat;
