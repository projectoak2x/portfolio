import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";
import styled from "styled-components";

const StackContainer = styled.div.attrs((props: {isDark?: boolean})=>props)`
  img {
    filter: ${({isDark})=>isDark?'invert(1)':'invert(0)'} ;
    transition: all 0.5s;
  }
`

export default function Stacks({theme}:{theme: string}) {
  const isDark = theme === "dark";
  return (
    <StackContainer isDark={isDark}>
      <div
        style={{
          height: "100%",
          width: "100%",
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
          <h1 className="bg-slate-700 h-10 leading-10 font-semibold" style={{ textAlign: "center", margin: "20px 0 10px 0", color: "#FFF"}}  >
            Some of my favorite tools
          </h1>
          <MouseParallaxContainer
            className="parallax"
            containerStyle={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "auto auto auto auto auto"
            }}
            globalFactorX={0.3}
            globalFactorY={0.3}
            resetOnLeave
          >
            <MouseParallaxChild
              factorX={0.6}
              factorY={0.1}
              style={{
                backgroundPositionY: "50%",
                transform: "scale(1.2)",
                position: "absolute",
                backgroundSize: "auto",
                backgroundRepeat: "repeat",
                width: "100%",
                height: "100%",
              }}
            />
            <MouseParallaxChild
              factorX={0.5}
              factorY={0.5}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%"
              }}
            >
              <img height="20%" src="1.svg" alt="" />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.7}
              factorY={0.5}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%"
              }}
            >
              <img height="20%" src="2.svg" alt="" />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.9}
              factorY={0.5}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%"
              }}
            >
              <img height="20%" src="3.svg" alt="" />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.7}
              factorY={0.5}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%"
              }}
            >
              <img height="20%" src="4.svg" alt="" />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.5}
              factorY={0.5}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%"
              }}
            >
              <img height="20%" src="5.svg" alt="" />
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
      </div>
    </StackContainer>
  );
}
