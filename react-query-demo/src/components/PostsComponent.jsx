import { useQuery } from "@tanstack/react-query";

// Fetcher function
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

export default function PostsComponent() {
  const {
    data: posts,
    error,
    isLoading,
    isError,
    refetch,        // manual refetch function
    isFetching,     // indicates background refetching
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5,     // 5 minutes: cache considered "fresh"
    cacheTime: 1000 * 60 * 10,    // 10 minutes: cache stays in memory
    refetchOnWindowFocus: true,   // refetch when you tab back to the window
    keepPreviousData: true,       // keep showing old data while fetching new
  });

  if (isLoading) return <p className="text-blue-500">Loading posts...</p>;

  if (isError)
    return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 flex items-center justify-between">
        Posts
        <button
          onClick={() => refetch()}
          className="px-3 py-1 text-sm bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
        >
          Refresh {isFetching && <span className="ml-1">🔄</span>}
        </button>
      </h2>
      <ul className="space-y-3">
        {posts.slice(0, 10).map((post) => (
          <li
            key={post.id}
            className="p-3 border rounded-lg shadow-sm bg-white"
          >
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
