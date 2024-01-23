import { Link } from "react-router-dom";

export default function Button({className, children, handleClick = false, href = "/"}){
    return(
        <>
            {handleClick && <span className={className} onClick={() => handleClick ? handleClick() : false}>{children}</span>}
            {!handleClick && <Link className={className} to={href}>{children}</Link>}
            
        </>
    )
}