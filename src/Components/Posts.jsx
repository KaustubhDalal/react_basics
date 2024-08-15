import axios from "axios";
import { useEffect,useState } from "react";
const Posts = () => {
  const [post,setPost] = useState([]);
  useEffect(()=>{
    async function fetchPosts(){
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPost(res.data);
    }
    fetchPosts();
  },[]);
  return (
    <div>
      <h1>Posts</h1>
      {post.map((post)=>(
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>

  )
}

export default Posts;