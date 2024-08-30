export default function DashboardProfile() {
  return (
    <div className="full-row px-40 py-30 xs-p-0">
      <div className="container-fluid">
        {/* Page Title */}
        <div className="row">
          <div className="col-12">
            <h3 className="my-3">Profile Settings</h3>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="border rounded bg-white p-30 mb-30">
              <div className="row">
                <div className="col-xl-2">
                  <h4 className="mb-4 font-400">Email Settings</h4>
                </div>
                <div className="col-xl-10">
                  <form action="#" className="form-boder" method="POST">
                    <div className="row">
                      <div className="col mb-20">
                        <ul className="custom-check-box">
                          <li>
                            <input
                              id="feature-1"
                              className="custom-control-input hide"
                              type="checkbox"
                            />
                            <label
                              className="text-secondary"
                              htmlFor="feature-1"
                            >
                              Rating reminders
                            </label>
                            <span className="d-table ms-4 font-small">
                              Send an email reminding me to rate an item a week
                              after purchase
                            </span>{" "}
                          </li>
                          <li>
                            <input
                              id="feature-2"
                              className="custom-control-input hide"
                              type="checkbox"
                            />
                            <label
                              className="text-secondary"
                              htmlFor="feature-2"
                            >
                              Item update notifications
                            </label>
                            <span className="d-table ms-4 font-small">
                              {
                                "Send an email when an item I've purchased is updated"
                              }
                            </span>
                          </li>
                          <li>
                            <input
                              id="feature-3"
                              className="custom-control-input hide"
                              type="checkbox"
                            />
                            <label
                              className="text-secondary"
                              htmlFor="feature-3"
                            >
                              Item comment notifications
                            </label>
                            <span className="d-table ms-4 font-small">
                              Send me an email when someone comments on one of
                              my items
                            </span>{" "}
                          </li>
                          <li>
                            <input
                              id="feature-4"
                              className="custom-control-input hide"
                              type="checkbox"
                            />
                            <label
                              className="text-secondary"
                              htmlFor="feature-4"
                            >
                              Team comment notifications
                            </label>
                            <span className="d-table ms-4 font-small">
                              Send me an email when someone comments on one of
                              my team items
                            </span>{" "}
                          </li>
                          <li>
                            <input
                              id="feature-5"
                              className="custom-control-input hide"
                              type="checkbox"
                            />
                            <label
                              className="text-secondary"
                              htmlFor="feature-5"
                            >
                              Item review notifications
                            </label>
                            <span className="d-table ms-4 font-small">
                              Send me an email when my items are approved or
                              rejected
                            </span>{" "}
                          </li>
                          <li>
                            <input
                              id="feature-6"
                              className="custom-control-input hide"
                              type="checkbox"
                            />
                            <label
                              className="text-secondary"
                              htmlFor="feature-6"
                            >
                              Buyer review notifications
                            </label>
                            <span className="d-table ms-4 font-small">
                              Send me an email when someone leaves a review with
                              their rating
                            </span>{" "}
                          </li>
                          <li>
                            <input
                              id="feature-7"
                              className="custom-control-input hide"
                              type="checkbox"
                            />
                            <label
                              className="text-secondary"
                              htmlFor="feature-7"
                            >
                              Expiring support notifications
                            </label>
                            <span className="d-table ms-4 font-small">
                              Send me emails showing my soon to expire support
                              entitlements
                            </span>{" "}
                          </li>
                          <li>
                            <input
                              id="feature-8"
                              className="custom-control-input hide"
                              type="checkbox"
                            />
                            <label
                              className="text-secondary"
                              htmlFor="feature-8"
                            >
                              Daily summary emails
                            </label>
                            <span className="d-table ms-4 font-small">
                              Send me a daily summary of all items approved or
                              rejected
                            </span>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </form>
                  <p>
                    <span className="font-500">NOTE :</span> Morbi nibh dis.
                    Pede. Erat, porta urna. Adipiscing Ipsum nibh morbi taciti
                    proin quisque sit quam curae; vulputate ridiculus. Dictumst
                    ullamcorper nullam Parturient, urna. Etiam nascetur enim
                    lectus torquent pellentesque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
