import { Component } from "react";
import { Link } from "react-router-dom";

export default class End extends Component {
  render() {
    return (
      <div className="flex flex-col lg:flex-row items-center justify-center p-8 lg:px-8 lg:py-4 gap-8 font-semibold text-base bg-zinc-900 text-zinc-100">
        <Link to="https://github.com/rxsyu" className="flex flex-row items-center p-2 gap-4 lg:gap-2 transition-all hover:rounded-lg hover:bg-zinc-800">
          <img src="/social/github.png" width="24" height="24" alt="github" />
          <h6>@rxsyu</h6>
        </Link>
        <Link to="https://www.instagram.com/rasxev/" className="flex flex-row items-center p-2 gap-4 lg:gap-2 transition-all hover:rounded-lg hover:bg-zinc-800">
          <img
            src="/social/instagram.png"
            width="24"
            height="24"
            alt="instagram"
          />
          <h6>@rasxev</h6>
        </Link>
        <Link to="https://twitter.com/geminigasih" className="flex flex-row items-center p-2 gap-4 lg:gap-2 transition-all hover:rounded-lg hover:bg-zinc-800">
          <img src="/social/twitter.png" width="24" height="24" alt="twitter" />
          <h6>@geminigasih</h6>
        </Link>
      </div>
    );
  }
}
