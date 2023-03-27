import React, { useEffect, useState } from "react";
import Header from "../header/header";
import("./main.css")

const Main = () => {
    const [post, setpost] = useState([]);
    console.log(post);
    useEffect(() => {
        const handle = async () => {
            await fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetWMIsForManufacturer/hon?format=json").then(res => res.json()).then((data) => {
                console.log(data);
                setpost(data?.Results)
            })
        }
        handle()
    }, [])

    return (
        <div>
            <section>
                <Header />
            </section>
            <section className="container">
                <table>
                    <thead>
                        <tr className="table-head">
                            <th>Name</th>
                            <th>Country</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            post?.map?.((post, index) => {
                                return (
                                    index < 30 && (
                                        <tr>
                                            <td className="table-post">{post?.Name}</td>
                                            <td className="table-post">{post?.Country}</td>
                                            <td className="table-post">{post?.VehicleType}</td>
                                        </tr>
                                    )

                                )
                            })
                        }
                    </tbody>
                </table>

            </section>
        </div>
    )
}

export default Main