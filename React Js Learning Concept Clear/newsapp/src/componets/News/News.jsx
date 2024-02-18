import React, { useState, useEffect } from 'react';
import NewsItem from '../NewsItems/NewsItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from '../Spinner/Loading';

const News = (props) => {
    const [newsData, setNewsData] = useState([]); // State to hold news data
    const [page, setPage] = useState(1); // State to track the current page
    const [loading, setLoading] = useState(true); // State to track loading status
    const [totalResults, setTotalResults] = useState(0); // State to hold total results

    // Function to capitalize the first letter of a string
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    // Function to fetch news data
    const fetchData = async () => {
        try {
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
            setLoading(true); // Set loading to true when fetching data
            let data = await fetch(url);
            let parsedData = await data.json();
            setNewsData(parsedData.articles); // Set news data from the API response
            setTotalResults(parsedData.totalResults); // Set total results
            setLoading(false); // Set loading to false after fetching data
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        fetchData(); // Fetch data when the component mounts
    }, []); // Re-fetch data when the page state changes

    // Function to fetch more data for infinite scrolling
    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1); // Increment page number
        let data = await fetch(url);
        let parsedData = await data.json()
        setNewsData(newsData.concat(parsedData.newsData))
        setTotalResults(parsedData.totalResults)
    };

    return (
        <div className="container my-3">
            <h1 style={{ textAlign: 'center', marginTop: "4rem", color: props.mode === "dark" ? "white" : "black" }}>NewsApp - Top {props.category}  Headlines</h1>
            {loading && <Spinner />} {/* Display spinner when loading is true */}

            <InfiniteScroll
                dataLength={newsData.length}
                next={fetchMoreData}
                hasMore={newsData.length !== totalResults} // Enable infinite scrolling if there are more results
                loader={<Spinner />} // Loader while fetching more data
            >
                <div className="container">
                    <div className="row">
                        {/* Map through newsData and render NewsItem component */}
                        {newsData && newsData.map((element, index) => (
                            <div className="col-md-4 my-2" key={index}>
                                <NewsItem
                                    author={element.author}
                                    content={element.content ? element.content.slice(0, 10) : ""}
                                    description={element.description ? element.description.slice(0, 100) : " "}
                                    publishedAt={element.publishedAt}
                                    title={element.title ? element.title.slice(0, 30) : ""}
                                    url={element.url}
                                    urlToImage={element.urlToImage}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default News;
