import Stories from "react-insta-stories";
import { Action, Renderer, Story } from "react-insta-stories/dist/interfaces"
import { useRef } from "react";
import { useScreenshot, createFileName } from 'use-react-screenshot-fix';

const stories: Story[] = [
  {
    url: 'https://randomwordgenerator.com/img/picture-generator/52e9d4454352a514f1dc8460962e33791c3ad6e04e5074417d2e72d29048c6_640.jpg',
    content: ({ action, isPaused, story }) => {
      const ref = useRef(null);
      const [image, takeScreenshot] = useScreenshot("image/jpeg", 1);
      const getImage = () => takeScreenshot(ref.current);
      const download = (image, { name = "img", extension = "jpeg" } = {}) => {
        const a = document.createElement("a");
        a.href = image;
        a.download = createFileName(extension, name);
        a.click();
      };

      const downloadScreenshot = () => takeScreenshot(ref.current).then(download);

      return <div ref={ref} style={{ width: "100%", height: "100%" }}>
        <img src={story.url} width="100%" height="100%" />
        <button style={{ zIndex: 99999, position: "absolute", bottom: 0, left: 20, color: "white", backgroundColor: "red" }} onClick={downloadScreenshot}> take screenshot!</button>
      </div>
    },
  },
  {
    url: 'https://randomwordgenerator.com/img/picture-generator/55e7d7464b55a914f1dc8460962e33791c3ad6e04e507440762e7adc9e45c3_640.jpg',
  },
  {
    url: 'https://randomwordgenerator.com/img/picture-generator/55e3dd404253a814f1dc8460962e33791c3ad6e04e50744076287ad39e49c6_640.jpg',
  }
];

export default function MyStory() {
  return <Stories
    stories={stories}
    width="100vw"
    height="100vh"
    progressWrapperStyles={{ height: "5px", radius: "4px" }}
    progressStyles={{ height: "5px", radius: "4px" }}
    loop
  />;
}
