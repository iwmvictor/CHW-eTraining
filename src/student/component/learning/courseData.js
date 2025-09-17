import { id } from "zod/v4/locales";
import audioFile from "/files/audio.mp3";
import docFile from "/files/doc.pdf";
import imageFile from "/files/image.png";
import videoFile from "/files/video.mp4";
import { slugify } from "../../../mock/functions";

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

export const mockCourse = {
  id: slugify("Introduction to Modern Web Development"),
  author: "John Doe",
  duration: "2h 30m",
  rating: 4.8,
  title: "Introduction to Modern Web Development",
  description:
    "A beginner-friendly course to learn the fundamentals of web development, including HTML, CSS, JavaScript, and tools.",
  chapters: [
    {
      id: "ch1",
      title: "Chapter 1: Getting Started with Web Development",
      subchapters: [
        {
          id: "ch1-sc1",
          title: "What is Web Development?",
          content: `
            <h2>Introduction to Web Development</h2>
            <p><strong>Web development</strong> is the process of creating websites and web applications for the internet.</p>
            <p><em>Front-end</em> development deals with the visual elements, while <u>back-end</u> focuses on server-side logic.</p>
            <p>You'll also hear terms like <strong>Full-stack</strong>, which refers to someone who handles both sides.</p>
          `,
          video: videoFile,
          audio: audioFile,
        },
      ],
    },
    {
      id: "ch2",
      title: "Chapter 2: HTML Essentials",
      subchapters: [
        {
          id: "ch2-sc1",
          title: "Basic HTML Structure",
          content: `
            <h2>Understanding the HTML Skeleton</h2>
            <p>An HTML document typically starts with a <strong>&lt;!DOCTYPE html&gt;</strong> declaration.</p>
            <p>The structure includes <u>&lt;html&gt;</u>, <em>&lt;head&gt;</em>, and <strong>&lt;body&gt;</strong> sections.</p>
            <p>Within the <strong>&lt;body&gt;</strong>, you place visible elements such as <strong>&lt;h1&gt;</strong>, <strong>&lt;p&gt;</strong>, and <strong>&lt;a&gt;</strong>.</p>
          `,
          video: videoFile,
          audio: audioFile,
        },
      ],
    },
    {
      id: "ch3",
      title: "Chapter 3: Styling with CSS",
      subchapters: [
        {
          id: "ch3-sc1",
          title: "CSS Basics",
          content: `
            <h2>Adding Style with CSS</h2>
            <p>CSS stands for <strong>Cascading Style Sheets</strong> and is used to style HTML elements.</p>
            <p>You can use <em>inline</em>, <u>internal</u>, or <strong>external</strong> stylesheets.</p>
            <p>Common properties include <strong>color</strong>, <strong>font-size</strong>, <strong>margin</strong>, and <strong>padding</strong>.</p>
          `,
          video: videoFile,
          audio: audioFile,
        },
      ],
    },
    {
      id: "ch4",
      title: "Chapter 4: JavaScript Fundamentals",
      subchapters: [
        {
          id: "ch4-sc1",
          title: "Variables and Data Types",
          content: `
            <h2>JavaScript Variables</h2>
            <p>JavaScript allows you to declare variables using <strong>let</strong>, <strong>const</strong>, or <strong>var</strong>.</p>
            <p>Data types include: <em>string</em>, <em>number</em>, <em>boolean</em>, <u>object</u>, and <u>array</u>.</p>
            <p>Example: <code>let name = "Alice";</code></p>
          `,
          video: videoFile,
          audio: audioFile,
        },
      ],
    },
  ],
};
