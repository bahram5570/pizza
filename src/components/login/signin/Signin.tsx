interface showTypes {
    onShowHandler: () => void,
    showSignin: boolean
}

const Signin = ({onShowHandler, showSignin}: showTypes) => {

    return (
        <form
         className={`
            w-4/5 
            md:w-[400px] 
            p-4 
            text-right 
            rounded-lg 
            overflow-hidden 
            text-white 
            backdrop-blur-[3px]
            duration-500
            absolute
            ${showSignin ? 'top-[120px] md:top-[150px]' : '-top-[800px]'}
            
            `}
            >
            <span className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-70 -z-10" />   
            <h2 className="text-3xl pb-1 border-b-2 border-white">ورود</h2>

            <div className="login_form">
                <label>نام کاربری</label>
                <input type='text' placeholder="به فارسی" />
            </div>

            <div className="login_form">
                <label>رمز عبور</label>
                <input type='password' placeholder="به عدد" />
            </div>

            <button type="submit" className="bg-[#ff0000] p-1.5 w-full mt-8 rounded-lg">ورود</button>

            <div className="flex">
                <button type="button" onClick={() => onShowHandler()} className="border-b-2 border-white mt-4">ایجاد حساب جدید</button>
            </div>

        </form>
    )
}

export default Signin;