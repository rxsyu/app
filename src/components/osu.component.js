import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Osu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
      scrolled: false,
    };
    this.toggleExpand = this.toggleExpand.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  toggleExpand() {
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
    }));
  }

  handleScroll() {
    const scrolled = window.scrollY > 256;
    this.setState({ scrolled });
  }

  render() {
    const { isExpanded, scrolled } = this.state;

    return (
      <div
        className={`fixed w-full transition-all ${
          scrolled ? "bg-zinc-100 text-zinc-900" : "bg-zinc-900 text-zinc-100"
        }`}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:px-8 lg:py-4 font-semibold text-base">
          <div className="flex flex-row w-full lg:w-auto items-center justify-between gap-4">
            <label>rxsyu</label>
            <button
              className={`flex lg:hidden material-symbols-rounded ${
                isExpanded ? "rotate-180" : ""
              }`}
              onClick={this.toggleExpand}
              style={{
                transform: `rotate(${isExpanded ? "180deg" : "0deg"})`,
                transition: "transform 0.3s ease",
              }}
            >
              {isExpanded ? "expand_less" : "expand_more"}
            </button>
          </div>
          <div
            className={`flex flex-col lg:flex-row w-full lg:w-auto gap-4 mt-8 lg:mt-0 ${
              isExpanded ? "" : "hidden lg:flex"
            }`}
          >
            <Link
              to="/"
              className={`flex flex-row items-center p-2 gap-4 lg:gap-2 transition-all hover:rounded-lg ${
                scrolled ? "hover:bg-zinc-200" : "hover:bg-zinc-800"
              }`}
            >
              <span className="material-symbols-rounded">emoji_objects</span>
              <div className="flex flex-col gap-2">
                <h1>Discover</h1>
                <p className="text-sm font-light lg:hidden">
                  Unveiling the Layers
                </p>
              </div>
            </Link>
            <Link
              to="/"
              className={`flex flex-row items-center p-2 gap-4 lg:gap-2 transition-all hover:rounded-lg ${
                scrolled ? "hover:bg-zinc-200" : "hover:bg-zinc-800"
              }`}
            >
              <span className="material-symbols-rounded">code</span>
              <div className="flex flex-col gap-2">
                <h1>Frontend Playgrounds</h1>
                <p className="text-sm font-light lg:hidden">
                  Where lines of code converge to create digital wonders
                </p>
              </div>
            </Link>
            <Link
              to="/"
              className={`flex flex-row items-center p-2 gap-4 lg:gap-2 transition-all hover:rounded-lg ${
                scrolled ? "hover:bg-zinc-200" : "hover:bg-zinc-800"
              }`}
            >
              <span className="material-symbols-rounded">brush</span>
              <div className="flex flex-col gap-2">
                <h1>Figma Design</h1>
                <p className="text-sm font-light lg:hidden">
                  Realm where imagination meets pixels
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}