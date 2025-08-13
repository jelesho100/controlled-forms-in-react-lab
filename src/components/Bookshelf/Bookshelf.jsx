import { useState } from "react";

const Bookshelf = () => {
    // State for the list of books
    const [books, setBooks] = useState([
        { title: "Think and Grow Rich", author: "Napoleon Hill" },
        { title: "Make Today Count", author: "John C. Maxwell" },
    ]);

    // State for the new book form inputs
    const [newBook, setNewBook] = useState({
        title: "",
        author: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "title") {
            setNewBook({ ...newBook, title: value });
        } else if (name === "author") {
            setNewBook({ ...newBook, author: value });
        }

    }

    //handle form submot
    const handleSubmit = (event) => {
        event.preventDefault(); //stops page refresh
        setBooks([...books, newBook]); //add new item to the list

        setNewBook({ title: "", author: "", }); //clear the form
    }





    return (
        <>

            <div>
                <h2>Book Shelf </h2>

                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='title'
                        value={newBook.title}
                        onChange={handleInputChange}
                        placeholder="Enter title"
                    />
                    <input
                        type='text'
                        name='author'
                        value={newBook.author}
                        onChange={handleInputChange}
                        placeholder="Enter author"
                    />
                    <button type="submit"> Add Book </button>
                </form>
                <ul>
                    {books.map((book, idx) => (
                        <li key={idx}>
                            {book.title} - {book.author}
                        </li>
                    ))}
                </ul>

            </div>
        </>
    );
}

export default Bookshelf;

