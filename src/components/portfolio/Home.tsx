import TechLogos from "./TechLogos";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-24 pb-24 sm:pb-0 sm:pt-0 h-screen">
        <div className="flex flex-col space-y-2 w-10/12 sm:w-7/12">
          <div>
            <div className="animate-bounce">👋</div>
            <h1 className="font-bold text-2xl text-zinc-800">Hi, I'm Hugo </h1>
            <h2 className=" text-2xl text-zinc-800 italic ">
              a{" "}
              <span className="font-bold text-yellow-400">
                student software developer
              </span>
              .
            </h2>
          </div>
          <p className="text-xl">
            From an artistic background, I've worked 7 years as a{" "}
            <b>video editor</b> and <b>motion designer</b>. <br></br>In October
            2022, I joined{" "}
            <a
              className="text-rose-400 font-bold hover:text-rose-600"
              href="https://adatechschool.fr/"
              target="_blank"
              rel="noreferrer"
            >
              ada tech school
            </a>
            , an inclusive programing school where I'm self-learning computer
            science by making projects on several technologies. I like{" "}
            <span className="font-semibold text-blue-400">clean</span> and{" "}
            <span className="font-semibold text-green-400">well-organized</span>{" "}
            code.
          </p>

          <h2 className="text-zinc-800 text-2xl">
            Feel free to{" "}
            <a
              className="font-bold text-purple-400 hover:text-purple-600"
              href="https://www.linkedin.com/in/hugorince/"
              target="_blank"
              rel="noreferrer"
            >
              contact me
            </a>
          </h2>
          <div className="flex flex-col space-y-2">
            <p></p>
            <div className="hidden sm:block sm:flex sm:space-x-4">
              <TechLogos />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
