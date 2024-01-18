import ImageCard from "@/Atoms/ImageCard";
import Link from 'next/link';

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
          <ImageCard imageSrc="/karaoke-app.png" title="Karaoke App" description="A web based karaoke player" skills={["Nextjs", "Firebase", "Youtubeapi"]} />
            <ImageCard imageSrc="/messenger-chatbot.png" title="Messenger Bot" description="Chatgpt integration in messenger" skills={["Openaiapi", "Facebookapi", "Mongodb", "Express"]} />
            <ImageCard imageSrc="/works/ConversionCow.png" title="ConversionCow App" description="Popup plugin for all sites" skills={["Aws", "CI/CD", "Vapor", "Laravel", "Preact"]} />
            <ImageCard imageSrc="/works/Paraclete.png" title="Paraclete Go" description="Cetralize AI Tools" skills={["Aws", "Azure", "Web Scrapper", "Laravel", "Vue", "Chrome Extension"]} />
          </div>
          <Link href={'/portfolio'} className="bg-slate-700 h-10 leading-10 font-semibold w-24 m-auto" style={{ textAlign: "center", color: "#FFF" }}  >
            View All
          </Link>  
        </div>
      </div>
    </>
  );
}
