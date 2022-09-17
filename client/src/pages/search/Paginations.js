import React from 'react';

const Pagination = (props) => {
  const pageNumbers = [];
  const totalPosts=props.totalPosts;
  const postsPerPage=props.postsPerPage;
  const paginate=props.paginate;

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
  );
};

export default Pagination;