export function PackagePlanForm() {
  return (
    <div className="border rounded bg-white p-30 mb-30">
      <div className="row">
        <div className="col-xl-2 d-none d-xl-block">
          <h6 className="mb-4">Selected Plan</h6>
        </div>

        <div className="col-xl-10">
          <form action="#" className="form-boder" method="POST">
            <div className="row">
              <div className="col-md-6 mb-20">
                <label className="mb-2 font-fifteen font-500">
                  Select Plan
                </label>
                <div className="form-group">
                  <select>
                    <option>Medium Package</option>
                    <option>Basic Package</option>
                    <option>High Package</option>
                  </select>
                </div>
              </div>
              <div className="col-12 mb-20">
                <div className="form-group">
                  <button type="submit" name="name" className="btn btn-primary">
                    Update Package
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="compare-chart-classic">
            <div>
              <table className="position-relative table mark-table-col-3 text-general mt-5">
                <thead>
                  <tr>
                    <th>
                      <b className="font-medium">Agency Package</b>
                    </th>
                    <th>
                      Basic Package
                      <br />
                      <span className="h4 text-primary pt-1 pb-3 d-inline-block">
                        $399.00
                      </span>
                      <br />
                      Every Week
                    </th>
                    <th className="position-relative">
                      Medium Package
                      <br />
                      <span className="h4 text-primary pt-1 pb-3 d-inline-block">
                        $799.00
                      </span>
                      <br />
                      Every Week
                      <div
                        className="position-absolute w-100 text-center left-0 bg-primary"
                        style={{
                          top: "-40px",
                          lineHeight: "38px",
                        }}
                      >
                        Selected
                      </div>
                    </th>
                    <th>
                      Hight Package
                      <br />
                      <span className="h4 text-primary pt-1 pb-3 d-inline-block">
                        $1,799.00
                      </span>
                      <br />
                      Every Day
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Property Submit Limit</td>
                    <td>1</td>
                    <td>3</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>Agent Profiles</td>
                    <td>
                      <i className="fas fa-check" />
                    </td>
                    <td>
                      <i className="fas fa-check" />
                    </td>
                    <td>
                      <i className="fas fa-check" />
                    </td>
                  </tr>
                  <tr>
                    <td>Agency Profiles</td>
                    <td>Light</td>
                    <td>Medium</td>
                    <td>Heavy</td>
                  </tr>
                  <tr>
                    <td>Featured Properties</td>
                    <td>
                      <i className="far fa-window-close" />
                    </td>
                    <td>
                      <i className="fas fa-check" />
                    </td>
                    <td>
                      <i className="fas fa-check" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
