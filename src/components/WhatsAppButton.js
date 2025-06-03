import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton({ phone, message }) {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
            <FaWhatsapp className="mr-2 text-xl" />
            Написать в WhatsApp
        </a>
    );
}