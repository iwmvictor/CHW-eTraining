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
  id: slugify("Understanding HIV and AIDS"),
  author: "Dr. Jane Smith",
  duration: "3h 15m",
  rating: 4.9,
  title: "Understanding HIV and AIDS",
  description:
    "A comprehensive course for anyone who wants to understand HIV/AIDS—its history, transmission, prevention, treatment, and the global fight against stigma.",
  chapters: [
    {
      id: "ch1",
      title: "Chapter 1: Introduction to HIV and AIDS",
      subchapters: [
        {
          id: "ch1-sc1",
          title: "What is HIV?",
          content: `
            <h2>Understanding HIV</h2>
            <p><strong>HIV</strong> (Human Immunodeficiency Virus) is a virus that attacks the immune system.</p>
            <p>If left untreated, it can lead to <em>AIDS</em> (Acquired Immunodeficiency Syndrome).</p>
            <p>HIV is spread through certain body fluids and weakens the body's ability to fight infections.</p>
          `,
          video: videoFile,
          audio: audioFile,
        },
        {
          id: "ch1-sc2",
          title: "What is AIDS?",
          content: `
            <h2>The Progression to AIDS</h2>
            <p><strong>AIDS</strong> is the final stage of HIV infection.</p>
            <p>It occurs when the immune system becomes severely damaged due to the virus.</p>
            <p>With proper treatment, many people with HIV never develop AIDS.</p>
          `,
          video: videoFile,
          audio: audioFile,
        },
        {
          id: "ch1-sc3",
          title: "History of HIV/AIDS",
          content: `
            <h2>A Brief History</h2>
            <p>The first known cases of HIV were reported in the early 1980s.</p>
            <p>Initially misunderstood, HIV/AIDS became a global epidemic.</p>
            <p>Today, we have a much better understanding and effective treatments.</p>
          `,
          video: videoFile,
          audio: audioFile,
        },
      ],
    },
    {
      id: "ch2",
      title: "Chapter 2: Transmission and Prevention",
      subchapters: [
        {
          id: "ch2-sc1",
          title: "How HIV is Transmitted",
          content: `
            <h2>Modes of Transmission</h2>
            <p>HIV is transmitted through:</p>
            <ul>
              <li>Unprotected sex</li>
              <li>Sharing needles</li>
              <li>From mother to child during birth or breastfeeding</li>
              <li>Contaminated blood transfusions (rare today)</li>
            </ul>
          `,
          video: videoFile,
          audio: audioFile,
        },
        {
          id: "ch2-sc2",
          title: "How HIV is Not Transmitted",
          content: `
            <h2>Common Myths</h2>
            <p>HIV is <strong>not</strong> spread through:</p>
            <ul>
              <li>Coughing or sneezing</li>
              <li>Hugging or shaking hands</li>
              <li>Sharing food or water</li>
              <li>Toilet seats</li>
            </ul>
          `,
          video: videoFile,
          audio: audioFile,
        },
        {
          id: "ch2-sc3",
          title: "Prevention Methods",
          content: `
            <h2>Protecting Yourself and Others</h2>
            <p>Effective prevention includes:</p>
            <ul>
              <li>Using condoms</li>
              <li>Taking PrEP (pre-exposure prophylaxis)</li>
              <li>Getting tested regularly</li>
              <li>Limiting number of sexual partners</li>
            </ul>
          `,
          video: videoFile,
          audio: audioFile,
        },
        {
          id: "ch2-sc4",
          title: "Testing and Diagnosis",
          content: `
            <h2>Knowing Your Status</h2>
            <p>HIV testing is quick, easy, and confidential.</p>
            <p>Early diagnosis leads to better outcomes and helps prevent spread.</p>
            <p>Modern tests can detect HIV within weeks of exposure.</p>
          `,
          video: videoFile,
          audio: audioFile,
        },
      ],
    },
    {
      id: "ch3",
      title: "Chapter 3: Treatment and Living with HIV",
      subchapters: [
        {
          id: "ch3-sc1",
          title: "Antiretroviral Therapy (ART)",
          content: `
            <h2>Managing HIV with ART</h2>
            <p>ART involves taking a combination of medicines daily.</p>
            <p>It reduces the viral load and helps people live long, healthy lives.</p>
            <p>ART is available globally and often free or low-cost.</p>
          `,
          video: videoFile,
          audio: audioFile,
        },
        {
          id: "ch3-sc2",
          title: "Living a Healthy Life with HIV",
          content: `
            <h2>Beyond the Diagnosis</h2>
            <p>People with HIV can work, have families, and lead fulfilling lives.</p>
            <p>Healthy lifestyle choices and regular checkups are essential.</p>
            <p>Support systems also play a crucial role.</p>
          `,
          video: videoFile,
          audio: audioFile,
        },
        {
          id: "ch3-sc3",
          title: "U=U: Undetectable = Untransmittable",
          content: `
            <h2>What is U=U?</h2>
            <p>If a person with HIV is on ART and their viral load is undetectable, they cannot transmit HIV sexually.</p>
            <p>This powerful message helps reduce stigma and supports treatment adherence.</p>
          `,
          video: videoFile,
          audio: audioFile,
        },
      ],
    },
    {
      id: "ch4",
      title: "Chapter 4: Social Impact and Global Response",
      subchapters: [
        {
          id: "ch4-sc1",
          title: "Stigma and Discrimination",
          content: `
            <h2>Breaking the Stigma</h2>
            <p>Many people with HIV face stigma, which can impact mental health and access to care.</p>
            <p>Education and empathy are key to ending discrimination.</p>
          `,
          video: videoFile,
          audio: audioFile,
        },
        {
          id: "ch4-sc2",
          title: "HIV in Different Populations",
          content: `
            <h2>Vulnerable Groups</h2>
            <p>Some groups are at higher risk, including:</p>
            <ul>
              <li>Men who have sex with men</li>
              <li>Sex workers</li>
              <li>People who inject drugs</li>
              <li>Young women and girls in certain regions</li>
            </ul>
          `,
          video: videoFile,
          audio: audioFile,
        },
        {
          id: "ch4-sc3",
          title: "Global Efforts and Progress",
          content: `
            <h2>Fighting HIV Together</h2>
            <p>Organizations like UNAIDS and WHO work globally to combat HIV/AIDS.</p>
            <p>Access to testing, treatment, and education has improved greatly in recent years.</p>
            <p>The goal is to end the HIV epidemic by 2030.</p>
          `,
          video: videoFile,
          audio: audioFile,
        },
      ],
    },
  ],
};

