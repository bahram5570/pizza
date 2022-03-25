import { Fragment } from 'react';
import chefImage from '../data/images/chefImage.svg';
import equipmentImage from '../data/images/equipmentImage.svg';
import deliveryImage from '../data/images/deliveryImage.svg';
import basketImage from '../data/images/basketImage.svg';

const HomeGrids = () => {
  return (
    <Fragment>
      <div>
        <img src={chefImage} alt="chefImage" />
        <h3>تیم حرفه ای</h3>
        <p>
          حضور سرآشپز خبره و انتخاب سایر پرسنل، از آماده سازی تا تحویل پیتزا از
          افراد کاردان و با تجربه ، امیدواریم بتونه باعث بهبود خدمات به شما بشه
        </p>
      </div>

      <div>
        <img src={equipmentImage} alt="equipmentImage" />
        <h3>تجهیزات مدرن</h3>
        <p>
          کار خوب نیاز به ابزار خوب داره. با مهیا کردن یک فر پیتزای حرفه ای در
          کنار سایر تجهیزات سعی کردیم بتونیم پیتزایی با طعم اصیل و بی نظیر برای
          شما آماده کنیم
        </p>
      </div>

      <div>
        <img src={deliveryImage} alt="deliveryImage" />
        <h3>تحویل به موقع</h3>
        <p>
          ما می دونیم انتظار چقدر سخته مخصوصا اگر منتظر پیتزا باشی! تمام تلاش ما
          اینه که پیتزاتون در حداقل زمان ممکن به دست شما برسه
        </p>
      </div>

      <div>
        <img src={basketImage} alt="basketImage" />
        <h3>بهترین مواد اولیه</h3>
        <p>
          حساسیت ویژه سرآشپز ما روی خرید روزانه مواد مصرفی تازه و استفاده از
          معتبرترین برندها، مطمینا نتیجه رو یه پیتزای بهتر می کنه
        </p>
      </div>
    </Fragment>
  );
};

export default HomeGrids;
