import React from 'react';
// import './style.css';

// Stateless Component for both the Search and the SavedBooks Pages.
function ArticleCard(props) {
  return (
    <div className="row mb-5">
      <div className="col-lg-12">
        {props.articles.map(article => (
          <div className="card mt-4"
               key={
                 article._id
                  //  ? article._id
                  //  : book.googleBookId
               }>
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{article.summary}</h6>
              <div className="media">
                <img src={article.img}
                     className="align-self-center mr-3" alt="testing"/>
                {/* <div className="media-body">
                  <h6 className="mt-0">{book.authors.join(', ')}</h6>
                  <p className="mb-0">{book.description}</p>
                  <p className="mb-0">
                    <small className="text-muted">{book.pageCount} pages.</small>
                  </p>
                  <p className="mb-2">
                    <small className="text-muted">Published: {book.publishedDate}</small>
                  </p>
                </div> */}
              </div>
              <a className="btn btn-info mr-1 mt-2" href={article.link} target="_blank"
                 rel="noopener noreferrer">View Article</a>
              {/* <button className={props.buttonType}
                      onClick={props.buttonAction}
                      id={
                        book._id
                          // ? book._id
                          // : book.googleBookId
                      }
              >
                {props.buttonText}
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default ArticleCard;