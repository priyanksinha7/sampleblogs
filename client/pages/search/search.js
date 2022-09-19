import axios from "axios";
import React, { useState, Fragment } from "react";
import "./search.css";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { Container,Button,Row,Col, Pagination} from "react-bootstrap";
const Search = () => {
const [keyword, setKeyword] = useState("");
const [flag,setFlag]=useState(0);
const [blogs,setBlogs]=useState([]);
const [currentPage,setCurrentPage]=useState(1);
const [postsPerPage,setPostsPerPage]=useState(6);

  const searchSubmitHandler = async(e) => {
        e.preventDefault();
        
         await axios.get("/search", { params: { keyword } }).then((result)=>
        {
          if(result.data.searchedValues){
          setBlogs(result.data.searchedValues);
          setFlag(1);
          }
          else
          {
            throw new Error("Not Found");
          }
        });
        
  }; 
  if(flag===0)
  {
  return (
    <Fragment>
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Blog ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
          <input type="submit" value="Search" />
      </form>
    </Fragment>
   
  );
  }
  else if(blogs.length===0)
  {
    return (
      <>
       <Container id="error">
      <Row id="heading">
      <h1>  No matching blogs found! &#128528;</h1>
      </Row> 
      </Container>
      <Sidebar/>
      
    </>)
  }
  else
  {
  let indexOfLastPost = currentPage * postsPerPage;
  let indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => 
  {
    setCurrentPage(pageNumber);
     indexOfLastPost = currentPage * postsPerPage;
     indexOfFirstPost = indexOfLastPost - postsPerPage;
     currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);
  }
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(blogs.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
    return (
      <>
       <Container id="main">
       <Row id="heading">
      <h1>Your Search Results...<hr></hr></h1>
      </Row>
      <Row id="blogs">
      <Posts posts={currentPosts} /> 
      </Row>
      <Row id="pages">
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button onClick={() => paginate(number)} href='#' className='page-link'>
              {number}
            </button>
          </li>
        ))}
      </ul>
      </Row>
      </Container>
      <Sidebar/>
      
    </>
    )
  }
};

export default Search;


