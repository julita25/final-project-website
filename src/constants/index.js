import one from "../images/one.svg"
import two from "../images/two.svg";
import three from "../images/three.svg";
import four from "../images/four.svg";
import chart from "../images/num-accidents.png"

export const features = [
  {
    id: "feature-1",
    icon: one,
    title: "V2X vs DSCR",
    content:
      "Determining how external factors like vehicle density or speed can affect the performance of both protocols.",
  },
  {
    id: "feature-2",
    icon: two,
    title: "Dubai infrastructure",
    content:
      "Recognising Dubai available technologies for infrastructure communication",
  },
  {
    id: "feature-3",
    icon: three,
    title: "Safety critical app requirements",
    content:
      "Evaluating if even after signal degradations the protocols still comply with the requirements of safety-critical-applications",
  },
  {
    id: "feature-3",
    icon: four,
    title: "RTA point of view",
    content:
      "Understanding the view of RTA (Road Transport Authority of dubai) about V2X protocols and implementation in Dubai.",
  },
];

export const problemStatement = {
  title: "Problem",
  text: `While Dubai road infrastructure accounts for being one of the most advances and its transport entity RTA has shown to acitvely
  invenst in smart projects, truth is that traffic accidents have remained overall steady. If we were to implement a suitable V2X protocol that
  can adapt to the infrastructure and complies with the netqork requirements this trendline could significantly decrease`,
  img: chart
}