import { useEthers } from "@usedapp/core";
import ProfileModalBody from "./ProfileModalBody";

const Navbar = () => {
  const { activateBrowserWallet, account, chainId } = useEthers();
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {!account && (
                  <button
                    onClick={() => {
                      activateBrowserWallet();
                    }}
                    className="btn btn-primary text-white"
                  >
                    Connect
                  </button>
                )}
                {account && (
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary text-white"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      {account.slice(0, 5)}...{account.slice(38 - 42)}
                    </button>
                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Your Cyber Avatar
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <ProfileModalBody account={account} />
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li className="nav-item mx-2">
                <button className="btn btn-danger text-white">
                  {chainId === 42 && <div>Kovan</div>}
                  {chainId !== 42 && <div>Please connect to Kovan</div>}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
