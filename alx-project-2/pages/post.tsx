import { useEffect, useState } from "react";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { Post } from "@/interfaces";

export default function PostsPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    const handleSavePost = (title: string, content: string) => {
        const newPost = {
            id: posts.length + 1,
            title,
            body: content,
            userId: 1,
        };
        setPosts([...posts, newPost]);
        setIsModalOpen(false);
    };
    return (
        <div>
            <Header />
            <h1>Posts Page</h1>
            <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Post</button>
            {isModalOpen && <PostModal onSave={handleSavePost} onClose={() => setIsModalOpen(false)} />}
            <h2 className="mt-4 text-xl font-bold">All Posts</h2>
            <div className="mt-4">
                {posts.map(post => (
                    <PostCard key={post.id} title={post.title} content={post.body} userId={post.userId} />
                ))}
            </div>
        </div>
    );
}