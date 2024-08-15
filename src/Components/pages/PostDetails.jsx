import { useParams } from "react-router-dom";
const PostDetails = () =>{
  const params = useParams();
  return (
    <div>
      <h2>Post {params.postId} detail</h2>
    </div>
  )
}

export default PostDetails;