import React from "react";
import { Calendar, User, Eye } from "lucide-react";

type Post = {
  id: number;
  title: string;
  content: string;
  author_id: number;
  created_at: string | Date;
};

type PostCart = {
  post: Post;
  showActions: boolean;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

const PostCart = ({
  post,
  showActions = false,
  onEdit,
  onDelete,
}: PostCart) => {
  const formatDate = (dateString: string | Date) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const truncateContent = (content: string, maxLength = 100) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + "...";
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 border border-gray-100">
      <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
        {post.title}
      </h2>

      <p className="text-gray-600 mb-4 leading-relaxed">
        {truncateContent(post.content)}
        {post.content.length > 100 && (
          <span className="text-blue-600 font-medium cursor-pointer hover:text-blue-700 ml-1">
            Read More
          </span>
        )}
      </p>

      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <User className="h-4 w-4" />
            <span>{post.author_id}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(post.created_at)}</span>
          </div>
        </div>
      </div>

      {showActions && (
        <div className="flex items-center space-x-2 pt-3 border-t border-gray-100">
          <button
            onClick={() => onEdit?.(post.id)}
            className="px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete?.(post.id)}
            className="px-3 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-md hover:bg-red-100 transition-colors"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default PostCart;
