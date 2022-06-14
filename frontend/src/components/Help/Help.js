import React from 'react';

const Help = () => {
    return (
        <div className="grid flex-col w-full justify-center font-[Roboto]">
            <h1 className="mt-8 mb-6 font-bold text-2xl">Jak kupować?</h1>
            <div className="mb-2 font-normal text-base grid flex-col ml-2">
                <span> 01. Należy wybrać kategorię, która Cię interesuje z znajdującego się powyżej menu.</span>

                <span> 02. Po najechaniu na wybraną kategorię kursorem wyświetlą się podkategorię. Wybierz tą, którą potrzebujesz.</span>

                <span> 03. Oto lista produktów pasująca do wybranej kategorii.
                Po lewej stronie znajdują się filtry, które pomogą znaleźć Ci ten idealny produkt dla Ciebie.</span>

                <span>04. Po znalezieniu porduktu, kliknij na niego.</span>

                <span>05. Oto twój produkt, poniżej znajdziesz jego opis, specyfikację oraz opinie o nim.</span>

                <span>06. Jeśli chcesz kupić ten produkt dodaj go do koszyka klikając na przycisk
                    <span className="font-bold">"Dodaj do koszyka".</span></span>

                <span>07. Natępnie przejdź do koszyka.</span>

                <span>08. Jeśli w koszyku znajdują się produkty które chcesz kupić to przejdź dalej klikając na przycisk
                    <span className="font-bold"> "Przejdź do dostawy".</span></span>

                <span>09. Wybierz sposób płatności i dostawy.</span>

                <span>10. Jeśli wszystko już zostało przez Ciebie wybrane to kliknij przycisk
                    <span className="font-bold">"Zamów".</span></span>
            </div>
            <div className="mt-2 mb-8">
                <h1 className="font-bold text-2xl">Gotowe.</h1>
                <span>Twoje zamówienie czeka na opłacenie.</span>
            </div>
        </div>
    );
};

export default Help;
