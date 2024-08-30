import Image from "next/image";

export function Header() {
  return (
    <header className="header-unfix sticky-top border-bottom bg-white">
      <div className="main-nav xs-p-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg nav-secondary nav-primary-hover nav-line-active px-3">
                <div className="navbar-collapse justify-content-between sm-ml-0">
                  <ul className="navbar-nav sm-mx-none">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="blog-grid-classic.html"
                      >
                        Dashboard Options
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Messages
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            My Listing
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            My Account
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Submit Property
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="flaticon-notification flat-mini" />
                        <sup>10</sup>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="flaticon-comments flat-mini" />
                        <sup>2</sup>
                      </a>
                    </li>
                  </ul>
                  <ul className="navbar-nav user-option">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Earnings: <span className="text-primary">$25400</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <Image
                          src="/assets/images/user1.jpg"
                          alt=""
                          width={80}
                          height={80}
                        />
                        Hi, Jason
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
