import React, { useState } from "react";
import Main from "../mainpage/main";
import Dropdown from "./dropdown";
import("./header.css")

const Header = () => {
    const [search,setsearch]=useState("")
    return (
        <div>
            <div>
                <h1>VEHICLE MANUFACTURERS</h1>
            </div>
            <section className="header">
                <div>
                    <span className="searchname">Search:</span><input type="search" name="search" id="search" onChange={(e)=>{setsearch(e.targ
                        .value)}}/>
                </div>
                <div>
                    <Dropdown />
                </div>
            </section>
            <Main value={search}/>
        </div>
    )
}

export default Header