import { id } from "zod/v4/locales";
import audioFile from "/files/audio.mp3";
import docFile from "/files/doc.pdf";
import imageFile from "/files/image.png";
import videoFile from "/files/video.mp4";

export const courseData = {
  id: "react-advanced",
  title: "Advanced React Concepts",
  author: "John Doe",
  duration: "2h 30m",
  rating: 4.8,
  lessons: [
    {
      id: "lesson-1",
      title: "Hooks in Depth",
      duration: "25m",
      content: `Hooks are a powerful addition to React that allow you to use state and other React features without writing a class.`,
      videoSrc: videoFile,
      audioSrc: audioFile,
    },
    {
      id: "lesson-2",
      title: "Context API",
      duration: "30m",
      content: `The Context API provides a way to pass data through the component tree without having to pass props down manually at every level.`,
      videoSrc: videoFile,
      audioSrc: audioFile,
    },
    {
      id: "lesson-3",
      title: "Performance Optimization",
      duration: "20m",
      content: `Learn how to optimize your React app by memoizing components and avoiding unnecessary renders.`,
      videoSrc: videoFile,
      audioSrc: audioFile,
    },
    {
      id: "lesson-4",
      title: "React Router",
      duration: "25m",
      content: `React Router enables navigation among views of various components in a React Application.`,
      videoSrc: videoFile,
      audioSrc: audioFile,
    },
    {
      id: "lesson-5",
      title: "Testing React",
      duration: "10m",
      content: `Learn how to test your React components effectively using Jest and React Testing Library.`,
      videoSrc: videoFile,
      audioSrc: audioFile,
    },
    {
      id: "attached",
      title: "Attached Files",
      content: `Have attached files and other different resources for your references. `,
    },
  ],
};
