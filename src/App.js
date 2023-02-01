import "./App.css";

const App = () => {
  return (
    <div className="bg-black relative ">
      <span className="absolute rounded-full h-[500px] w-[500px] bg-yellow bg-opacity-10 md:bg-opacity-70 blur-[300px] top-[-4rem] left-[-10rem]"></span>
      <span className="absolute rounded-full h-[200px] w-[200px] bg-yellow bg-opacity-50 md:bg-opacity-70 blur-[150px] top-[-4rem] right-[2rem]"></span>
      <span className="absolute rounded-full h-[900px] w-[600px] bg-yellow bg-opacity-20 md:bg-opacity-20 blur-[150px] bottom-[4rem] right-[0rem]"></span>
      <span className="absolute rounded-full hidden md:block h-[400px] w-[400px] bg-yellow bg-opacity-10 blur-[150px] bottom-[4rem] left-[0rem]"></span>
      <div className="container mx-auto p-12 lg:w-3/5">
        <h1 className="font-valo text-white tracking-wide text-2xl mb-5 md:text-7xl text-center">
          Registration
        </h1>
        <span className="text-gray-300 w-full md:w-[80%] mx-auto text-sm md:text-base leading-7 mt-8 font-montserrat text-justify">
          <i>Hola Techies🧑‍💻</i>
          <p>
            Data is the next currency of the world and it is much needed to
            analyze it properly , Python is the heart of data analysis if we
            consider it today
          </p>
          <br />
          <p>
            From analyzing data to managing it python programming does it so
            flawlessly that even a beginner which only know the bare minimum
            english , can write programs in python and work on whichever data he
            wants . With the help of Python and it's vast libraries we will be
            able to perform many actions on various data sets.
          </p>
          <p>
            <b> ✨Websters - The Computer Science Society of Shivaji College</b>
            , University of Delhi invites you to the workshop on{" "}
            <b>Data Analysis using Python</b> by <b>Mr Ravikant Tyagi</b>. A
            renowned data scientist with experience of about a decade as a Data
            Scientist and Ex Software Consultant at NIIT.
          </p>
          <br />
          ✍️Takeaways from the Workshop:
          <br />
          <br />
          <b>Day 1: 7 February 2023</b>
          <oll className="text-left">
            <li>Introduction to Python </li>
            <li>Basics of Python Programming</li>
            <li>Data Collections in Python </li>
            <li>Introduction to Data Science</li>
            <li>Getting started with Numpy</li>
            <li>Introduction to Pandas</li>
            <li>Data Analysis using Pandas</li>
          </oll>
          <br />
          <b>Day 2: 8 February 2023</b>
          <br />
          <oll className="text-left">
            <li> Introduction to Data Visualisation</li>
            <li>Introduction to Matplotlib · 3D Plots, Live Graphs</li>
            <li>Introduction to Seaborn</li>
            <li>Introduction to Plotly</li>
            <li>Case Studies on real time datasets </li>
            <li>Data analysis on Sports and Covid-19</li>
            <li>Introduction to Streamlit</li>
            <li>Creating Dashboard using Streamlit</li>
          </oll>
          <br />
          <b>
            TIMING: <i>10 AM onwards</i>
          </b>
          <br />
          <b>
            VENUE: <i>New Computer Lab, Shivaji college</i>
          </b>
          <br />
          <br />
          <b>
            <i>
              {" "}
              📃E-certificates will be issued to the participants who will
              attend the complete workshop.
            </i>
          </b>
          <br />
          <br />
          <b> 📞Further Contact:- </b>
          <br />
          Kumar Amrendram - 962854106
          <br />
          Kamini Tiwari - 7007366270
          <br />
          <br />
          Regards,
          <br /> Websters Team
          <br />
          Shivaji College, University of Delhi
        </span>

        <form
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeO-CFYHAHr1kMoy7hhm4cPsx47tD6iulRx55_ZaSrmoLiqUQ/formResponse"
          className="form my-12 text-center"
        >
          <input
            type="text"
            className="form-input"
            name="entry.210379106"
            placeholder="FULL NAME"
            required
          />
          <input
            type="text"
            className="form-input"
            name="entry.1556472114"
            placeholder="EMAIL"
            required
          />
          <input
            type="text"
            className="form-input"
            name="entry.786855019"
            placeholder="PHONE"
            required
          />
          <input
            type="text"
            className="form-input"
            name="entry.1925733965"
            placeholder="COURSE"
            required
          />
          <input
            type="text"
            className="form-input"
            name="entry.540724926"
            placeholder="YEAR"
            required
          />
          <input
            type="text"
            className="form-input"
            name="entry.1499219191"
            placeholder="ROLL NO"
          />
          <div className="flex justify-center submit-btn-container">
            <button className="submit-btn">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
