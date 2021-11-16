import React from "react";

import './Todo.css';

function Todo(props) {
    return <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="List">
                <rect id="Rectangle 1" x="30" y="19" width="60" height="60" rx="5" fill="#C4C4C4"/>
                <g id="ListItem1" style={{"--order": 1}}>
                    <circle id="Box1" cx="37.5" cy="33.5" r="2" fill="white" stroke="#707070"/>
                    <line id="Line1" x1="42" y1="35.5" x2="80" y2="35.5" stroke="#707070"/>
                </g>
                <g id="ListItem2" style={{"--order": 2}}>
                    <circle id="Box2" cx="37.5" cy="44.5" r="2" fill="white" stroke="#707070"/>
                    <line id="Line2" x1="42" y1="46.5" x2="80" y2="46.5" stroke="#707070"/>
                </g>
                <g id="ListItem3" style={{"--order": 3}}>
                    <circle id="Box3" cx="37.5" cy="55.5" r="2" fill="white" stroke="#707070"/>
                    <line id="Line3" x1="42" y1="57.5" x2="80" y2="57.5" stroke="#707070"/>
                </g>
                <g id="ListItem4" style={{"--order": 4}}>
                    <circle id="Box4" cx="37.5" cy="66.5" r="2" fill="white" stroke="#707070"/>
                    <line id="Line4" x1="42" y1="68.5" x2="80" y2="68.5" stroke="#707070"/>
                </g>
            </g>
            <g id="Check">
                <circle id="Check1" cx="37.5" cy="33.5" r="1.5" fill="black" style={{"--order": 1}}/>
                <circle id="Check2" cx="37.5" cy="44.5" r="1.5" fill="black" style={{"--order": 2}}/>
                <circle id="Check3" cx="37.5" cy="55.5" r="1.5" fill="black" style={{"--order": 3}}/>
                <circle id="Check4" cx="37.5" cy="66.5" r="1.5" fill="black" style={{"--order": 4}}/>
            </g>
    </svg>;
}

export default Todo;