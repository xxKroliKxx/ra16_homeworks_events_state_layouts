import ShopCard from "./ShopCard";

export default function CardsView({cards}) {
    return (
        <div className={'cards'}>
            {cards.map(card => <ShopCard card={card}/>)}
        </div>
    );
}