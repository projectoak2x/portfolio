import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";

export default function Bio() {
  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
          color: "#fff",
        }}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <h1 className="bg-slate-700 h-10 leading-10 font-semibold" style={{ textAlign: "center", margin: "20px 0 10px 0" }}  >
            Bio
          </h1>
        </div>
      </div>
      <div>
        <div><b>1997</b> Born in Gingoog City, Philippines</div>
        <div><b>2019</b> Graduated as BS Electronics Engineer in University of Science and Technology Philippines.
          Also took the ECE board exam and pass.
        </div>
        <div><b>2020</b> Worked at Apollo Technology Inc</div>
        <div><b>2022 to present</b> Worked at Logicbase Interactive</div>
      </div>
    </>
  );
}
