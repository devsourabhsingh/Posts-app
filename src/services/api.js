export async function getPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      cache: "force-cache", // Ensure cache response
    });

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
}

export async function getPostById(id) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        cache: "no-store", // Ensures fresh data on every request (SSR)
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch post");
    }

    return await res.json();
  } catch (error) {
    throw new Error(error.message);
  }
}
