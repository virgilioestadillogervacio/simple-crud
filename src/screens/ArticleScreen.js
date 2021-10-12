import React, { useState } from 'react';

const ArticleScreen = () => {
  const [data, setData] = useState({title: '', content: '', date: ''});

  let articles = localStorage.getItem('data') || [];



  const setInputHandler = (e) => {
    setData({...data, [e.target.name]: e.target.value});
  }

  const postArticle = () => {

    articles = [...articles, {
      title: data.title,
      content: data.content,
      date: data.content
    }];

    localStorage.setItem('data', JSON.stringify(articles));
  }

  return <>
    <form>
      <label>
        <span>Title</span>
        <input type="text" name="title" value={ data.title } onChange={(e) => setInputHandler(e)}  />
      </label>
      <br />
      <label>
        <span>Content</span>
        <input type="text" name="content" value={ data.content } onChange={(e) => setInputHandler(e)}  />
      </label>
      <br />
      <label>
        <span>Date</span>
        <input type="text" name="date" value={ data.date } onChange={(e) => setInputHandler(e)}  />
      </label>
      <label>
        <button type="button" onClick={ postArticle }>Post</button>
      </label>
    </form>
  </>
}

export default ArticleScreen;