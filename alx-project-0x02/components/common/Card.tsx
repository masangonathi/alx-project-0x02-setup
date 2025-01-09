import { CardProps } from "@/interfaces";

const Card = ({title, content }: CardProps) => (
    <div className="broder p-4 rounded shadow">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{content}</p>
    </div>
);

export default Card;