import { Component } from "react";
import { Link } from "react-router-dom";

export default class DisIntro extends Component {
  render() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-8 py-16 gap-8 items-start justify-center bg-zinc-100 text-zinc-900">
        <div className="flex flex-col gap-4 transition-all hover:p-4 hover:bg-zinc-300 hover:rounded-lg">
          <h1 className="font-bold text-2xl">From coding 🚀</h1>
          <p className="font-light leading-loose">
            In the ever-evolving landscape of web development,{" "}
            <span className="bg-[#61DBFB] text-zinc-900 p-1">
              the journey I embarked upon with{" "}
              <Link to="https://react.dev/" className="underline">
                React.js
              </Link>{" "}
              was marked by continuous growth and exploration.
            </span>{" "}
            As I honed my skills and crafted captivating user interfaces,{" "}
            <span className="bg-[#61DBFB] text-zinc-900 p-1">I soon found</span>{" "}
            myself facing a new horizon: server-side rendering, routing, and
            optimized performance. It was at this juncture that{" "}
            <Link to="https://nextjs.org/" className="underline">
              <span className="bg-[#61DBFB] text-zinc-900 p-1">Next.js</span>
            </Link>{" "}
            emerged as the natural extension of my React.js journey.
          </p>
        </div>
        <div className="flex flex-col gap-4 transition-all hover:p-4 hover:bg-zinc-300 hover:rounded-lg">
          <h1 className="font-bold text-2xl">And designing 🖌️</h1>
          <p className="font-light leading-loose">
            Much like coding,{" "}
            <span className="bg-[#61DBFB] text-zinc-900 p-1">
              UI/UX design is an art form that requires patience, iteration, and
              an unquenchable thirst for improvement.
            </span>
            From wireframing to prototyping, every stage is a journey of
            exploration, as I mold raw ideas into polished gems that bridge
            functionality and aesthetics.
          </p>
        </div>
        <div className="flex flex-col gap-4 transition-all hover:p-4 hover:bg-zinc-300 hover:rounded-lg">
          <h1 className="font-bold text-2xl">I'm enhanced 🧑🏻‍💻</h1>
          <p className="font-light leading-loose">
            The result of this learning journey is more than just a skillset.
            It's a mindset that bridges the gap between the technical and the
            artistic, the functional and the aesthetic.{" "}
            <span className="bg-[#61DBFB] text-zinc-900 p-1">
              It's the ability to envision an idea, translate it into an
              interactive design, and then bring it to life through code.
            </span>{" "}
            It's the power to mold digital experiences that captivate, simplify,
            and enrich the lives of users.
          </p>
        </div>
        <div className="flex flex-col gap-4 transition-all hover:p-4 hover:bg-zinc-300 hover:rounded-lg">
          <h1 className="font-bold text-2xl">Currently 🍰</h1>
          <p className="font-light leading-loose">
            <span className="bg-[#61DBFB] text-zinc-900 p-1">
              My journey has led me to an impactful endeavor with the Indonesia
              Police Department, where I'm spearheading the development of a
              website and an app named "SIGAP".
            </span>{" "}
            Harnessing the capabilities of Next.js, I'm intricately weaving
            technology and user experience to craft a digital platform that
            embodies vigilance and efficiency. As part of this collaboration, I
            find myself at the intersection of innovation and public service, a
            position that carries a profound sense of responsibility. The
            "SIGAP" project not only showcases the fusion of my coding skills
            and UI/UX design acumen but also underscores the pivotal role that
            technology plays in enhancing safety and security.
          </p>
        </div>
      </div>
    );
  }
}
