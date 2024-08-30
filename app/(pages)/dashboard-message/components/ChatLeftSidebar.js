import ChatItem from "./ChatItem";
import ChatSearchBox from "./ChatSearchBox";
import styles from "../dashboardMessage.module.css";

// dummy data
const profiles = [
  {
    id: "9e05a581-abce-41c2-a754-f6fd0791870d",
    avatar: "/assets/images/team/1.jpg",
    name: "Malerie G. Terrones",
    lastMessage: "How may I get help?",
    time: "8:30 AM",
    unseenMessage: 5,
    active: "active",
    isRead: false,
  },
  {
    id: "604901d3-95a1-42f9-b85c-f5d0b7bae2c7",
    avatar: "/assets/images/team/2.jpg",
    name: "Malerie G. Terrones",
    lastMessage: "You: Come",
    time: "1:30 PM",
    unseenMessage: 0,
    active: "offline",
    isRead: true,
  },
  {
    id: "465a1bcf-9d22-4b7e-b01c-71a2d0cd7a27",
    avatar: "/assets/images/team/3.jpg",
    name: "Malerie G. Terrones",
    lastMessage: "How may I get help?",
    time: "30/10/2020",
    unseenMessage: 0,
    active: "idle",
    isRead: true,
  },
  {
    id: "cd9c61dd-55f8-4dbf-89eb-a4c09cb09f74",
    avatar: "/assets/images/team/4.jpg",
    name: "Malerie G. Terrones",
    lastMessage: "How may I get help?",
    time: "30/10/2020",
    unseenMessage: 0,
    active: "offline",
    isRead: true,
  },

  {
    id: "4cd86843-7f31-4d82-8e78-26bee42fd019",
    avatar: "/assets/images/team/5.jpg",
    name: "Malerie G. Terrones",
    lastMessage: "How may I get help?",
    time: "8:30 AM",
    unseenMessage: 0,
    active: "offline",
    isRead: true,
  },

  {
    id: "465a1bcf-9d22-4b7e-b01c-71a2d0cd7a27",
    avatar: "/assets/images/team/3.jpg",
    name: "Malerie G. Terrones",
    lastMessage: "How may I get help?",
    time: "30/10/2020",
    unseenMessage: 0,
    active: "idle",
    isRead: true,
  },
  {
    id: "cd9c61dd-55f8-4dbf-89eb-a4c09cb09f74",
    avatar: "/assets/images/team/4.jpg",
    name: "Malerie G. Terrones",
    lastMessage: "How may I get help?",
    time: "30/10/2020",
    unseenMessage: 0,
    active: "offline",
    isRead: true,
  },

  {
    id: "4cd86843-7f31-4d82-8e78-26bee42fd019",
    avatar: "/assets/images/team/5.jpg",
    name: "Malerie G. Terrones",
    lastMessage: "How may I get help?",
    time: "8:30 AM",
    unseenMessage: 0,
    active: "offline",
    isRead: true,
  },

  {
    id: "465a1bcf-9d22-4b7e-b01c-71a2d0cd7a27",
    avatar: "/assets/images/team/3.jpg",
    name: "Malerie G. Terrones",
    lastMessage: "How may I get help?",
    time: "30/10/2020",
    unseenMessage: 0,
    active: "idle",
    isRead: true,
  },
  {
    id: "cd9c61dd-55f8-4dbf-89eb-a4c09cb09f74",
    avatar: "/assets/images/team/4.jpg",
    name: "Malerie G. Terrones",
    lastMessage: "How may I get help?",
    time: "30/10/2020",
    unseenMessage: 0,
    active: "offline",
    isRead: true,
  },

  {
    id: "4cd86843-7f31-4d82-8e78-26bee42fd019",
    avatar: "/assets/images/team/5.jpg",
    name: "Malerie G. Terrones",
    lastMessage: "How may I get help?",
    time: "8:30 AM",
    unseenMessage: 0,
    active: "offline",
    isRead: true,
  },
];

export const ChatLeftSidebar = () => {
  return (
    <div className="col-lg-5 col-xxl-4">
      <div className="use-on-chat border bg-white rounded">
        {/* Chart Search Box */}
        <ChatSearchBox />

        {/* Chart list  */}
        <ul className={`active-chat-list py-3 px-4 ${styles.chatList}`}>
          {profiles?.map((profile, index) => (
            <ChatItem key={index} {...profile} />
          ))}
        </ul>
      </div>
    </div>
  );
};
