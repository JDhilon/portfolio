import React from "react";

import './Dungeon.css';

function Dungeon(props) {
    return <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Dungeon">
        <g id="Rooms">
            <rect id="Room5" x="16.5" y="13.5" width="29" height="24" fill="#C4C4C4" stroke="#6A6A6A"/>
            <rect id="Room4" x="83.5" y="20.5" width="24" height="29" fill="#C4C4C4" stroke="#6A6A6A"/>
            <rect id="Room3" x="14.5" y="57.5" width="19" height="19" fill="#C4C4C4" stroke="#6A6A6A"/>
            <rect id="Room2" x="64.5" y="65.5" width="24" height="24" fill="#C4C4C4" stroke="#6A6A6A"/>
            <rect id="Room1" x="43.5" y="47.5" width="14" height="9" fill="#C4C4C4" stroke="#6A6A6A"/>
        </g>
        <g id="Paths">
            <g id="Path1">
                <rect id="Rectangle 6" x="93" y="49" width="4" height="26" fill="#C4C4C4"/>
                <rect id="Rectangle 7" x="88" y="75" width="9" height="4" fill="#C4C4C4"/>
                <line id="Line 5" x1="97.5" y1="49" x2="97.5" y2="80" stroke="#6A6A6A"/>
                <line id="Line 6" x1="97" y1="79.5" x2="88" y2="79.5" stroke="#6A6A6A"/>
                <line id="Line 7" x1="88" y1="74.5" x2="93" y2="74.5" stroke="#6A6A6A"/>
                <line id="Line 8" x1="92.5" y1="49" x2="92.5" y2="74" stroke="#6A6A6A"/>
            </g>
            <g id="Path2">
                <rect id="Rectangle 8" x="45" y="23" width="13" height="4" fill="#C4C4C4"/>
                <rect id="Rectangle 13" x="58" y="37" width="26" height="4" fill="#C4C4C4"/>
                <rect id="Rectangle 14" x="54" y="27" width="4" height="14" fill="#C4C4C4"/>
                <line id="Line 9" x1="45" y1="22.5" x2="58" y2="22.5" stroke="#6A6A6A"/>
                <line id="Line 10" x1="58.5" y1="22" x2="58.5" y2="37" stroke="#6A6A6A"/>
                <line id="Line 11" x1="58" y1="36.5" x2="84" y2="36.5" stroke="#6A6A6A"/>
                <line id="Line 12" x1="54" y1="41.5" x2="84" y2="41.5" stroke="#6A6A6A"/>
                <line id="Line 13" x1="53.5" y1="28" x2="53.5" y2="42" stroke="#6A6A6A"/>
                <line id="Line 14" x1="45" y1="27.5" x2="54" y2="27.5" stroke="#6A6A6A"/>
            </g>
            <g id="Path3">
                <rect id="Rectangle15" x="22" y="76" width="4" height="7" fill="#C4C4C4"/>
                <rect id="Rectangle16" x="22" y="82" width="43" height="4" fill="#C4C4C4"/>
                <rect id="Rectangle17" x="48" y="56" width="4" height="26" fill="#C4C4C4"/>
                <line id="Line15" x1="52.5" y1="56" x2="52.5" y2="82" stroke="#6A6A6A"/>
                <line id="Line16" x1="53" y1="81.5" x2="65" y2="81.5" stroke="#6A6A6A"/>
                <line id="Line17" x1="47.5" y1="56" x2="47.5" y2="82" stroke="#6A6A6A"/>
                <line id="Line18" x1="22" y1="86.5" x2="65" y2="86.5" stroke="#6A6A6A"/>
                <line id="Line19" x1="21.5" y1="76" x2="21.5" y2="87" stroke="#6A6A6A"/>
                <line id="Line20" x1="26" y1="81.5" x2="47" y2="81.5" stroke="#6A6A6A"/>
                <line id="Line21" x1="26.5" y1="76" x2="26.5" y2="82" stroke="#6A6A6A"/>
            </g>
        </g>
    </g>
    </svg>;
}

export default Dungeon;