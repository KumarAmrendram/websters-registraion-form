import "./App.css";

const App = () => {
  return (
    <div className="bg-black relative">
      <span className="absolute rounded-full h-[500px] w-[500px] bg-yellow bg-opacity-10 md:bg-opacity-70 blur-[300px] top-[-4rem] left-[-10rem]"></span>
      <span className="absolute rounded-full h-[200px] w-[200px] bg-yellow bg-opacity-50 md:bg-opacity-70 blur-[150px] top-[-4rem] right-[2rem]"></span>
      <span className="absolute rounded-full h-[900px] w-[600px] bg-yellow bg-opacity-20 md:bg-opacity-20 blur-[150px] bottom-[4rem] right-[0rem]"></span>
      <span className="absolute rounded-full hidden md:block h-[400px] w-[400px] bg-yellow bg-opacity-10 blur-[150px] bottom-[4rem] left-[0rem]"></span>
      <div className="container mx-auto p-12">
        <h1 className="font-valo text-white tracking-wide text-2xl md:text-7xl text-center">
          Registration
        </h1>
        <p className="text-gray-300 w-full md:w-[80%] mx-auto text-sm md:text-base leading-7 mt-8 font-montserrat text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          voluptates! Quas iste quos, adipisci eius, delectus perspiciatis
          voluptas voluptates eveniet animi corporis corrupti nihil minus,
          doloremque cum! Recusandae voluptatum labore ipsum, debitis pariatur
          alias accusamus. Et magni perspiciatis suscipit impedit facilis saepe
          sapiente obcaecati, voluptate, itaque quia soluta nobis ex sunt veniam
          incidunt alias libero, nulla recusandae sed. Autem facilis illum
          voluptates non commodi ex voluptatem numquam explicabo? Similique
          maiores voluptates nostrum dolorem ipsam dolor sequi obcaecati itaque
          molestias explicabo! Modi sequi nihil alias autem dolores? Magni
          commodi sint, omnis esse quaerat at odit nisi quis libero officia
          nulla odio!
        </p>

        <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeO-CFYHAHr1kMoy7hhm4cPsx47tD6iulRx55_ZaSrmoLiqUQ/formResponse" className="form my-12 text-center">  

          <input type="text" className="form-input" name="entry.210379106" placeholder="FULL NAME" />
          <input type="text" className="form-input" name="entry.1556472114" placeholder="EMAIL" />
          <input type="text" className="form-input" name="entry.786855019" placeholder="PHONE" />
          <input type="text" className="form-input" name="entry.1925733965" placeholder="COURSE" />
          <input type="text" className="form-input" name="entry.1499219191" placeholder="ROLL NO" />
          <textarea
          name="entry.540724926"
            className="form-textarea"
            placeholder="Your Suggestion..."
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <div className="flex justify-center submit-btn-container">
            <button className="submit-btn">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
