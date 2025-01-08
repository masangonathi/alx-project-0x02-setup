import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
    return (
        <div className="border p-4 rounded-md shadow-md">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="mt-2">{content}</p>
            <p className="mt-4 text-gray-500">User ID: {userId}</p>
        </div>
    );
};

export default PostCard;