import { useEffect, useState } from "react";
import { useEthers } from "@usedapp/core";
import ProfileModalBody from "./ProfileModalBody";
import { formatEther } from "@ethersproject/units";
import { getAccountBalance } from "./../CyberChipsMethodHandler";

const Navbar = () => {
  const { activateBrowserWallet, account, chainId, deactivate, library } =
    useEthers();
  const [accountBalance, setAccountBalance] = useState(0);

  const init = async () => {
    try {
      if (account) {
        const accountBalance = await getAccountBalance(library, account);
        setAccountBalance(accountBalance);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    init().then();
  }, [account]);

  return (
    <header>
      <nav className="navbar navbar-expand navbar-light bg-light">
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
                    className="btn btn-primary"
                  >
                    Connect
                  </button>
                )}
                {account && (
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      {account.slice(0, 5)}...{account.slice(38 - 42)}
                      {accountBalance && (
                        <div>{accountBalance.toString().slice(0, 6)} ETH</div>
                      )}
                    </button>
                    {/* Profile Modal */}
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
                            <button
                              type="button"
                              className="btn btn-danger"
                              data-bs-dismiss="modal"
                              onClick={() => {
                                deactivate();
                              }}
                            >
                              Disconnect
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              {account && (
                <li className="nav-item mx-2">
                  <button className="btn btn-danger opacity-100" disabled>
                    {chainId === 42 && <div>Kovan</div>}
                    {chainId !== 42 && <div>Please connect to Kovan</div>}
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
