"use client";

import { useSelector } from "react-redux";

export function ChatBox() {
  const { profile } = useSelector((state) => state.dashboardMessage);

  if (!profile) return null;

  return (
    <div className="chat-write-box py-3 px-4">
      <form className="form-boder" action="#" method="POST">
        <div className="form-row">
          <div className="col-12">
            <div className="form-group">
              <textarea
                className="form-control h-auto"
                id="chat"
                name="chat"
                placeholder="Write"
                rows={1}
                defaultValue={""}
              />
              <button className="btn btn-light" type="button">
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
