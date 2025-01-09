import React from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import Header from '@/components/layout/Header';
import { useState } from 'react';


export default function HomePage() {
    const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSavePost = (title: string, content: string) => {
        setPosts([...posts, { title, content }]);
        setIsModalOpen(false);
    };

    return (
        <div>
            <Header />
            <h1>Welcome to the Home Page</h1>
            <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Post</button>
            {posts.map((post, index) => (
                <Card key={index} title={post.title} content={post.content} />
            ))}
            {isModalOpen && <PostModal onSave={handleSavePost} onClose={() => setIsModalOpen(false)} />}
        </div>
    );
}