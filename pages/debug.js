import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

export default function debug() {
  const images = [
    {
      embedUrl:
        "https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0",
      renderItem: renderVideo,
    },
    {
      embedUrl:
        "https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0",
      renderItem: renderVideo,
    },
    {
      embedUrl:
        "https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0",
      renderItem: renderVideo,
    },
  ];

  function renderVideo(item) {
    return (
      <div>
        <div className="video-wrapper">
          <iframe
            width="560"
            height="315"
            src={item.embedUrl}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={"flex flex-row justify-center px-4"}>
        <ImageGallery
          items={images}
          showThumbnails={false}
          infinite={true}
          showFullscreenButton={false}
          showPlayButton={false}
          slideDuration={1000}
        />
      </div>
    </div>
  );
}
