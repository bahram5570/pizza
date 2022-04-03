interface TypeInputs {
    items: {qt: number, price: number}
}

const HeaderCartBill = ({items}: TypeInputs) => {
    return (
        <div className="absolute top-11 left-8 right-8 text-black overflow-hidden">
            <div className="header_bill_tooth">
                <span className="flex">
                    <p className="mr-1">ت</p>
                    <p>{items.price}</p>
                </span>

                <p className="flex">
                    <span className="mr-1">سفارش</span>
                    <span>{items.qt}</span>
                </p>
            </div>
        </div>
    )
}

export default HeaderCartBill