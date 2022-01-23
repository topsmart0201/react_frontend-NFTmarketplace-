import React from "react";

const Footer = () => {
  return (       
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="de-flex">
                        <div className="de-flex-col" style={{'textAlign':'center',height:'45px','backgroundColor':'rgba(153, 153, 153,0.4)',color:'white','paddingTop':'21px'}}>
                            <span onClick={()=> window.open("", "_self")}>
                                {/* <img alt="" className="f-logo d-1 w-logo" src="./img/logo.png" />
                                <img alt="" className="f-logo d-3 w-logo" src="./img/logo-2-light.png" /> */}
                                <span className="copy">&copy; Copyright 2021 - All rights are reserved by Metaslate </span>
                            </span>
                        </div>                       
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Footer;
