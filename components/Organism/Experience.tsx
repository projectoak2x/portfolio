import ImageCard from "@/Atoms/ImageCard";

export default function Experience() {
  return (
    <>
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
          <h1 className="bg-slate-700 h-10 leading-10 font-semibold" style={{ textAlign: "center", margin: "20px 0 10px 0", color: "#FFF" }}  >
            Works
          </h1>
          <div className="flex flex-wrap justify-between gap-y-5 mb-5">
            <ImageCard imageSrc="/karaoke-app.png" title="Karaoke App" description="short description" />
            <ImageCard imageSrc="/messenger-chatbot.png" title="Messenger Bot" description="Chatgpt integration in messenger" />
            <ImageCard imageSrc="/discord-chatbot.png" title="Discord Bot" description="Chatgpt integration in discord" />
            <ImageCard imageSrc="/cloud_base_plant_monitoring.png" title="Cloud Based plant monitoring" description="Uses the IOT te monitor..." />
          </div>
          <div className="bg-slate-700 h-10 leading-10 font-semibold w-24 m-auto" style={{ textAlign: "center", color: "#FFF" }}  >
            View All
          </div>  
        </div>
      </div>
    </>
  );
}
