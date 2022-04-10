export default function ShopItem({item}) {
    return (
        <div className={'item'}>
            <img className={'list-img'} src={item.img}/>
            <span className={'card-name'}>{item.name}</span>
            <span className={'card-color'}>{item.color}</span>
            <span className={'card-price'}>{'$' + item.price}</span>
            <button className={'card-button'}> {'add to cart'} </button>
        </div>
    );
}