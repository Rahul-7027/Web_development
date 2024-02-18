import React from 'react'

const NewsItem = (props) => {
    return (
        <div>
            <div className="card" style={{ height: "26rem", borderRadius: "10px" }}>
                <img src={props.urlToImage ? props.urlToImage : "https://static.toiimg.com/thumb/msid-107781413,width-1070,height-580,imgsize-17874,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"} className="card-img-top" alt="..." style={{ height: "11rem", borderRadius: "10px" }} />
                <div className="card-body">
                    <h5 className="card-title">{props.title ? props.title : "Unknown Title"}</h5>
                    <p className="card-text">{props.description ? props.description : "Unknown Description"}</p>
                    <div className="footer my-3">
                        <small className="text-info">By {props.author ? props.author : "Unknown"} and {props.publishedAt}</small>
                    </div>
                    <a href={props.url} className="btn btn-primary">Read Me</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
