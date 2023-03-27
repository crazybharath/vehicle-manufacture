import Dropdown from "./dropdown";
import("./header.css")

const Header = () => {
    return (
        <div>
            <div>
                <h1>VEHICLE MANUFACTURERS</h1>
            </div>
            <section className="header">
                <div>
                    <span className="searchname">Search:</span><input type="search" name="search" id="search" 
                     />
                </div>
                <div>
                    <Dropdown />
                </div>
            </section>
        </div>
    )
}

export default Header