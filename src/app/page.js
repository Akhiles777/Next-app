import Image from 'next/image';
import WhatsAppButton from '@/components/WhatsAppButton';
import { FaClock, FaBook, FaWineGlassAlt, FaPhotoVideo } from 'react-icons/fa';

import { FiArrowRight } from 'react-icons/fi';
import Link from "next/link";

import MenuSection from "@/app/MenuSection/page";
import styles from "@/app/MenuSection/MenuSection.module.css";
import './globals.css'

import CategoriesPage from "@/app/categories/page";


export const metadata = {
    title: 'Выкуп винтажных вещей СССР | Часы, фототехника, хрусталь',
    description: 'Покупаем винтажные вещи СССР: часы, фототехнику, хрусталь, посуду и предметы интерьера. Бесплатная оценка и выезд по городу. Продайте легко и выгодно!',
    keywords: [
        'выкуп винтажных вещей',
        'винтаж СССР',
        'купим часы СССР',
        'фототехника СССР',
        'хрусталь СССР',
        'антиквариат',
        'продать старые вещи',
        'винтажные предметы интерьера'
    ],
    openGraph: {
        title: 'Выкуп винтажных вещей СССР | Часы, фототехника, хрусталь — YourBrand',
        description: 'Честный и быстрый выкуп винтажных вещей советского периода. Работаем по городу, выезд бесплатно!',
        images: [
            {
                url: '/images/Watch.jpg',
                width: 800,
                height: 600,
                alt: 'Часы СССР',
            }
        ],
        type: 'website',
        locale: 'ru_RU',
    },
    robots: 'index, follow',
};





const featuredItems = [
    {
        id: 1,
        title: "Часы СССР",
        description: "Купим наручные, настенные и настольные часы.",
        icon: <FaClock className="text-3xl text-amber-800" />,
        image: "/images/Watch.jpg",
    },

    {
        id: 4,
        title: "Фототехника СССР",
        description: " Купим Фотоаппараты, объективы, фотопринадлежности СССР.",
        icon: <FaPhotoVideo className="text-3xl text-amber-800" />,
        image: "/images/photo-apparat.jpg",
    },

    {
        id: 4,
        title: "Хрусталь и стекло СССР",
        description: "Выкупаем цветной хрусталь, вазы, сервизы советского периода.",
        icon: <FaWineGlassAlt className="text-3xl text-amber-800" />,
        image: "/images/Decorating.jpg",
    },
];

