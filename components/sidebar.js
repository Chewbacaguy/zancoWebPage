import en from '../locales/en';
import es from '../locales/es';
import { useRouter } from 'next/router';

export default function Sidebar() {

    const router = useRouter();

    const locale = router.locale;
    const lang = locale === 'es' ? es : en;

    // Variables that need to be colected from zoho
    const userName = "Elmer Osiel Avila Vargas"
    return (
        <><link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" /><div class="min-h-screen flex flex-row bg-gray-100">
            <div class="flex flex-col w-56 bg-white overflow-hidden">
                <div class="flex flex-col items-center justify-center h-40 ">
                    <h1 class="text-3xl uppercase font-semibold text-red-700 mt-4">ZANCO</h1>
                    <img
                        src="https://pbs.twimg.com/profile_images/1467997254929854470/mDYbXoVl_400x400.jpg"
                        alt="Avatar user"
                        class="w-10 md:w-16 rounded-full mx-auto my-2"
                    />
                    <span class="text-sm font-medium text-black mt-2 px-3">{userName}</span>
                </div>
                <ul class="flex flex-col py-4">
                    <li>
                        <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-black-400"><i class="bx bx-home"></i></span>
                            <span class="text-sm font-medium text-black">{lang.sideBarHome}</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-black-400"><i class="bx bx-box"></i></span>
                            <span class="text-sm font-medium text-black">{lang.sideBarMyOrders}</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-black-400">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                            </span>
                            <span class="text-sm font-medium text-black">{lang.sideBarNewOrder}</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-black-400"><i class="bx bx-chat"></i></span>
                            <span class="text-sm font-medium text-black">{lang.navContact}</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-black-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <span class="text-sm font-medium text-black">{lang.sideBarHelp}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div></>
    );
}

