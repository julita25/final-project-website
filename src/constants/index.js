//images
import one from "../images/one.svg"
import two from "../images/two.svg";
import three from "../images/three.svg";
import four from "../images/four.svg";
import chart from "../images/num-accidents.png";
import accidents from "../images/reasons-accidents.png";
import suddenSwerve from "../images/sudden-swerve.mp4";
import forwardCollision from "../images/sudden-swerve.mp4";
import CV2X from "../images/cv2x.png";
import DSRC from "../images/dsrc.png";

//icons
import {SiFuturelearn} from "react-icons/si";
import {SlSizeFullscreen} from "react-icons/sl";
import {TbBuildingLighthouse} from "react-icons/tb";

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
      "Evaluating if the protocols comply with the requirements of safety-critical-applications, after signal degradation",
  },
  {
    id: "feature-3",
    icon: four,
    title: "RTA point of view",
    content:
      "Understanding the view of RTA (Road Transport Authority of dubai) about V2X protocols and implementation in Dubai.",
  },
];

export const problemStatement = [
  {
  title: "Problem",
  body: `Dubai road infrastructure is one of the most advanced in the world. RTA has shown to actively
  invest in smart projects, however, these solutions have not helped in reducing the number traffic accidents, as over the years these have remained overall steady. If we were to implement a suitable V2X protocol that
  can adapt to Dubai infrastructure and complies with the network requirements this trendline could significantly decrease`,
  img: chart,
  },
  {
  title: "DSRC vs CV2X",
  body: `At the moment the two well recognised V2X protocols are DSRC and CV2X. The former is a complete protocol and the latter is still on
  development. However there is no right answer, accross the world there has not been wide implementation for any of them. Countries like USA 
  prefer DSRC and countries like China prefer CV2X. The goal is to find the most suitable protocol for Dubai. DSRC uses IEEE 802.11p, and is specifically 
  designed to deploy safety-critical applications. The protocol exchanges messages by broadcasting Basic Safety Messages, from which is able to 
  compute values such as position, speed, direction and estimated trajectory`,
  img: DSRC
  },
  {
  title: "",
  body: `Meanwhile, C-V2X relies on the existing cellular infrastructure, using LTE stations for traffic management. When a vehicle is within the 
  range of a base station, the LTE station schedules and allocates resources for the V2V traffic through the Uu interface. During transmission over the uplink channel, 
  the eNB assigns the node to any of the available frequency bands and defines how relevant the beacon (vehicular message) is for the other nodes in its cell`,
  img: CV2X
  }
];

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
    a V2X technology that computes distance values of the adyacent lanes and decides if its safe or not to perform an swerving action. I variated the number of cars to evaluate 
    how the performance indicators of each protocol would behave`
  },
  {
    video: forwardCollision,
    info: `For my second scenario, I simulated Not Keeping Safe Distance. The green car is programmed to suddenly stop after few seconds. The rest of the cars are equipped with a Forward Collision Module, which
    constantly checks that the car ahead is within a safe distance, otherwise, it sends a warning message and stops the car. I variated the speed values
    to see how it could the success rate of preventing an accident of each protocol`
   
  }
];

export const resultsContent = [
  {
    title: "More stable",
    logo: SlSizeFullscreen,
    text: `Contrary to  DSRC that easily suffers degradation of the network, CV2X ia a centralised protocol. This makes it more stable to handle variation of external factors 
    like increased number of vehicles, different distances.`
  },
  {
    title: "Promotes future path",
    logo: SiFuturelearn,
    text: `CV2X offers a path for the future because it works on releases. While my project, based on release 14 works with 4G, there is also release 15 and 16
    that include 5g communications and more advance V2X applications like platooning`
  },
  {
    title: "Easier to maintain",
    logo: TbBuildingLighthouse,
    text: `Dubai accounts with a very well deployed infrastructure for cellular communications. Accross the city we have providers such as Du and Etisalat. This is important when considering implementation
    and maintenance costs`
  }
];