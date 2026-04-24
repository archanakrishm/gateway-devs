import { useState } from "react";
import GallerySlider from "./GallerySlider";

const MediaTabs = ({ images = [], videos = [] }) => {
  const [activeTab, setActiveTab] = useState("images"); // default active

  return (
    <div className="w-full">

      {/* 🔹 Tabs */}
      <div className="flex gap-6 border-b mb-6 border-[#D9D9D9]">
        <button
          onClick={() => setActiveTab("images")}
          className={`pb-2 text-lg font-medium ${
            activeTab === "images"
              ? "text-black border-b-2 border-black"
              : "text-gray-400"
          }`}
        >
          Images
        </button>

        <button
          onClick={() => setActiveTab("videos")}
          className={`pb-2 text-lg font-medium ${
            activeTab === "videos"
              ? "text-black border-b-2 border-black"
              : "text-gray-400"
          }`}
        >
          Videos
        </button>
      </div>

      {/* 🔹 Content */}
      <div>
        {activeTab === "images" && (
          <GallerySlider images={images} />
        )}

        {activeTab === "videos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {videos.map((video, i) => (
              <video
                key={i}
                src={video}
                controls
                className="w-full h-[250px] object-cover rounded-xl"
              />
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default MediaTabs;