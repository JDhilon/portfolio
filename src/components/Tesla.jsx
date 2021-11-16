import React from "react";

import './Tesla.css';

function Tesla(props) {
    return <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="TeslaGames">
        <rect width="120" height="100" fill="white"/>
        <rect id="Road" x="12" y="75" width="96" height="5" fill="#C4C4C4"/>
        <g id="RoadLines">
            <rect id="Rectangle 18" x="12" y="77" width="12" height="1" fill="white"/>
            <rect id="Rectangle 19" x="36" y="77" width="12" height="1" fill="white"/>
            <rect id="Rectangle 20" x="60" y="77" width="12" height="1" fill="white"/>
            <rect id="Rectangle 21" x="84" y="77" width="12" height="1" fill="white"/>
            <rect id="Rectangle 22" x="108" y="77" width="12" height="1" fill="white"/>
        </g>
        <g id="Cars">
            <g id="Car1" style={{"--offset": Math.random() + 's'}}>
                <rect id="Rectangle 23" x="17" y="62" width="15" height="10" rx="3" fill="#717171"/>
                <rect id="Rectangle 24" x="16" y="67" width="20" height="5" rx="1" fill="#717171"/>
                <circle id="Ellipse 1" cx="19.5" cy="72.5" r="2.5" fill="#1D1D1D"/>
                <circle id="Ellipse 2" cx="32.5" cy="72.5" r="2.5" fill="#1D1D1D"/>
                <circle id="Ellipse 5" cx="21.5" cy="66.5" r="1.5" fill="#9C9C9C"/>
                <circle id="Bullet1" cx="23.5" cy="66.5" r="0.5" fill="#24FF00"/>
                <rect id="Rectangle 27" width="3" height="1" rx="0.5" transform="matrix(1 0 0 -1 21 67)" fill="#1D1D1D"/>
            </g>
            <g id="Car2" style={{"--offset": Math.random() + 's'}}>
                <rect id="Rectangle 25" x="62" y="62" width="15" height="10" rx="3" fill="#1D1D1D"/>
                <rect id="Rectangle 26" x="61" y="67" width="20" height="5" rx="1" fill="#1D1D1D"/>
                <circle id="Ellipse 3" cx="64.5" cy="72.5" r="2.5" fill="#717171"/>
                <circle id="Ellipse 4" cx="77.5" cy="72.5" r="2.5" fill="#717171"/>
                <circle id="Ellipse 5_2" cx="66.5" cy="66.5" r="1.5" transform="rotate(180 66.5 66.5)" fill="#9C9C9C"/>
                <circle id="Bullet2" cx="64.5" cy="66.5" r="0.5" fill="#FF2E00"/>
                <rect id="Rectangle 27_2" width="3" height="1" rx="0.5" transform="matrix(-1 0 0 1 67 66)" fill="#717171"/>
            </g>
        </g>
    </g>
    </svg>;
}

export default Tesla;