import React, { useState, useEffect } from "react";
import PostCart from "../components/PostCart.js";
import { BookOpen, TrendingUp } from "lucide-react";

type Post = {
  id: number;
  title: string;
  content: string;
  author_id: number;
  created_at: string | Date;
};

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/posts");
        const data = await res.json();

        if (!res.ok) {
          throw new Error("Failed fetching posts");
        }

        setTimeout(() => {
          setPosts(data);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

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
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-12 w-12 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">
              Welcome to Simple Blog
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing stories, insights, and ideas from our community of
            writers.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-gray-900">{posts.length}</h3>
            <p className="text-gray-600">Published Posts</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-gray-900">3</h3>
            <p className="text-gray-600">Active Authors</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-gray-900">1.2K</h3>
            <p className="text-gray-600">Total Reads</p>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Latest Posts
          </h2>
          {posts.length > 0 ? (
            <div className="grid gap-6">
              {posts.map((post) => (
                <PostCart key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No posts available yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
