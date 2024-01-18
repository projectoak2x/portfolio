import ImageCard from "@/Atoms/ImageCard";
import Link from 'next/link';

export default function FullPortfolio() {
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
            <ImageCard imageSrc="/works/paraclete.png" title="Paraclete Go" description="Cetralize AI Tools" skills={["Aws", "Azure", "Web Scrapper", "Laravel", "Vue", "Chrome Extension"]} />
            <ImageCard imageSrc="/discord-chatbot.png" title="Discord Bot" description="Chatgpt integration in discord" skills={["Openaiapi", "Discordapi", "Mongodb", "Express"]} />
            <ImageCard imageSrc="/works/express-time-tracker.PNG" title="Express Time Tracker" description="Time Tracking App" skills={["Django", "Nginx", "Heroku", "Jquery"]} />
            <ImageCard imageSrc="/works/wincove.png" title="Wincove" description="A news investment site" skills={["Nextjs", "Typescript", "Css", "Javascript"]} />
            <ImageCard imageSrc="/works/rentall-ph.PNG" title="RentAll" description="Vehicle Rentall App" skills={["Laravel", "Bootstrap", "Jquery"]} />
            <ImageCard imageSrc="/works/xauru.PNG" title="Xauru Site" description="Wordpress Site with custom api" skills={["Wordpress", "Php", "Bootstrap", "Javascript"]} />
            <ImageCard imageSrc="/works/allaboutai.PNG" title="AllAboutAI" description="Page for Chatbot Subscription" skills={["Paypal", "Maya", "Markdown"]} />
            <ImageCard imageSrc="/works/skynet.png" title="Skynet Jiffi" description="Ticket Management App" skills={["Laravel", "hubstaff", "React"]} />
            <ImageCard imageSrc="/works/amrap.png" title="Amrap" description="A Music Sharing Platform" skills={["Laravel", "React", "Redis", "aws"]} />
            <ImageCard imageSrc="/works/comfortel.png" title="Comfortel" description="Furniture Browsing Site" skills={["Wordpress", "Vuejs", "Css"]} />
            <ImageCard imageSrc="/works/EMT.jpg" title="EMT Attendance App" description="Attendance App" skills={["AndroidNative", "Java",]} />
            <ImageCard imageSrc="/works/WIFI.jpg" title="DICT Public Wifi" description="Public Wifi Portal" skills={["Django", "Javascript", "Css"]} />
            <ImageCard imageSrc="/works/SuperApp.jpg" title="Apollo SuperApp" description="SuperApp for Apollo" skills={["RocketChat", "Capacitor", "GoogleMap"]} />
            <ImageCard imageSrc="/cloud_base_plant_monitoring.png" title="Cloud Based plant monitoring" description="Uses the IOT to monitor..." skills={["Raspberry", "Html", "Css", "Javascript"]} />
          </div>
        </div>
      </div>
    </>
  );
}
