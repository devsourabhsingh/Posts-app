"use client"; // Mark this as a Client Component
import { useState } from "react";
import Link from "next/link";
import styles from "./SearchBar.module.css";
import Card from "../card/Card";

export default function Search({ posts }) {
  const [search, setSearch] = useState("");

  // Filter posts dynamically on the client side
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.searchInput}
      />

      <div className={styles.cardWrapper}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Link key={post.id} href={`/posts/${post.id}`}>
              <Card title={post.title} />
            </Link>
          ))
        ) : (
          <p className={styles.noResults}>No posts found.</p>
        )}
      </div>
    </div>
  );
}