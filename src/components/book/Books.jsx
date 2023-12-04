/** @format */
import "./books.css";
import React, { useEffect, useState } from "react";
import Book from "./Book";
import getBooks from "../../services";

export default function BookList(props) {
  const [book, setBook] = useState([]);
  const data = props;
  useEffect(() => {
    getBooks().then((data) => {
      setBook(data.data);
    });

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
