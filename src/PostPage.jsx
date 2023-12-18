import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <Link className=".editButton" to={`/edit/${post.id}`}>
              <button className="editButton">Edit Post</button>
            </Link>
            <button
              className="deleteButton"
              onClick={() => handleDelete(post.id)}
            >
              Delete Post
            </button>
          </>
        )}
        {!post && (
          <>
            <h2>Post Not Found</h2>
            <p>Well, that disappointing.</p>
            <p>
              <Link to="/">Visit Our Homepage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

PostPage.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      datetime: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
export default PostPage;
