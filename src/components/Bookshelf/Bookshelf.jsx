import { useState } from "react";

const Bookshelf = () => {
	const [books, setBooks] = useState([]);

	const [newBook, setNewBook] = useState([{ title: "", author: "" }]);

	// handler functions
	const handleInputChange = (evt) => {
		const { name, value } = evt.target;

		setNewBook((prevBooks) => ({
			...prevBooks,
			[name]: value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault(); // 1. Prevent page reload

		// 2. Add newBook to the books array
		setBooks((prevBooks) => [...prevBooks, newBook]);

		// 3. Reset newBook to empty values
		setNewBook({
			title: "",
			author: "",
		});
	};

	return (
		<div className="bookshelfDiv">
			<div className="formDiv">
				<h3>Add a Book</h3>
				{/* Form will go here */}
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="title"
						placeholder="Title"
						value={newBook.title}
						onChange={handleInputChange}
					/>
					<input
						type="text"
						name="author"
						placeholder="Author"
						value={newBook.author}
						onChange={handleInputChange}
					/>
					<button type="submit">Add Book</button>
				</form>
			</div>
			<div className="bookCardsDiv">{/* Book cards will display here */}</div>
			{books.map((book, index) => (
				<div key={index} className="bookCard">
					<h4>{book.title}</h4>
					<p>by {book.author}</p>
				</div>
			))}
		</div>
	);
};

export default Bookshelf;
