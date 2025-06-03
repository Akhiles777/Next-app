import { FaPhoneAlt, FaWhatsapp, FaCopyright } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-amber-900 text-white py-8 mt-16">
            <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
                {/* Колонка 1 */}
                <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Выкуп СССР</h3>
                    <p className="text-sm text-white">Покупаем винтажные вещи, быстро, честно и с уважением к истории.</p>
                </div>

                {/* Колонка 2 */}
                <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Контакты</h3>
                    <p className="flex items-center justify-center sm:justify-start gap-2 text-sm text-white">
                        <FaPhoneAlt /> <a href="tel:+79268495545" className="underline hover:text-white transition">+7 (926) 849-55-45</a>
                    </p>
                    <p className="flex items-center justify-center sm:justify-start gap-2 text-sm mt-2 text-white">
                        <FaWhatsapp /> <a href="https://wa.me/79268495545" target="_blank" className="underline hover:text-white transition">WhatsApp</a>
                    </p>
                </div>

                {/* Колонка 3 */}
                <div className="flex flex-col items-center sm:items-end">
                    <p className="flex items-center gap-1 text-sm text-white-300">
                        <FaCopyright className="text-sm" /> 2025 Все права защищены
                    </p>
                    <p className="text-xs text-white mt-1">Сделано с любовью к прошлому ✨</p>
                </div>
            </div>

            <div className="border-t border-amber-700 mt-6 pt-4 text-center text-sm text-amber-300">
                Если не нашли нужную вещь — <a href="https://wa.me/79268495545" className="underline hover:text-white transition">напишите нам</a>
            </div>
        </footer>
    );
}
