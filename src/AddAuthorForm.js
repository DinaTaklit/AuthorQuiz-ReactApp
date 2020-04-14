import React from 'react';
import "./AddAuthorForm.css"


class AuthorFrom extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            imageUrl: '',
            books: [],
            bookTemp: ''
        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddBook = this.handleAddBook.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.onAddAuthor(this.state);
    }
    onFieldChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleAddBook(event){
        this.setState({
            books: this.state.books.concat([this.state.bookTemp]),
            bookTemp:''
        });
    }

    render() {
        return(
        <form  onSubmit={this.handleSubmit}>
            <div className="AddAuthorForm__input">
                <lable htmlFor="name">Name</lable>
                <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange}></input>
            </div>
            <div className="AddAuthorForm__input">
            <label htmlFor="imageUrl">Image URL</label>
            <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.onFieldChange} />
            </div>
            <div className="AddAuthorForm_input">
                <label htmlFor="bookTemp">Books</label>
                {this.state.books.map((book) => <p key={book}>{book}</p>)}
                <input type="text" name="bookTemp" value={this.state.bookTemp} onChange={this.onFieldChange}></input>
                <input type="button" value="+" onClick={this.handleAddBook}></input>
            </div>
            <input type="submit" value="Add"/>
        </form>
        );
    }
}

function AddAuthorForm({match, onAddAuthor}){
    return(
        <div classname="AddAuthorForm">
            <div className="container mt-5">
                <h1>Add Author</h1>
                <AuthorFrom onAddAuthor={onAddAuthor}></AuthorFrom>
            </div>
        </div>
    );
}    

export default AddAuthorForm;