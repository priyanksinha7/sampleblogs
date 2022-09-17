import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";
import { Container,Row,Button } from "react-bootstrap";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  const [currentPage,setCurrentPage]=useState(1);
const [postsPerPage,setPostsPerPage]=useState(6);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  let indexOfLastPost = currentPage * postsPerPage;
  let indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = [];
  currentPosts=posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => 
  {
    setCurrentPage(pageNumber);
     indexOfLastPost = currentPage * postsPerPage;
     indexOfFirstPost = indexOfLastPost - postsPerPage;
     currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  }
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <Header />
      <h1 id="top">Your goto website for blogging...<hr></hr></h1>
      <Container id="main">
      <Row>
      <div className="home">
        <Posts posts={currentPosts} />
      </div>
      </Row>
      <Row id="pages">
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <Button variant="dark" onClick={() => paginate(number)} href='#' className='page-link'>
              {number}
            </Button>
          </li>
        ))}
      </ul>
      </Row>
      </Container>
      <Sidebar />

    </>
  );
}
