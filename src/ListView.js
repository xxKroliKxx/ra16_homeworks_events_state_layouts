import ShopItem from "./ShopItem";

export default function ListView({items}) {
    return (
        <div className={'list'}>
            {items.map(item => <ShopItem item={item}/>)}
        </div>
    );
}