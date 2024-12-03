import Image from "next/image";

type CardProps = {
    imageSrc: string;
    title: string;
    category: string;
    rating: number;
    lessons: number;
    duration: string;
    price: number;
    discountedPrice: number;
};

export default function Card({
    imageSrc,
    title,
    category,
    rating,
    lessons,
    duration,
    price,
    discountedPrice,
}: CardProps) {
    return (
        <div className="border rounded-lg shadow-md p-4 max-w-sm">
            <Image
                src={imageSrc}
                alt={title}
                width={400}
                height={200}
                className="rounded-md"
            />
            <div className="mt-4">
                <p className="text-xs text-gray-500">{category}</p>
                <h3 className="text-lg font-bold mt-2">{title}</h3>
                <p className="text-yellow-500">⭐ {rating} / 5.0</p>
                <p className="text-sm text-gray-500">
                    {lessons} lessons • {duration}
                </p>
                <div className="flex justify-between items-center mt-4">
                    <p className="line-through text-gray-400">${price}</p>
                    <p className="text-green-600 font-bold">${discountedPrice}</p>
                </div>
            </div>
        </div>
    );
}
