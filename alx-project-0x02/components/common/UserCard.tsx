import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
    return (
        <div className="border p-4 rounded-md shadow-md">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="mt-2">{email}</p>
            <p className="mt-2">{address}</p>
        </div>
    );
};

export default UserCard;