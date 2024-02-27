"use client"
import { Client, Databases, ID } from "appwrite";
import { useEffect } from "react"; // Assuming you're planning to use useEffect later in your component

export default function Home() {
  useEffect(() => {
    const client = new Client();

    client
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('65c257a4bd88c34a1fd8');

    const databases = new Databases(client);

    const promise = databases.createDocument(
      '65c25a4f96882d747e60',
      '65c25a59ae66c38ce5e4',
      ID.unique(),
      {
        title: "Sample Title",
        contents: "Sample contents for the blog post.",
        slug: "sample-title",
        views: 100,
        is_published: true,
        author: "John Doe"
      }
    );

    promise.then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
  }, []); // Empty dependency array means useEffect will run only once, equivalent to componentDidMount

  return (
    <div>
      NavBar here
    </div>
  );
}
