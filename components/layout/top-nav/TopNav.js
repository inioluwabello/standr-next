import Form from "react-bootstrap/Form";
import Image from "next/image";
import SearchBar from './SearchBar'
import Nav from "./nav";
import BestOffers from './BestOffers'
import Notification from "./notification";
import User from "./User";
import Cart from "./Cart";

export default function TopNav() {
  // return (
  //   <div style={{ background: "white", padding: ".7rem"}}>
  //     <div className="row" style={{ height: "40px", overflow: "hidden" }}>
  //       <div className="col">
  //         <Nav />
  //       </div>
  //       <div className="col">
  //         <div>
  //           <Form.Select
  //             className="usd"
  //             style={{ width: "80px", border: "none", fontSize: "10px" }}
  //             // , marginRight: "2rem"
  //             size="sm"
  //           >
  //             <option>$ USD</option>
  //           </Form.Select>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="fl" style={{marginTop: "0.6rem"}}>
  //       <div className="">
  //         <div className="fl">
  //           <div style={{ marginRight: "2rem" }}>
  //             <Image
  //               src="/images/logo.png"
  //               width={140}
  //               height={54.688}
  //               alt="Logo"
  //             />
  //           </div>
  //           <SearchBar  style={{ flexShrink: 0 }} />
  //         </div>
  //       </div>

  //       <BestOffers style={{ flexShrink: 0 }} />

  //       <div style={{ flexShrink: 0 }} className="fl fl-align-end">
  //         <Notification />
  //         <User />
  //         <Cart />
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div style={{ background: "white", padding: ".7rem"}}>
      <div className="row" style={{ height: "40px", overflow: "hidden" }}>
        <div className="col">
          <Nav />
        </div>
        <div className="col">
          <div>
            <Form.Select
              className="usd float-right"
              style={{ 
                width: "80px", 
                border: "none", 
                fontSize: "10px", 
                color: "#78808a",
                boxShadow: "none"
               }}
              size="sm"
            >
              <option>$ USD</option>
            </Form.Select>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-sm-2 d-xs-none d-sm-block">
          <Image
            src="/images/logo.png"
            width={140}
            height={54.688}
            alt="Logo"
          />
        </div>
        <div className="col-sm-6 col-lg-4">
          <SearchBar  style={{ flexShrink: 0 }} />
        </div>
        <div className="d-xs-none d-sm-none d-md-none d-lg-block d-xl-block col-lg-3">
          <BestOffers style={{ flexShrink: 0 }} />
        </div>
        <div className="d-xs-none d-sm-block col-sm-4 col-md-4 col-lg-3 text-right">
          <Notification />
          <User />
          <Cart />
        </div>
      </div>

    </div>
  );

}
