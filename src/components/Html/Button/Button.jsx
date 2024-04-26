import { Link } from "react-router-dom";
import { Icon } from '@iconify-icon/react';

export default function Button({className, children, handleClick = false, href = "/"}){
    return(
        <>
            {handleClick && <span className={className} onClick={() => handleClick ? handleClick() : false}>{children}</span>}
            {!handleClick && (
                <Link className={className} to={href}>
                    <span className="btn-text">{children}</span>
                    <span className="btn-icons">
                        <Icon className="btn-icons-icon" icon="zondicons:arrow-left" />
                    </span>
                </Link>
            )}
            
        </>
    )
}