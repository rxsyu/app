import { Component } from "react";
import Osu from "../osu.component";
import DisHero from "./discover/disHero.component";
import DisIntro from "./discover/disIntro.component";
import End from "../end.component";

export default class Discover extends Component {
  render() {
    return (
      <>
        <Osu />
        <DisHero />
        <DisIntro />
        <End />
      </>
    );
  }
}
