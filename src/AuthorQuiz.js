import React, { Component } from 'react';
import logo from './logo.svg';
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
function Book({title}){
  return (
    <div className="answer">
      <h4>{title}</h4>
    </div>
  );
}

// Add turn compoenent that will render random questions
function Turn({author, books}){
    return (<div className="row turn" style={{backgroundColor:"white"}}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorimage" alt="Author"></img>
      </div>
      <div className="col-6">
        {books.map((title) => <Book title={title} key={title}/>)}
      </div>
    </div>);
}
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
function AuthorQuiz({turnData}) {
  return (
    <div className="container-fluid">
      <Hero></Hero>
      <Turn {...turnData}></Turn>
      <Continue></Continue>
      <Footer></Footer>
    </div>
  );
}

export default AuthorQuiz;


