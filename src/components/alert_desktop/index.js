import './index.css'
import React from "react";

const AlertDesktop = (props) => {
    return (
        <div className={'container mobile-alert'} style={{justifyContent: "space-between"}}>
            <div style={{width: '100%'}}>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <img src={'logo.png'} alt={'logo jetlympic'}/>
                </div>
            </div>
            <div>
                <div className={'text-alert'}>This Web App can only be accessed on mobile devices</div>
            </div>
            <div>
                <div style={{fontSize: 16, padding: 10}}>&copy; System & Software</div>
            </div>
        </div>
    )
}

export default AlertDesktop;