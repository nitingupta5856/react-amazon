import React from "react";
import{Link} from "react-router-dom"
function Subheader() {

    return (

        <div className="mainsubheader">
            <div className="headerbox">
                <span>ALL <select><option> </option>
                
                </select>
                </span>
            </div>
            <div className="headerbox">
            <Link to="/Shirt" style={{textDecoration:"none"}}><span className="subheader_item">Shirt </span></Link>
                
            </div>
            <div className="headerbox">
            <Link to="/Pant" style={{textDecoration:"none"}}><span className="subheader_item">Pant </span></Link>
                
            </div>
            {/* <div className="headerbox">
                <span>Fashion</span>
            </div>
            
            <div className="headerbox">
                <span>Electronics</span>
            </div>
            
            <div className="headerbox">
                <span>Sports, Fitness & Outdoors</span>
            </div>
            <div className="headerbox">
                <span>Gift ideas</span>
            </div>
            <div className="headerbox">
                <span>Computers</span>
            </div> */}
            <div >
                <span className="subhederside" >Great Republic Day Sale| Shop Now</span>
            </div>



        </div>



    );
}
export default Subheader;