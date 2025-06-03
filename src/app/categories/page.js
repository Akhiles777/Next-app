
import Link from "next/link";
import {categories} from "@/data/categories";

import Image from "next/image";

import styles from "@/app/MenuSection/MenuSection.module.css";

import '../globals.css'


export const metadata = {
    title: 'Категории товаров'
}

export default function CategoriesPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-test mb-8">Категории товаров</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                    <div key={category.id}
                         className='cursor-pointer p-6 rounded-2xl bg-gradient-to-br from-[#1c1b1b] to-[#2d2420] shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 group border-none '>
                        <h2 className="text-xl  text-test font-semibold mb-2">{category.title}</h2>
                        <p className="text-white">{category.description}</p>

                        <div className="relative w-full h-72 mt-4 rounded-md overflow-hidden">
                            <Image
                                src={category.image}
                                alt={category.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>


                    </div>
                ))}
                <div
                    className="p-6 rounded-2xl bg-gradient-to-br from-[#1f1e1d] to-[#292624] shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 text-white text-center animate-fade-in-up"
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 transition-opacity duration-500 ease-in-out opacity-90 text-test hover:opacity-100">
                        Не нашли нужную категорию?
                    </h3>
                    <p className="text-md md:text-lg mb-6 text-gray-300 max-w-2xl mx-auto transition-opacity duration-700 ease-in-out hover:opacity-95">
                        Мы выкупаем множество винтажных вещей: если у вас есть предмет, которого нет в списке —
                        свяжитесь с нами, и мы обязательно его рассмотрим!
                    </p>
                    <a
                        href="https://wa.me/79268495545"
                        target="_blank"
                        rel="noopener"
                        className="mt-16 inline-block bg-amber-700 hover:bg-amber-800 transition-all duration-300 px-6 py-3 rounded-lg font-semibold text-white shadow-md hover:shadow-lg hover:-translate-y-1"
                    >
                        Написать в WhatsApp
                    </a>

                </div>


            </div>
        </div>
    );
}