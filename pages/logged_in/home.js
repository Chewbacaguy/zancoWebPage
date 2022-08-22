import LayoutUser from "../../components/layout_logged";
import Sidebar from "../../components/sidebar";
import Image from "next/dist/client/image";
import Home from "../../public/img/logged_home.svg";
import Boxes from "../../public/img/boxes.png";

import en from '../../locales/en';
import es from '../../locales/es';
import { useRouter } from 'next/router';

export default function User_Home() {

    const router = useRouter();

    const locale = router.locale;
    const lang = locale === 'es' ? es : en;

    // Variables that need to be colected from zoho
    const userName = "Santiago Torres"
    return (
        <LayoutUser>

        <div class="flex flex-row">
            <Sidebar></Sidebar>

            {/*TO-DO: Con flex, hacer que los 2 botones se pongan encima como flex-col cuando la pantalla es mediana o inferior*/}
            <div class="container mx-auto px-10">

                <div class = "w-full flex flex-col items-center bg-white rounded-xl px-5 sm:px-6 md:px-7 lg:px-8 py-4 my-2 shadow-md">
                    <div class="w-full flex flex-row items-center" >
                        
                        <div class="flex flex-col w-4/12 items-center ">
                            <button class="bg-red-700 hover:bg-red-800 text-white text-2xl font-bold py-2 px-4 border border-red-700 rounded-xl h-40 w-60">
                                {lang.consultOrders}
                            </button>
                            
                            <button class="bg-red-700 hover:bg-red-800 text-white text-2xl font-bold py-2 px-4 border border-red-700 rounded-xl h-40 w-60 mt-2">
                                {lang.createNewOrder}
                            </button>
                        </div>
                        <div className="w-8/12 flex flex-wrap justify-center">
                            <Image class="max-w-full h-auto" src={Home}/>
                        </div>
                    </div> 

                    <div className="w-full justify-center">
                        <Image class="max-w-full h-auto"  src={Boxes}/>
                    </div>
                </div>
            </div>
        </div>
        </LayoutUser>
    );
}

