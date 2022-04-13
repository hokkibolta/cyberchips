import { useEthers } from "@usedapp/core";

const Navbar = () => {
  const { activateBrowserWallet, account } = useEthers();
  return (
    <header>
      <nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              {!account && <button className="btn btn-info">Connect</button>}
              {account && <p>{account}</p>}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
