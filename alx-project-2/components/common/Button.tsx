import { ButtonProps } from '@/interfaces';



const Button: React.FC<ButtonProps> = ({ size, shape, children, onClick }) => {
    const sizeClasses = {
        small: 'py-1 px-2 text-sm',
        medium: 'py-2 px-4 text-md',
        large: 'py-3 px-6 text-lg',
    };

    const shapeClasses = {
        'rounded-sm': 'rounded-sm',
        'rounded-md': 'rounded-md',
        'rounded-full': 'rounded-full',
    };

    const className = `bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 ${sizeClasses[size]} ${shapeClasses[shape]}`;

    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;