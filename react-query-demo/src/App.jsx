
import { useState } from "react";
import PostsComponent from "./components/PostsComponent";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <nav className="mb-6 space-x-4">
        <button
          onClick={() => setPage("home")}
          className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
        >
          Home
        </button>
        <button
          onClick={() => setPage("posts")}
          className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
        >
          Posts
        </button>
      </nav>

      {page === "home" && <h1 className="text-2xl font-bold">Welcome Home 🚀</h1>}
      {page === "posts" && <PostsComponent />}
    </div>
  );
}

export default App;