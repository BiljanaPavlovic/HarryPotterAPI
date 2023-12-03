/** @format */
import "./books.css";
import React, { useEffect, useState } from "react";
import get from "../../services";
import Book from "./Book";

export default function BookList(props) {
  const [book, setBook] = useState([]);
  const data = props;
  useEffect(() => {
    get().then((data) => {
      setBook(data.data);
    });
    console.log(props);
    console.log(data);
  }, []);
  return (
    <div>
      <h2>Lista knjiga</h2>
      <div className="book-list">
        {book.map((data) => {
          return (
            <Book
              key={data.id}
              title={data.attributes.title}
              author={data.attributes.author}
              cover={data.attributes.cover}
              summary={data.attributes.summary}
            />
          );
        })}
      </div>
    </div>
  );
}
