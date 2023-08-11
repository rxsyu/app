import { Component } from "react";

export default class DisHero extends Component {
  render() {
    return (
      <div className="flex flex-col lg:grid lg:grid-cols-2 h-screen p-8 items-start lg:items-center justify-center bg-zinc-900 text-zinc-100">
        <div className="hidden lg:flex flex-col gap-8 lg:gap-16 h-full items-end justify-center">
          <img src="/qr.png" width="480" height="480" alt="rxsyu" />
        </div>
        <div className="flex flex-col gap-8 lg:gap-16 h-full items-start justify-center">
          <h1 className="text-3xl lg:text-6xl font-bold">
            <span className="text-[#61DBFB]">Revealing,</span> Ras.
          </h1>
          <h2 className="text-base lg:text-lg lg:bg-[#61DBFB] text-[#61DBFB] lg:text-zinc-900 lg:px-4 lg:py-2 leading-loose">
            React.js Dev, Next.js Dev, iOS Apps UI/UX Designer
          </h2>
        </div>
      </div>
    );
  }
}
