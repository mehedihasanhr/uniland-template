import { PropertyMediaImage } from "./PropertyMediaImage";

export function PropertyMediaForm() {
  return (
    <div className="row">
      <div className="col mb-30">
        <div className="border rounded bg-white p-30">
          <h4 className="mb-4">Property Media</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <form className="form-boder" action="#" method="POST">
            <div className="form-row">
              <div className="col-md-12 mt-20">
                <ul className="row row-cols-xl-6 row-cols-md-3 row-cols-2 media-upload">
                  <PropertyMediaImage
                    src="/assets/images/thumbnaillist/01.jpg"
                    alt="real estate template"
                  />

                  <PropertyMediaImage
                    src="/assets/images/thumbnaillist/02.jpg"
                    alt="real estate template"
                  />

                  <PropertyMediaImage
                    src="/assets/images/thumbnaillist/03.jpg"
                    alt="real estate template"
                  />

                  <PropertyMediaImage
                    src="/assets/images/thumbnaillist/04.jpg"
                    alt="real estate template"
                  />

                  <PropertyMediaImage
                    src="/assets/images/thumbnaillist/05.jpg"
                    alt="real estate template"
                  />

                  <PropertyMediaImage
                    src="/assets/images/thumbnaillist/06.jpg"
                    alt="real estate template"
                  />
                </ul>
              </div>

              <div className="col-md-12 mb-20">
                <input
                  type="file"
                  id="fileupload-example-1"
                  className="d-none"
                />
                <label
                  className="fileupload_label border rounded font-large"
                  htmlFor="fileupload-example-1"
                >
                  Drop your photos here or Click
                </label>
              </div>
              <div className="col-md-12 mb-20">
                <label className="mb-2 font-fifteen font-500 w-100">
                  Attachment
                </label>
                <div className="d-flex">
                  <input
                    type="text"
                    id="file-path"
                    className="form-control me-3"
                  />
                  <input type="file" className="d-none" id="attachment-file" />
                  <label
                    className="btn btn-secondary d-ruby"
                    htmlFor="attachment-file"
                  >
                    Select Attachment
                  </label>
                </div>
              </div>
              <div className="col-md-12 mb-20">
                <button className="btn btn-primary" name="submitbasic">
                  Save Media
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
