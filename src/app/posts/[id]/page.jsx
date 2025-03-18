import { notFound } from "next/navigation";
import Toast from "../../../components/toast/Toast";
import styles from "./PostDetail.module.css";
import { getPostById } from "../../../services/api";

export default async function PostDetail({ params }) {
  const { id } = await params;

  if (!id) {
    return notFound(); // If Id is missing, return 404
  }

  try {
    const post = await getPostById(id);

    if (!post) {
      return notFound(); // If post is not found, return 404
    }

    return (
      <>
        <h1 className={styles.pageHeading}>Post Details</h1>
        <div className={styles.postContainer}>
          <h2 className={styles.postTitle}>{post.title}</h2>
          <p className={styles.postBody}>{post.body}</p>
        </div>
      </>
    );
  } catch (error) {
    return <Toast message="Failed to load post details" onClose={() => {}} />;
  }
}
