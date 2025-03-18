import Search from "../components/searchBar/SearchBar";
import Toast from "../components/toast/Toast";
import styles from "./page.module.css";
import { getPosts } from "../services/api";

export default async function Home() {
  // Fetch posts at build time (SSG)
  const postsData = await getPosts();

  // Show toast on error
  if (postsData.error) {
    return <Toast message={postsData.error} onClose={() => {}} />;
  }

  return (
    <div className={styles.container}>
      {/* Pass fetched posts to the client-side filter post component */}
      <Search posts={postsData} />
    </div>
  );
}