export default function Home() {
    return (
        <div className="  container mx-auto px-4 py-8">


            <div className='book-bg'>

                <section className=" ml-5 pt-10 sm:pt-28">
                    <h1 className="text-4xl font-semibold text-white  leading-10">
                        Куплю советские Книги,
                        <h3>Часы Фарфор Бижутерию</h3>
                        <h3>и многое другое!</h3>
                    </h1>


                    <a href="https://wa.me/79268495545" target="_blank" rel="noopener" className={styles.btn2}>Связаться
                        по
                        WhatsApp</a>
                </section>

            </div>


            <MenuSection/>

            {/*
            <section className="mb-24 mt-4 bg-gradient-to-br from-[#222121] to-[#2e2b28] p-8 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold text-center text-white mb-10">Почему выбирают нас?</h2>

                <div className="grid md:grid-cols-3 gap-8 text-white">
                    <div
                        className="p-6 bg-[#1f1d1c] rounded-xl hover:bg-[#2b2825] transition-all duration-300 shadow-md">
                        <h3 className="text-xl font-semibold mb-3">💸 Честная оценка</h3>
                        <p className="text-sm text-gray-300">
                            Мы не занижаем цену. Оцениваем с учётом актуального спроса и состояния вещей.
                        </p>
                    </div>

                    <div
                        className="p-6 bg-[#1f1d1c] rounded-xl hover:bg-[#2b2825] transition-all duration-300 shadow-md">
                        <h3 className="text-xl font-semibold mb-3">🚗 Быстрый выезд</h3>
                        <p className="text-sm text-gray-300">
                            Бесплатно приедем по городу и области, без лишних формальностей и задержек.
                        </p>
                    </div>

                    <div
                        className="p-6 bg-[#1f1d1c] rounded-xl hover:bg-[#2b2825] transition-all duration-300 shadow-md">
                        <h3 className="text-xl font-semibold mb-3">♻️ Удобно и экологично</h3>
                        <p className="text-sm text-gray-300">
                            Вещи получат вторую жизнь. Вы освобождаете место — и ещё получаете деньги.
                        </p>
                    </div>
                </div>
            </section>*/}

            <section className="mb-24 mt-4 bg-gradient-to-br from-[#222121] to-[#2e2b28] p-8 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold text-center text-white mb-10">Почему выбирают нас?</h2>

                <div className="grid md:grid-cols-3 gap-8 text-white">
                    <div
                        className="p-6 bg-[#1f1d1c] rounded-xl hover:bg-[#2b2825] transition-all duration-300 shadow-md">
                        <h3 className="text-xl font-semibold mb-3">💸 Честная оценка</h3>
                        <p className="text-sm text-gray-300">
                            Мы не занижаем цену. Оцениваем с учётом актуального спроса и состояния вещей.
                        </p>
                    </div>

                    {/* Заменённый блок */}
                    <div
                        className="p-6 bg-[#1f1d1c] rounded-xl hover:bg-[#2b2825] transition-all duration-300 shadow-md text-center">
                        <h3 className="text-xl font-semibold mb-3">📞 Связь с нами</h3>
                        <p className="text-sm text-gray-300 mb-4">
                            Напишите нам в WhatsApp или позвоните — мы всё расскажем и приедем в удобное для вас время.
                        </p>

                    </div>

                    <div
                        className="p-6 bg-[#1f1d1c] rounded-xl hover:bg-[#2b2825] transition-all duration-300 shadow-md">
                        <h3 className="text-xl font-semibold mb-3">♻️ Удобно и экологично</h3>
                        <p className="text-sm text-gray-300">
                            Вещи получат вторую жизнь. Вы освобождаете место — и ещё получаете деньги.
                        </p>
                    </div>
                </div>
            </section>


            <section className="mb-12">
                <h2 className="text-2xl mb-12 ml-0 sm:ml-10 text-center sm:text-left sm font-semibold text-white  sm:text-3xl ">Что
                    мы покупаем?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {featuredItems.map((item) => (
                        <div
                            key={item.id}
                            className="cursor-pointer p-6 rounded-2xl bg-gradient-to-br from-[#1c1b1b] to-[#2d2420] shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 group border-none "
                        >
                            <div
                                className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-125">
                                {item.icon}
                            </div>
                            <h3 className="text-xl text-test font-bold mb-2 transition-colors duration-300 group-hover:text-accent">
                                {item.title}
                            </h3>
                            <p className="text-white font-semibold mb-4 transition-opacity duration-300 group-hover:opacity-90">
                                {item.description}
                            </p>
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={300}
                                height={100}
                                className="rounded-md mx-auto w-300 h-50 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="flex justify-between mt-4">
                                <h3 className="text-black ml-4 mt-1">
                                    <a
                                        className="text-test hover:underline font-medium flex items-center gap-1 transition-all duration-300 group-hover:text-accent"
                                        href='/categories'
                                    >
                                        Смотреть весь каталог <FiArrowRight
                                        className="group-hover:translate-x-1 transition-transform"/>
                                    </a>
                                </h3>
                            </div>
                        </div>
                    ))}

                </div>
            </section>





            <div className={styles.cta}>
                <h3>🎯 Освободите своё пространство</h3>
                <p>Мы приедем, всё заберём, честно оценим и выкупим. Просто напишите нам в WhatsApp или позвоните.</p>
                <a href="https://wa.me/79268495545" target="_blank" rel="noopener" className={styles.btn}>Связаться по
                    WhatsApp</a>
            </div>
        </div>
    );
}




