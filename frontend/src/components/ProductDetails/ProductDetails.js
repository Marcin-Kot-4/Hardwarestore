import React from 'react';
import {useParams} from "react-router-dom";
import {Rating} from "@mui/material";
import ProductDetailsNavigation from "./ProductDetailsNavigation";
import ProductDetailsDescription from "./ProductDetailsDescription";
import ProductDetailsSpecification from "./ProductDetailsSpecification";
import ProductDetailsReviews from "./ProductDetailsReviews";

const ProductDetails = () => {
    const productDetails = {
        price: 10490, availability: 'dostępny', delivery: '1 dzień roboczy',
    }

    const productMainDetails = [{
        head: 'Dedykowany układ graficzny: ', headDesc: 'NVIDIA GeForce RTX 3050 Ti Laptop GPU',
    }, {
        head: 'Pamięć RAM (zainstalowana): ', headDesc: '16 GB',
    }, {
        head: 'Procesor: ', headDesc: 'Intel Core i7-11800H',
    }, {
        head: 'Przekątna ekranu: ', headDesc: '15.6"',
    }, {
        head: 'System operacyjny: ', headDesc: 'Windows 10 Home'
    }];

    const productRatings = [{
        userName: 'Jerzy', stars: 6, description: 'Jestem bardzo zadowolony z tego sprzętu.'
    }, {
        userName: 'Magdalena', stars: 5, description: 'Jest git.'
    }]

    const productDescription = [
        {
            header: 'Wybierz doskonały wyświetlacz',
            content: 'Umieszczona w górnej części kamera i otoczony z każdej strony niesamowicie cienkimi ramkami wyświetlacz o proporcjach 16:10 zapewniają produktywniejszą i przyjemniejszą pracę. Korzystaj ze wszystkich zalet technologii HDR oraz Dolby Vision™ i ciesz się wyraźnym obrazem, który zachwyca dynamicznym odwzorowaniem odcieni i żywymi kolorami. Obraz wyświetlany na tym notebooku zapewnia niesamowitą jakość, niespotykaną na komputerowych ekranach SDR. Dzięki technologii Dolby Vision jasne obszary są nawet 40 razy bardziej intensywne, a czernie nawet 10 razy głębsze.',
            image: 'https://images.morele.net/description/9300000/9259054_2021_10_28_12_01_24888140155.jpeg',
        },
        {
            header: 'Ucieleśnij swoje najśmielsze pomysły',
            content: 'Procesory Intel® Core™ 11. generacji ma więcej mocy dzięki większej liczbie rdzeni i większej liczbie wątków, pobiera pliki w błyskawicznym tempie za sprawą wyjątkowo szybkiej łączności Wi-Fi, a także potrafi w mgnieniu oka przenosić duże pliki dzięki szybkiemu transferowi danych przez połączenia Thunderbolt 4. Układ został stworzony z myślą o zwiększeniu Twojej kreatywności i przyjemności podczas pracy nad tym, co kochasz. Dzięki 8 rdzeniom i 16 wątkom procesor Intel® Core™ 11. generacji zapewnia wydajność na poziomie komputera stacjonarnego i wspiera działanie zaawansowanych programów kreatywnych (2D i 3D). Dzięki dyskowi SSD o pojemności do 2 TB system uruchamia się i wznawia działanie w zaledwie kilka sekund. Dodatkowo, do 64 GB pamięci operacyjnej o częstotliwości taktowania 3200 MHz zapewnia błyskawiczną obsługę wielu zadań jednocześnie, nawet jeśli korzystasz z wymagających aplikacji.',
            image: 'https://images.morele.net/description/9300000/9259054_2021_10_28_12_01_251800414757.jpeg',
        },
        {
            header: 'Creator Edition - jeszcze więcej możliwości',
            content: 'Notebook XPS 15 Creator Edition został wyposażony w niezbędne narzędzia do pracy twórczej po to, aby była ona jeszcze szybsza i przyjemniejsza. Dzięki temu w pełni zrealizujesz swoją kreatywność. Każda karta graficzna NVIDIA jest wspomagana przez unikalne i bezpłatne sterowniki NVIDIA Studio, które pozwalają maksymalnie wykorzystać możliwości aplikacji twórczych. Sterowniki powstają we współpracy z deweloperami aplikacji, takimi jak Adobe czy Autodesk i zwiększają możliwości i wydajność graficzną. Nowy XPS jest sprawdzony, niezawodny i wszechstronnie przetestowany, aby umożliwić realizację najbardziej ambitnych projektów.',
            image: 'https://images.morele.net/description/9300000/9259054_2021_10_28_12_01_251769210466.jpeg',
        },
        {
            header: 'Mistrzowskie wykonanie',
            content: 'Czarna podpórka pod nadgarstki wykonana z włókna węglowego jest inspirowana przemysłem lotniczym, zapewniając maksymalną wytrzymałość i minimalną wagę. Wszystko starannie dopracowano, zwłaszcza podświetlanie. Inkrustowane logo jest wycinane laserowo ze stali nierdzewnej i ręcznie wkładane do obrobionego, wyciętego konturu.',
            image: 'https://images.morele.net/description/9300000/9259054_2021_10_28_12_01_25341059253.jpeg',
        },
        {
            header: 'Realistyczny dźwięk',
            content: 'Dzięki czterem głośnikom i technologii dźwięku 3D Waves Nx® możesz cieszyć się doskonałym odwzorowaniem dźwięku w 3D. Jakość dźwięku podczas słuchania muzyki, oglądania filmu lub rozgrywki jest tak dobra, że zdaje się zaprzeczać prawom fizyki. Notebook XPS 15 jako pierwszy w historii został wyposażony w technologię dźwięku 3D Waves NX®. O świetną jakość zadbał zdobywca wielu nagród Grammy.',
            image: 'https://images.morele.net/description/9300000/9259054_2021_10_28_12_01_25842295955.jpeg',
        },
        {
            header: 'Stała gotowość do pracy',
            content: 'Masz do wyboru dwie bezpieczne, spersonalizowane metody logowania. Aby odblokować notebook XPS, możesz skorzystać z bezpiecznej technologii rozpoznawania twarzy za pomocą kamery na podczerwień z obsługą funkcji Windows Hello bądź czytnika linii papilarnych wbudowanego w przycisk zasilania, który umożliwia zalogowanie się przez zwykłe przyłożenie palca.',
            image: 'https://images.morele.net/description/9300000/9259054_2021_10_28_12_01_251685449602.jpeg',
        },
    ]

    const productSpecification = [
        {
            header: 'Producent',
            content: 'Dell',
        },
        {
            header: 'Kod producenta',
            content: 'DJY6Y',
        },
        {
            header: 'Typ',
            content: 'Laptop',
        },
        {
            header: 'Zastosowanie',
            content: 'Biznesowe',
        },
        {
            header: 'Kolor',
            content: 'Srebrno-czarny',
        },
        {
            header: 'Procesor',
            content: 'Intel Core i7-1180H',
        },
        {
            header: 'Taktowanie procesora (bazowe/turbo)',
            content: '1.9 GHz / 4.6 GHz',
        },
        {
            header: 'Liczba rdzeni / wątków',
            content: '8/16',
        },
        {
            header: 'Pamięć RAM (zainstalowana)',
            content: '16 GB',
        },
        {
            header: 'Pamięć RAM (maksymalna)',
            content: '32 GB',
        },
        {
            header: 'Typ pamięci RAM',
            content: 'DDR4',
        },
        {
            header: 'Częstotliwość taktowania pamięci',
            content: '3200 MHz',
        },
        {
            header: 'Ilość gniazd pamięci (ogółem/wolne)',
            content: '2/0',
        },
        {
            header: 'Dysk SSD M.2 PCIe',
            content: '512 GB',
        },
        {
            header: 'Zintegrowany układ graficzny',
            content: 'Intel UHD Graphics Xe',
        },
        {
            header: 'Dedykowany układ graficzny',
            content: 'NVIDIA GeForce RTX 3050 Ti Laptop GPU',
        },
        {
            header: 'Pamięć karty graficznej',
            content: '4 GB',
        },
        {
            header: 'Typ pamięci',
            content: 'GDDR6',
        },
        {
            header: 'Przekątna ekranu',
            content: '15.6"',
        },
        {
            header: 'Rozdzielczość',
            content: '1920 x 1200 (WUXGA)',
        },
        {
            header: 'Powłoka matrycy',
            content: 'Błyszcząca',
        },
        {
            header: 'Typ matrycy',
            content: 'IPS',
        },
        {
            header: 'Częstotliwość odświeżania',
            content: '60 Hz',
        },
    ]

    let {product} = useParams();

    let totalRatings = 0;
    productRatings.forEach(({stars}) => totalRatings += stars)
    const averageRating = totalRatings / productRatings.length;

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (<>
        <div className="mt-16 flex justify-center font-[Roboto]">
            <div className="grid flex-col w-10/12 justify-center">
                <div className="grid grid-container grid-cols-4 gap-4">
                    <div className="col-span-2 row-span-2">
                        <img src="https://images.morele.net/i1064/9259054_0_i1064.jpg" alt="product"/>
                    </div>
                    <div className="col-span-2 row-span-2">
                        <h1 className="font-normal mt-4 text-3xl mb-2">{product.replace(/-/g, ' ').replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}</h1>
                        <div className="grid">
                            <Rating value={averageRating} readOnly precision={0.1} max={6} size="small"/>
                        </div>
                        <a href="#Ratings" className="grid w-16">
                            {productRatings.length > 0 ? <span
                                    className="text-gray-500 text-sm cursor-pointer font-normal">({productRatings.length} Opinie)</span> :
                                <span></span>}
                        </a>
                        <div className="flex mt-6">
                            <div className="border-r-2 w-6/12">
                                <ul>
                                    {productMainDetails.map((productMainDetails) => (<li>
                                        <h1 className="text-sm font-light">{productMainDetails.head}</h1>
                                        <h1 className="text-sm font-normal mb-2">{productMainDetails.headDesc}</h1>
                                    </li>))}
                                </ul>
                            </div>
                            <div className="w-5/12 flex-col text-right my-auto">
                                <h1 className="text-2xl font-normal mb-2">{productDetails.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ', ')} zł</h1>
                                <button
                                    className="hover:bg-primary hover:text-white bg-green-600 text-white ml-auto px-6 py-2 font-normal block">Dodaj
                                    do koszyka
                                </button>
                                <h1 className="text-green-600 mt-2">{capitalizeFirstLetter(productDetails.availability)}</h1>
                                <h1 className="text-sm font-light inline">Dostawa:</h1>
                                <h1 className="text-sm font-normal inline">{productDetails.delivery}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ProductDetailsNavigation/>
        <ProductDetailsDescription productDescription={productDescription}/>
        <ProductDetailsSpecification productSpecification={productSpecification}/>
        <ProductDetailsReviews productReviews={productRatings} averageRating={averageRating}/>
    </>);
};

export default ProductDetails;
