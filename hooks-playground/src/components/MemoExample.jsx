import { useEffect, useState, useMemo } from "react";

let messageId = 2;

function MemoExample() {
  const [messages, setMessages] = useState([
    { id: 1, text: "first" },
    { id: 2, text: "second" },
  ]);

  useEffect(() => {
    const id = setTimeout(() => {
      messageId++;
      setMessages((prev) => [
        ...prev,
        { id: messageId, text: `text ${messageId}` },
      ]);
    }, 5000);

    return () => clearTimeout(id);
  }, []);

  return (
    <div>
      {messages.map((message) => (
        <Message key={message.id} text={message.text} />
      ))}
    </div>
  );
}

function Message({ text }) {
  const date = useMemo(() => {
    return new Date().toLocaleTimeString();
  }, []);
  return (
    <div>
      <span>Text: {text}</span>
      <span>RenderAt: {date}</span>
    </div>
  );
}

export default MemoExample;
