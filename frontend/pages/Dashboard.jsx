import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostCart from "../components/PostCart";
import { Plus, LayoutDashboard, Edit, Trash2 } from "lucide-react";

// Mock data for user's posts
// const mockUserPosts = [
//   {
//     id: "1",
//     title: "My First Blog Post",
//     content:
//       "This is my very first blog post on this platform. I'm excited to share my thoughts and ideas with the community. Writing has always been a passion of mine, and I'm looking forward to connecting with like-minded individuals.",
//     author: "Current User",
//     createdAt: "2024-01-20T08:30:00Z",
//   },
//   {
//     id: "2",
//     title: "Learning React: A Journey",
//     content:
//       "Today I want to share my experience learning React. It has been an incredible journey filled with challenges and breakthroughs. The component-based architecture and state management concepts were initially overwhelming, but with practice, everything started to click.",
//     author: "Current User",
//     createdAt: "2024-01-18T15:45:00Z",
//   },
// ];

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));
  const currentUserId = user?.id;
  console.log(currentUserId);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate API call to get user's posts
    const fetchUserPosts = async () => {
      try {
        // Placeholder for API call: GET /api/posts/my-posts
        const res = await fetch("http://localhost:3001/api/posts");
        const data = await res.json();

        if (!res.ok) {
          throw new Error("Falied fetching posts");
        }

        setTimeout(() => {
          setPosts(data);
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error("Error fetching user posts:", error);
        setLoading(false);
      }
    };

    fetchUserPosts();
  }, []);

  const handleEdit = (postId) => {
    navigate(`/edit/${postId}`);
  };

  const handleDelete = async (postId) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        const token = localStorage.getItem("token"); // Assuming you store JWT here

        const res = await fetch(`http://localhost:3001/api/posts/${postId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Send token to backend
          },
        });

        if (!res.ok) {
          const errData = await res.json();
          throw new Error(errData.message || "Failed to delete post");
        }

        // Remove post from UI
        setPosts((prev) => prev.filter((post) => post.id !== postId));

        console.log("Post deleted successfully");
      } catch (error) {
        console.error("Error deleting post:", error.message);
      }
    }
  };

  const handleCreatePost = () => {
    navigate("/create");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <LayoutDashboard className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">My Dashboard</h1>
          </div>
          <button
            onClick={handleCreatePost}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            <Plus className="h-4 w-4 mr-2" />
            New Post
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Edit className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Posts</p>
                <p className="text-2xl font-bold text-gray-900">
                  {posts.length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <LayoutDashboard className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Published</p>
                <p className="text-2xl font-bold text-gray-900">
                  {posts.length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Trash2 className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Drafts</p>
                <p className="text-2xl font-bold text-gray-900">0</p>
              </div>
            </div>
          </div>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Your Posts</h2>

          {posts.length > 0 ? (
            <div className="space-y-6">
              {posts.map((post) => (
                <PostCart
                  key={post.id}
                  post={post}
                  showActions={post.author_id === currentUserId}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
              <Edit className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No posts yet
              </h3>
              <p className="text-gray-500 mb-6">
                Start sharing your thoughts with the world!
              </p>
              <button
                onClick={handleCreatePost}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                <Plus className="h-4 w-4 mr-2" />
                Create Your First Post
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
