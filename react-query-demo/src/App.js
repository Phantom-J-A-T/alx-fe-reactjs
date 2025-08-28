import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';


const queryClient = new QueryClient();

  function App() {
    return (
      <QueryClientProvider client={queryClient}>
        <PostsComponent />
      </QueryClientProvider>
    );
  }

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
    } = useQuery({
      queryKey: ["posts"], // unique cache key
      queryFn: fetchPosts,
    });
  
    if (isLoading) return <p className="text-blue-500">Loading posts...</p>;
  
    if (isError)
      return <p className="text-red-500">Error: {error.message}</p>;
  
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Posts</h2>
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