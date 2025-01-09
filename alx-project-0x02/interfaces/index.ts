export interface CardProps {
    title: string;
    content: string;
}

export interface PostModalProps {
    onSave: (title: string, content: string) => void;
    onClose: () => void;
}

export interface ButtonProps {
    size: 'small' | 'medium' | 'large';
    shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
    children: React.ReactNode;
    onClick?: () => void;
}

export interface PostProps {
    title: string;
    content: string;
    userId: number;
}
export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export interface UserProps {
    name: string;
    email: string;
    address: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
}