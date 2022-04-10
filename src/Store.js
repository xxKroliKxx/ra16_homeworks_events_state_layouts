import {useState} from "react";
import IconSwitch from './IconSwitch'
import CardsView from "./CardsView";
import ListView from "./ListView";

const StateModule = 'card'
const StateList = 'list'
const IconModule = 'view_module'
const IconList = 'view_list'

export default function Store() {
    let [state, setState] = useState(StateModule)

    function onSwitch() {
        setState(prev => prev === StateModule ? StateList : StateModule)
    }

    return (
        <>
            <IconSwitch icon={state === StateModule ? IconModule : IconList} onSwitch={onSwitch}/>
            {state === StateModule ? <CardsView cards={products}/> : <ListView items={products}/>}
        </>
    );
}


const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];