import { useEffect,useState } from "react";
import axios from "axios";
const PostListWithoutReducer = () => {
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);

  const [post,setPost] = useState([]);
  useEffect(()=>{
    async function fetchPosts(){
        try{
          setLoading(true);
          const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
          setPost(res.data);
          setLoading(false);
        }catch(error){
          setError(error.message);
          setLoading(false);
        }
    }
    fetchPosts();
  },[]);

  return (
    <div>
      {loading ? <h3>Loading...</h3> : error ? <h3>{error}</h3> : post.map((post)=>(
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>

  )
}

export default PostListWithoutReducer;