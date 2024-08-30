import { ChatLeftSidebar } from "./components/ChatLeftSidebar";
import { ChatMessageContainer } from "./components/ChatMessageContainer";

export default function DashboardMessage() {
  return (
    <div className="full-row px-40 py-30 xs-p-0">
      <div className="container-fluid">
        {/* Page Title */}
        <div className="row">
          <div className="col-12">
            <h3 className="my-3">Message Box</h3>
          </div>
        </div>

        <div className="row">
          <ChatLeftSidebar />
          <ChatMessageContainer />
        </div>
      </div>
    </div>
  );
}
