import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function Button({className, children, handleClick = false, href = "/", ...props}){
    return(
        <>
            {handleClick && <span className={className} onClick={() => handleClick ? handleClick() : false}>{children}</span>}
            {!handleClick && (
                <Link className={className} href={href} {...props}>
                    <span className="btn-text">{children}</span>
                    <span className="btn-icons">
                        <Icon className="btn-icons-icon" icon="zondicons:arrow-left" />
                    </span>
                </Link>
            )}
            
        </>
    )
}