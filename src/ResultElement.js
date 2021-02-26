export default function ResultElement(props) {
    return (
        <div className='search-element'>
            <a onClick={() => props.goToDetail(props.element.id)}>
                <img className='thumb' src={props.element.thumbnail} alt={props.element.title}/>
            </a>
            <div className='attribs'>
                <div className='price'>$ {props.element.price}</div>
                <div className='name'>
                    <a onClick={() => props.goToDetail(props.element.id)}>
                        {props.element.title}
                    </a>
                </div>
            </div>
            <div className='city'>{props.element.address.city_name}</div>
        </div>
    );
}