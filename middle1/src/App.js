import React, {useState, useEffect} from "react";
import './App.css';


function App() {
    const url = 'http://semeynaya-kuchka.ru/wp-content/uploads/2019/08/kartinki-frukty-';
    const [openCard, setOpenCard] = useState([])
    const [matched, setMatched] = useState([])
    const fruits = [
        {id: '44', name: 'orange'},
        {id: '23', name: 'lemon'},
        {id: '35', name: 'apple'},
        {id: '46', name: 'kivy'},
        {id: '45', name: 'kokos'},
        {id: '6', name: 'granate'},
        {id: '65', name: 'cherry'},
        {id: '68', name: 'strawberry'},
        {id: '9', name: 'raspberries'},
        {id: '60', name: 'mandarin'},
        {id: '38', name: 'lime'},
        {id: '1', name: 'lemon-yellow'},
        {id: '13', name: 'apple-red'},
        {id: '14', name: 'pear'},
        {id: '52', name: 'plum'},
        {id: '15', name: 'avokado'},
        {id: '5', name: 'persimmon'},
        {id: '10', name: 'rowan'},
    ];
    const pairOfFruits = [...fruits, ...fruits];


    useEffect(() => {
        const firstMatch = pairOfFruits[openCard[0]];
        const secondMatch = pairOfFruits[openCard[1]];

        if (secondMatch && firstMatch.id === secondMatch.id) {
            setMatched([...matched, firstMatch.id])
        }
        if (openCard.length === 2) setTimeout(() => setOpenCard([]), 1000);

    }, [openCard])


    const handleFlip = index => {
        setOpenCard((opened) => [...opened, index])
    }

    return (
        <div className="App">
            <div className="cards">
                {pairOfFruits.map((fruit, index) => {

                    let flipCard;
                    flipCard = false;
                    if (openCard.includes(index)) flipCard = true;
                    if (matched.includes(fruit.id)) flipCard = true;

                    return (
                        <div className={`fruit-card ${flipCard ? "flipped" : ""}`} key={index}
                             onClick={() => handleFlip(index)}>
                            <div className="inner">
                                <div className="front">
                                    <img src={`${url}${fruit.id}.jpg`}
                                         width="80"
                                         height="80"
                                    />
                                </div>
                                <div className="back"></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
