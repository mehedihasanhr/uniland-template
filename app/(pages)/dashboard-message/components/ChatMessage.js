import Image from "next/image";

export function ChatMessage({ message }) {
  return (
    <li className={message.sender}>
      <div className="avata">
        <Image
          className="rounded-circle"
          src={message.avatar}
          alt="uniland template"
          width={64}
          height={64}
        />
      </div>
      <div className="chat-info">
        <div className="mb-2">{message.timestamp}</div>
        <div className={`last-msg p-3 rounded ${message.bgClass}`}>
          {message.message}
        </div>
      </div>
    </li>
  );
}
