import { FavoriteItem } from "./components/FavoriteItem";
import { listingTableData } from "@/fake-data/listing-data";

export default function DashboardFavorite() {
  return (
    <div className="full-row px-40 py-30 xs-p-0">
      <div className="container-fluid">
        {/* Page Title */}
        <div className="row">
          <div className="col-12">
            <h3 className="my-3">My Favorite</h3>
          </div>
        </div>

        {/* Page content */}
        <div className="row">
          <div className="col">
            <div className="dashboard-panel border bg-white rounded overflow-hidden w-100">
              <div className="overflow-x-scroll font-fifteen">
                <table className="w-100 items-list bg-transparent">
                  <thead>
                    <tr class="bg-white">
                      <th>Properties</th>
                      <th>Added Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listingTableData?.map((tableData) => (
                      <FavoriteItem key={tableData.id} data={tableData} />
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="col-lg-12 my-5">
                <nav aria-label="Page navigation example">
                  <ul className="pagination pagination-dotted-active justify-content-center">
                    <li className="page-item disabled">
                      <a
                        className="page-link"
                        href="#"
                        tabIndex={-1}
                        aria-disabled="true"
                      >
                        Previous Page
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next Page
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
