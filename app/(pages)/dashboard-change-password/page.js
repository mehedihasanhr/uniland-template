export default function DashboardChangePassword() {
  return (
    <div className="full-row px-40 py-30 xs-p-0">
      <div className="container-fluid">
        {/* Page Title */}
        <div className="row">
          <div className="col-12">
            <h3 className="my-3">Password</h3>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="border rounded bg-white p-30 mb-30">
              <div className="row">
                <div className="col-xl-2">
                  <h4 className="mb-4 font-400">Change Password</h4>
                </div>
                <div className="col-xl-10">
                  <form action="#" className="form-boder" method="POST">
                    <div className="row">
                      <div className="col-lg-6 mb-20">
                        <label className="mb-2 font-fifteen">
                          Old Password
                        </label>
                        <input
                          className="form-control"
                          name="title"
                          type="password"
                        />
                      </div>
                      <div className="col-lg-6 mb-20">
                        <label className="mb-2 font-fifteen">
                          New Password
                        </label>
                        <input
                          className="form-control"
                          name="title"
                          type="password"
                        />
                      </div>
                      <div className="col-lg-6 mb-20">
                        <label className="mb-2 font-fifteen">
                          Confirm New Password
                        </label>
                        <input
                          className="form-control"
                          name="title"
                          type="password"
                        />
                      </div>
                      <div className="col-lg-12 mb-20">
                        <button
                          type="submit"
                          name="name"
                          className="btn btn-primary"
                        >
                          Update
                        </button>
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
