import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";

export default function Layout({ children }) {
  return (
    <div id="page_wrapper" className="bg-light vh-100">
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div
            className="col-md-8 col-lg-9 col-xl-10 px-0 dashboard-body"
            style={{ height: "100vh", overflowY: "auto" }}
          >
            <Header />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
