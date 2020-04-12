import React, { Component } from 'react';
import propTypes from 'prop-types';
import './AuthorQuiz.css';
import './bootstrap.min.css';

// The hero par 
function Hero(){
  return (
    <div className="row"> 
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book written by the author shown</p>
      </div>
    </div>
  );
}

// Add the book componenet 
function Book({title, onClick}){
  return (
    <div className="answer" onClick={()=>{onClick(title);}}>
      <h4>{title}</h4>
    </div>
  );
}

// Add turn compoenent that will render random questions
function Turn({author, books, highlight, onAnswerSelected}){
    // Add the function that map the starte of the answer to corespondant color
    function highlightToBgColor(highlight){
      const mapping = {
        'none':'',
        'correct':'green',
        'wrong':'red'
      };
      return mapping[highlight];
    }

    return (<div className="row turn" style={{backgroundColor:highlightToBgColor(highlight)}}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorimage" alt="Author"></img>
      </div>
      <div className="col-6"> 
        {books.map((title) => <Book title={title} key={title} onClick={onAnswerSelected} />)}
      </div>
    </div>);
}
// Add validation layer
Turn.propTypes = {
  author: propTypes.shape({
    name: propTypes.string.isRequired,
    imageUrl: propTypes.string.isRequired,
    imageSource: propTypes.string.isRequired,
    books: propTypes.arrayOf(propTypes.string).isRequired
  }),
  books: propTypes.arrayOf(propTypes.string).isRequired,
  onAnswerSelected: propTypes.func.isRequired,
  highlight: propTypes.string.isRequired
};
// Add continue compoenent
function Continue(){
  return (<div></div>);
}

// Add the footer
function Footer(){
  return (<div id="footer" className='row'>
    <div className="col-12 text-center">
      <p className="text-muted credit"> All images are from
      <a href="http://commons.wikimedia.org/wiki/Main_Page">Wikemedia Commons</a> and are in the public domain
      </p>  
    </div>
  </div>);
}

// The Author Quiz global component 
function AuthorQuiz({turnData,highlight,onAnswerSelected}) {
  return (
    <div className="container-fluid">
      <Hero></Hero>
      <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}></Turn>
      <Continue></Continue>
      <Footer></Footer>
    </div>
  );
}

export default AuthorQuiz;


