import React, { useEffect, useState } from 'react'

const Data = () => {
    const [data, setdata] = useState([])
    const mydata = async () => {
        let data = await fetch("https://jsonplaceholder.typicode.com/todos");
        let newData = await data.json()
        setdata(newData)
    }
    console.log(222, data)
    useEffect(() => {
        mydata()
    }, [])
    return (
        <>
            {
                data.map((item, index) => {
                    return (
                        <div className="card-group" key={index} >
                            <div className="card" style={{ border: "2px solid black", margin: "10px" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{item.userId}</h5>
                                    <h5 className="card-title">{item.title}</h5>
                                    <h4>{item.completed}</h4>
                                    {console.log(11111, item.completed)}
                                </div>
                            </div>
                            <div className="card" style={{ border: "2px solid black", margin: "10px" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{item.userId}</h5>
                                    <h5 className="card-title">{item.title}</h5>
                                    <h5 className="card-title">{item.completed}</h5>
                                </div>
                            </div>
                            <div className="card" style={{ border: "2px solid black", margin: "10px" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{item.userId}</h5>
                                    <h5 className="card-title">{item.title}</h5>
                                    <h5 className="card-title">{item.completed}</h5>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Data
