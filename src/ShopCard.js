export default function ShopCard({card}) {
    return (
        <div className={'card'}>
            <span className={'card-name'}>{card.name}</span>
            <span className={'card-color'}>{card.color}</span>
            <img className={'card-img'} src={card.img}/>
            <div className={'card-footer'}>
                <span className={'card-price'}>{'$' + card.price}</span>
                <button className={'card-button'}> {'add to cart'} </button>
            </div>
        </div>
    );
}