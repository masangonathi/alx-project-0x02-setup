import React, { useState } from 'react';
import { PostModalProps } from '@/interfaces';


const PostModal: React.FC<PostModalProps> = ({ onSave, onClose }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSave = () => {
        onSave(title, content);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
            <div className="bg-gray-100 rounded-lg shadow-xl p-8 w-full max-w-lg">
            <h2 className="text-3xl font-semibold mb-6">Create Post</h2>
            <form>
                <div className="mb-6">
                <label htmlFor="formTitle" className="block text-gray-800">Title</label>
                <input
                    type="text"
                    id="formTitle"
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-2 block w-full px-4 py-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-base"
                />
                </div>
                <div className="mb-6">
                <label htmlFor="formContent" className="block text-gray-800">Content</label>
                <textarea
                    id="formContent"
                    rows={4}
                    placeholder="Enter content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="mt-2 block w-full px-4 py-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-base"
                />
                </div>
            </form>
            <div className="modal-footer flex justify-end space-x-3">
                <button onClick={onClose} className="bg-gray-600 text-white px-5 py-2 rounded-lg">Close</button>
                <button onClick={handleSave} className="bg-blue-600 text-white px-5 py-2 rounded-lg">Save Changes</button>
            </div>
            </div>
        </div>
    );
};

export default PostModal;