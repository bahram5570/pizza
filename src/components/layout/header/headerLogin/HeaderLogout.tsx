interface TypeInputs {
  onNo: () => void;
  onYes: () => void;
}

const HeaderLogout: React.FC<TypeInputs> = ({ onNo, onYes }) => {
  return (
    <div className="flex justify-center absolute top-0 left-0 right-0 bottom-0 pt-36 bg-[#000000aa] z-10">
      <div className="bg-white p-4 h-fit rounded-md">
        <p className="text-black">از حساب کاربری خود خارج می شوید؟</p>
        <span className="flex justify-between mt-4">
          <button
            onClick={onNo}
            className="border-2 border-[#ff0000] px-6 rounded-md text-[#ff0000]"
          >
            خیر
          </button>

          <button onClick={onYes} className="bg-[#ff0000] px-6 py-1 rounded-md">
            بله
          </button>
        </span>
      </div>
    </div>
  );
};

export default HeaderLogout;
