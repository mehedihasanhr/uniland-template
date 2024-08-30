import { PropertyCharts } from "@/components/charts/PropertyCharts";

export default function Home() {
  return (
    <div className="full-row p-10 xs-p-0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h3 className="my-3">Dashboard</h3>
          </div>
          <div className="col-12">
            {/* Alert */}
            <div
              className="notice-warning alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              <span>
                <strong>Holy guacamole!</strong> You should check in on some of
                those fields below.
              </span>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              />
            </div>

            {/* End alert */}

            {/* widgets */}
            <div className="row row-cols-xxl-4 row-cols-lg-2 row-cols-1 g-4 mb-30">
              <div className="col">
                <div
                  className="ball p-4 position-relative text-white rounded"
                  style={{ backgroundColor: "#55e3b0" }}
                >
                  <i
                    className="flaticon-home flat-medium float-start pe-3"
                    aria-hidden="true"
                  />
                  <h4 className="m-0 text-white">340</h4>
                  <span className="d-table">Available Property</span>
                </div>
              </div>
              <div className="col">
                <div
                  className="ball p-4 position-relative text-white rounded"
                  style={{ backgroundColor: "#dc69f1" }}
                >
                  <i
                    className="flaticon-home flat-medium float-start pe-3"
                    aria-hidden="true"
                  />
                  <h4 className="m-0 text-white">227</h4>
                  <span className="d-table">Property For Rent</span>
                </div>
              </div>
              <div className="col">
                <div
                  className="ball p-4 position-relative text-white rounded"
                  style={{ backgroundColor: "#f1c643" }}
                >
                  <i
                    className="flaticon-home flat-medium float-start pe-3"
                    aria-hidden="true"
                  />
                  <h4 className="m-0 text-white">113</h4>
                  <span className="d-table">Property For Sale</span>
                </div>
              </div>
              <div className="col">
                <div
                  className="ball p-4 position-relative text-white rounded"
                  style={{ backgroundColor: "#ee6565" }}
                >
                  <i
                    className="flaticon-home flat-medium float-start pe-3"
                    aria-hidden="true"
                  />
                  <h4 className="m-0 text-white">$348.00</h4>
                  <span className="d-table">Total Earning</span>
                </div>
              </div>
            </div>
            {/* End widgets */}

            <div className="row">
              <div className="col-md-12 col-xl-6">
                <div className="p-30 bg-white border rounded mb-30 clearfix">
                  <h5 className="mb-4">Profile Overview</h5>
                  <div className="row row-cols-lg-2 row-cols-1 g-4">
                    <div className="col">
                      <i className="flaticon-home flat-medium text-primary float-start me-3" />
                      <span className="m-0 h5 d-block">580</span>
                      <span className="d-table">Property Deals</span>
                    </div>
                    <div className="col">
                      <i className="flaticon-chat flat-medium text-primary float-start me-3" />
                      <span className="m-0 h5 d-block">580</span>
                      <span className="d-table">Total Public Comments</span>
                    </div>
                    <div className="col">
                      <i className="flaticon-audit flat-medium text-primary float-start me-3" />
                      <span className="m-0 h5 d-block">580</span>
                      <span className="d-table">Property Views</span>
                    </div>
                    <div className="col">
                      <i className="flaticon-exam flat-medium text-primary float-start me-3" />
                      <span className="m-0 h5 d-block">580</span>
                      <span className="d-table">Bookmarked Property</span>
                    </div>
                  </div>
                </div>
                <div className="p-30 bg-white border rounded mb-30 clearfix">
                  <h5 className="mb-4">Recent Activity</h5>
                  <ul>
                    <li className="font-13 mb-3">
                      Dec 27th, 10:12 am{" "}
                      <span className="text-secondary">
                        - Get new message from custome on city tradecenter.
                      </span>
                    </li>
                    <li className="font-13 mb-3">
                      Dec 21th, 09:12 pm{" "}
                      <span className="text-secondary">
                        - New property approve for Rent by homex.
                      </span>
                    </li>
                    <li className="font-13 mb-3">
                      Dec 18th, 12:12 pm{" "}
                      <span className="text-secondary">
                        - Booking request for Nirala Appartment
                      </span>
                    </li>
                    <li className="font-13 mb-3">
                      Dec 15th, 05:45 pm{" "}
                      <span className="text-secondary">
                        - Payment receive from customer invoice no 2319891
                      </span>
                    </li>
                    <li className="font-13 mb-3">
                      Dec 15th, 03:32 pm{" "}
                      <span className="text-secondary">
                        - Comments replay by admin in Apolo Family Appartment
                      </span>
                    </li>
                    <li className="font-13 mb-3">
                      Dec 15th, 03:32 pm{" "}
                      <span className="text-secondary">
                        - Comments replay by admin in Apolo Family Appartment
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <PropertyCharts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
