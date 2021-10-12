import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';

import data from '../data.json';
import Style from '../css/top.module.scss';

const TopScreen = () => {
  const [article, setArticle] = useState({title: '', content: '', date: ''});
  const [isUpdating, setIsUpdating] = useState(false);

  const editArticle = (title, content, date) => {

    console.log(title, content, date);
  } 

  const deleteArticle = (id) => {
    console.log('Delete');
  } 

  return <div className={ Style.top }>
    <section className="create-article">
      <NavLink to="/article">Create New Article</NavLink>
    </section>

    <hr />

    <section className={Style.articles}>
      <table >
        <thead>
          <tr>
            <td>Title</td>
            <td>Content</td>
            <td>Date</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map(d => {
              const snippet = d.content.slice(0, 25).concat("...");

              console.log(typeof d.content);
              return (
                <tr key={d.id}>
                  <td>{ d.title }</td>
                  <td>{ snippet }</td>
                  <td>{ d.date }</td>
                  <td>
                    {
                      <div>
                        <button onClick={() => editArticle(d.title, d.content, d.date)}>Update</button>
                        <button onClick={() => deleteArticle(d.id)}>Delete</button>
                      </div>
                    }
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </section>
  </div>
}

export default TopScreen;