import './ElementDetail.scss'

export default function ElementDetail(props) {
    const soldQuantity = props.element.sold_quantity;
    return (
        <div className='element-detail'>
            <div className='col-info'>
                <img src={props.element.thumbnail}/>
                <p className='description'>
                    {props.description.plain_text}
                </p>
            </div>
            <div className='col-buy'>
                <span className='seller-info'>
                    {props.element.condition} - {soldQuantity} {soldQuantity == 1 ? 'vendido' : 'vendidos'}
                </span>
                <span>{props.element.title}</span>
                <span>$ {props.element.price}</span>
                <button className='buy'>Comprar</button>
            </div>
        </div>
    );
}