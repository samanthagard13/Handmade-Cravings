import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPinterest } from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return(
        <>
        <div className="footer">
            
        <FontAwesomeIcon icon={faPinterest} className="mt-3 mb-2"/>
        <p>
        <a href="mailto:handmadecravings@yahoo.com">handmadecravings@yahoo.com</a>
        </p>
        <p className="p-2 m-0">© HandmadeCravings 2023</p>
       
        </div>
        </>
    )
}

export default Footer;