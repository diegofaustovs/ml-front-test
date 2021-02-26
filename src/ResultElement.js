import shipping_icon from './assets/icon_shipping.png';

export default function ResultElement(props) {
    return (
        <div className='search-element'>
            <a href={`/items/${props.element.id}`}>
                <img className='thumb' src={props.element.thumbnail} alt={props.element.title}/>
            </a>
            <div className='attribs'>
                <div className='price'>
                    <span>$ {Number(props.element.price).toLocaleString('es-co')}</span>
                    {props.element.shipping.free_shipping && <img className='free-shipping' src={shipping_icon}/>}
                </div>
                <div className='name'>
                    <a href={`/items/${props.element.id}`}>
                        {props.element.title}
                    </a>
                </div>
            </div>
            <div className='city'>{props.element.address.city_name}</div>
        </div>
    );
}