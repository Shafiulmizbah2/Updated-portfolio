import { useRouter } from 'next/router';
import React from 'react'


const Logo = () => {
    const {push} = useRouter();
    return (
        <div  className="logobox" onClick={()=> push("/")}>
            <span className="S">S</span>
            <span className="A">A</span>
        </div>
    )
}

export default Logo
