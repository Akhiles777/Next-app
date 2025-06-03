import Image from 'next/image';

export default function ItemCard({ item }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-3">
                {item.icon}
            </div>
            <h3 className="text-xl font-bold text-center text-white mb-2">{item.title}</h3>
            <p className="text-white text-center mb-4">{item.description}</p>
            <div className="relative h-48">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-md"
                />
            </div>
        </div>
    );
}