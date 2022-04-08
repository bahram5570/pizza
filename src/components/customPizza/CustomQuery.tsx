interface TypeInput {
  order: number;
}

const CustomQuery = ({ order }: TypeInput) => {
  const data = [
    {
      title: 'توضیحات مربوط به مرحله انتخاب خمیر',
      txt: 'در این مرحله شما باید یکی از انواع خمیر پیتزا را انتخاب کنید. پن آمریکایی: این نوع خمیر در پن (ظرف عمیق مخصوص پیتزا) تهیه شده که نتیجه آن یک پیتزای حجیم با قطر 25 سانتیمتر می باشد. ایتالیایی ناپولی: این خمیر به روش اصیل ایتالیایی ناپولی با دست باز شده و با قرار گرفتن مستقیم روی سنگ مخصوص پخته شده که حاصل، پیتزایی با ضخامت کم و قطر 33 سانتیمتر می باشد. استاف کراست: در لبه ی دور این نوع خمیر، میکس چند نوع پنیر با خامه و ادویه به کار رفته است',
    },
    {
      title: 'توضیحات مربوط به مرحله انتخاب سس کف',
      txt: 'در این مرحله شما باید یکی از انواع سس را انتخاب کنید',
    },
    {
      title: 'توضیحات مربوط به مرحله انتخاب پنیر پیتزا',
      txt: 'در این مرحله شما باید یک نوع پنیر پیتزا را انتخاب کنید',
    },
    {
      title: 'توضیحات مربوط به مرحله انتخاب گوشت',
      txt: 'در این مرحله می توانید یک یا چند گزینه را انتخاب کنید',
    },
    {
      title: 'توضیحات مربوط به مرحله انتخاب سبزیجات',
      txt: 'در این مرحله می توانید یک یا چند گزینه را انتخاب کنید',
    },
  ];

  return (
    <div
      id="customQuery"
      className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-[#00000088] flex justify-center items-center z-10"
    >
      <div className="w-4/5 p-6 rounded-lg bg-white text-right">
        <h2 className="text-2xl mb-4 text-black">{data[order - 1].title}</h2>
        <p className="text-neutral-700">{data[order - 1].txt}</p>
        <p className="text-left w-fit mt-4 text-red-700 rounded cursor-pointer">
          بستن پنجره
        </p>
      </div>
    </div>
  );
};

export default CustomQuery;
