import './ElementDetail.scss'

function evaluateCondition(condition) {
    if(condition === 'new'){
        return 'Nuevo';
    }
    else if (condition === 'used'){
        return 'Usado';
    }
    else {
        return 'No especificado';
    }
}

function getSoldQuantity(quantity) {
    return quantity === 1 ? `${quantity} vendido` : `${quantity} vendidos`;
}

export default function ElementDetail(props) {
    const soldQuantity = props.element.sold_quantity;
    return (
        <div className='element-detail'>
            <div className='col-info'>
                <img src={props.element.thumbnail} alt='thumbnail'/>
                <p className='description-title'>
                    Descripción del producto
                </p>
                <p className='description'>
                    {props.description.plain_text}
                </p>
            </div>
            <div className='col-buy'>
                <span className='seller-info'>
                    {evaluateCondition(props.element.condition)} - {getSoldQuantity(soldQuantity)}
                </span>
                <span className='title'>
                    {props.element.title}
                </span>
                <span className='price'>
                    $ {Number(props.element.price).toLocaleString('es-co')}
                </span>
                <button className='buy'
                        onClick={() => window.open(props.element.permalink, '_blank')}>
                    Comprar
                </button>
            </div>
        </div>
    );
}