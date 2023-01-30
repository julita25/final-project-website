import one from "../images/one.svg"
import two from "../images/two.svg";
import three from "../images/three.svg";
import four from "../images/four.svg";
import chart from "../images/num-accidents.png";
import accidents from "../images/reasons-accidents.png";
import suddenSwerve from "../images/sudden-swerve.mp4";
import forwardCollision from "../images/sudden-swerve.mp4";

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

export const approachContent = [
  {
    img: accidents,
    hasImg: true,
    info: `Due to time constraints I could only focus in the most common causes for road accidents. Once I collected data from Dubai Police I could learn that
    Sudden Swerve and Not Keeping a Safe Distance accounted for more than 50% of the total reasons of road accidents. I based on these to create two simulation scenarios where
    DSRC and CV2X would be compared in terms of packet-loss, latency, throughput and range`
  },
  {
    video: suddenSwerve,
    info:`For my first scenario, I simulated a car performing sudden swerve (changing lane). The green car (swerving car)  is enabled with a Blind Spot Warning Module,
    a V2X technology that through computation values of the adyacent lanes only allows the drive to swerve when it considers it safe. I variated the number of cars to evaluate 
    how the performance indicators of each protocol would behave`
  },
  {
    video: forwardCollision,
    info: `For my second scenario, I simulated Not Keeping Safe Distance. The green car is programmed to suddenly stop after few seconds. The rest of the cars are equipped with Forward Collision Module, which
    constantly checks that the car ahead is within a safe distance, otherwise, it sends a warning message and stops the car. I variated the speed values
    to see how it could the success rate of each protocol`
   
  }
]