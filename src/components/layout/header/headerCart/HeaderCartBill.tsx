interface TypeInputs {
  totalPrice: number;
  totalQt: number;
}

const HeaderCartBill = ({ totalPrice, totalQt }: TypeInputs) => {
  return (
    <div className="absolute top-[42px] left-8 right-8 text-black overflow-hidden">
      <div className="header_bill_tooth">
        <p className="flex">
          <span className="mr-1">ت</span>
          <span>{totalPrice}</span>
        </p>

        <p className="flex">
          <span className="mr-1">سفارش</span>
          <span>{totalQt}</span>
        </p>
      </div>
    </div>
  );
};

export default HeaderCartBill;
