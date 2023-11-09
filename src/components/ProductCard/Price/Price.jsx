import './Price.css'

export const Price = ({price, discount}) => {
    return (
        <span className='price'>
            {discount ? <span className="oldPrice">${price * (100-discount)/100}</span> : ''}
            ${price}
        </span>
    )
}