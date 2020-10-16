import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h5><i class="fa fa-map-marker"></i> Lieux, Contact</h5>
            <p className="list-unstyled">
              <li> Les Berges du Lac1, Tunis 1053 </li>
              <li> 20215787, 20065543 </li>
            </p>
          </div>
          {/* Column2 */}
          <div className="col">
            <h5>Stuff</h5>
            <ui className="list-unstyled">
              <li>Wahid Taamallah</li>
              <li>Omar en Brahim</li>
                 </ui>
          </div>
          {/* Column3 */}
          <div className="col">
          <h5> RETROUVEZ NOUS AUSSI SUR:</h5>  
          <ui className="list-unstyled">
         <li><a href="https://www.facebook.com/Sports-t-shirts-101282601766222"><i class="fab fa-facebook-f"></i></a></li>
         <li><a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a></li>
         <li><a href="https://www.linkedin.com/feed/"><i class="fab fa-linkedin-in"></i></a></li>
         </ui>
          </div>
        </div>
        <hr />
        
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-dark text-light">
        Developed By:
        <span className="text-warning font-weight-normal">
          Omar Ben Brahim and Wahid Taamallah
        </span>
        , Using <i class="fab fa-react"/> React JS &amp; Redux JS
        integrated with mongoDB
          </div>
          </div>
        <div className="footer-copyright text-center py-3">
          <p className="fluid">
            &copy;{new Date().getFullYear()} WO-company.All right reserved
          </p> 
        </div>
      </div>
    </div>
  );
}
export default Footer