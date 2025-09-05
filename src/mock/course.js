// export const courses = [
//   {
//     id: 1,
//     title: "Introduction to Malaria",

import { assets } from "./asset";

//     instructor: "Dr. NIZEYIMANA A. Felix",
// thumbnail: assets.coursethumbnail,
//     language: ["EN", "KI", "FR"],
//     duration: "4 hours",
//     enrollments: 21,
//     certificate: true,
//     progress: 12,
//     chapters: 12,
//     lastOpened: "July 22, 2025",
//     description: `<p>This course provides a comprehensive overview of malaria, its causes, transmission methods, symptoms, and prevention strategies. Learners will gain insight into the importance of early detection and community health practices in malaria-prone areas.</p>`,
//     content: [
//       {
//         title: "Introduction to Malaria",
//         lessons: [
//           { title: "What is Malaria?", duration: "00:40" },
//           { title: "Types of Malaria Parasites", duration: "00:40" },
//         ],
//       },
//       {
//         title: "How Malaria Spreads and Who is Most at Risk",
//         lessons: [
//           {
//             title: "The Role of Mosquitoes in Malaria Transmission",
//             content: `
//               <h3>The Role of Mosquitoes in Malaria Transmission</h3>
//               <p>Malaria is primarily transmitted through the bite of a female <em>Anopheles</em> mosquito. These mosquitoes become infected when they bite a person who already has malaria parasites in their blood. After about 10 to 14 days, the parasites develop inside the mosquito, making it capable of spreading the disease to others.</p>
//               <p>When the infected mosquito bites another person, it injects the malaria parasite (<strong>Plasmodium</strong>) into the person’s bloodstream through its saliva. The parasite then travels to the liver, where it multiplies before invading red blood cells — causing symptoms such as fever, chills, and weakness.</p>
//               <div style="background-color:#e6ffe6;padding:10px;border-radius:4px;margin-top:10px;">
//                 ✅ <strong>Important to Note:</strong> Only female <em>Anopheles</em> mosquitoes transmit malaria, and they usually bite between dusk and dawn. This is why sleeping under treated mosquito nets (LLINs) is a key prevention strategy in Rwanda.
//               </div>
//               <p>The transmission cycle continues as long as there are infected humans and active mosquito breeding sites. Breaking this cycle — through community education, environmental hygiene, and mosquito control — is essential to reducing malaria cases.</p>
//             `
//           },
//           { title: "High-Risk Groups in the Community" },
//         ],
//       },
//       {
//         title: "Recognizing Early and Severe Symptoms",
//         lessons: [],
//       },
//       {
//         title: "How to Use a Rapid Diagnostic Test (RDT)",
//         lessons: [],
//       },
//     ],
//     reviews: [
//       {
//         name: "Reviewer Names",
//         rating: 5,
//         message:
//           "My favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top.",
//       },
//       {
//         name: "Reviewer Names",
//         rating: 5,
//         message:
//           "My favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top.",
//       },
//     ],
//   },
// ];

export const courses = [
  {
    id: 1,
    title: "Introduction to Malaria",
    instructor: "Dr. NIZEYIMANA A. Felix",
    thumbnail: assets.coursethumbnail,
    language: ["EN", "KI", "FR"],
    duration: "4 hours",
    enrollments: 21,
    certificate: true,
    progress: 100,
    chapters: 12,
    lastOpened: "July 22, 2025",
    description: `<p>This course provides a comprehensive overview of malaria, its causes, transmission methods, symptoms, and prevention strategies. Learners will gain insight into the importance of early detection and community health practices in malaria-prone areas.</p>`,
    content: [
      {
        title: "Introduction to Malaria",
        lessons: [
          { title: "What is Malaria?", duration: "00:40" },
          { title: "Types of Malaria Parasites", duration: "00:40" },
        ],
      },
      {
        title: "How Malaria Spreads and Who is Most at Risk",
        lessons: [
          {
            title: "The Role of Mosquitoes in Malaria Transmission",
            content: `
              <h3>The Role of Mosquitoes in Malaria Transmission</h3>
              <p>Malaria is primarily transmitted through the bite of a female <em>Anopheles</em> mosquito. These mosquitoes become infected when they bite a person who already has malaria parasites in their blood.</p>
              <p><strong>Important:</strong> Only female mosquitoes transmit malaria. They usually bite between dusk and dawn, which is why using mosquito nets (LLINs) is crucial.</p>
            `,
          },
          { title: "High-Risk Groups in the Community" },
        ],
      },
    ],
    reviews: [
      {
        name: "Reviewer Names",
        rating: 5,
        message:
          "My favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top.",
      },
    ],
  },

  {
    id: 2,
    title: "Understanding HIV & AIDS",
    instructor: "Dr. Grace Mugisha",
    thumbnail: assets.coursethumbnail,
    language: ["EN", "FR"],
    duration: "5 hours",
    enrollments: 85,
    certificate: true,
    progress: 40,
    chapters: 10,
    lastOpened: "August 2, 2025",
    description: `<p><strong>HIV & AIDS</strong> continue to impact millions globally. This course teaches the biology of the virus, how it spreads, treatment options, and how stigma can be reduced through awareness.</p>`,
    content: [
      {
        title: "HIV Basics",
        lessons: [
          { title: "What is HIV?", duration: "00:30" },
          { title: "HIV vs AIDS", duration: "00:45" },
        ],
      },
      {
        title: "Treatment & Prevention",
        lessons: [
          { title: "Antiretroviral Therapy (ART)" },
          { title: "Safe Practices and Prevention" },
        ],
      },
    ],
    reviews: [
      {
        name: "Peace N.",
        rating: 5,
        message:
          "Clear and respectful delivery of a sensitive topic. Thank you.",
      },
    ],
  },

  {
    id: 3,
    title: "Maternal Health Essentials",
    instructor: "Dr. Claire Niyonsaba",
    thumbnail: assets.coursethumbnail,
    language: ["EN", "KI"],
    duration: "6 hours",
    enrollments: 54,
    certificate: true,
    progress: 70,
    chapters: 8,
    lastOpened: "August 28, 2025",
    description: `<p>This course supports healthcare workers and community members in understanding maternal care before, during, and after pregnancy. Includes nutrition, danger signs, and postnatal care.</p>`,
    content: [
      {
        title: "Antenatal Care",
        lessons: [
          { title: "Importance of Early Checkups", duration: "00:50" },
          { title: "Nutrition in Pregnancy", duration: "00:35" },
        ],
      },
    ],
    reviews: [
      {
        name: "Janet K.",
        rating: 4,
        message: "Great resource for first-time mothers and health volunteers.",
      },
      {
        name: "Janet Kab.",
        rating: 3,
        message: "Great resource for first-time mothers and health volunteers.",
      },
    ],
  },

  {
    id: 4,
    title: "Safe Water, Sanitation & Hygiene (WASH)",
    instructor: "Mr. Eric Mugiraneza",
    thumbnail: assets.coursethumbnail,
    language: ["EN", "FR"],
    duration: "3.5 hours",
    enrollments: 102,
    certificate: true,
    status: "enrolled",
    progress: 100,
    chapters: 9,
    lastOpened: "August 20, 2025",
    description: `<p>Learn how to prevent waterborne diseases through practical WASH strategies including water purification, latrine building, and hygiene promotion.</p>`,
    content: [
      {
        title: "Water Safety",
        lessons: [
          { title: "Boiling & Filtering", duration: "00:25" },
          { title: "Chlorination Methods", duration: "00:30" },
        ],
      },
    ],
    reviews: [
      {
        name: "Jean-Claude M.",
        rating: 5,
        message:
          "We applied the hygiene tips in our village, and diarrhea cases dropped drastically.",
      },
    ],
  },

  {
    id: 5,
    title: "Community Health Mobilization",
    instructor: "Dr. Annette Uwizeyimana",
    thumbnail: assets.coursethumbnail,
    language: ["EN", "KI"],
    duration: "4 hours",
    enrollments: 60,
    certificate: true,
    status: "completed",
    progress: 50,
    chapters: 11,
    lastOpened: "August 30, 2025",
    description: `<p>This course empowers community health workers to engage their neighbors, build trust, and lead health initiatives effectively in rural and urban settings.</p>`,
    content: [
      {
        title: "Basics of Community Engagement",
        lessons: [
          { title: "Listening to Community Needs", duration: "00:45" },
          { title: "Cultural Competence", duration: "00:30" },
        ],
      },
    ],
    reviews: [
      {
        name: "David R.",
        rating: 4,
        message:
          "Simple, practical, and empowering. Made me more confident in my outreach role.",
      },
    ],
  },

  {
    id: 6,
    title: "Nutrition and Child Growth",
    instructor: "Dr. Paul Nkurunziza",
    thumbnail: assets.coursethumbnail,
    language: ["EN", "FR"],
    duration: "5 hours",
    enrollments: 48,
    certificate: true,
    status: "enrolled",
    progress: 18,
    chapters: 7,
    lastOpened: "September 1, 2025",
    description: `<p><em>Proper nutrition is essential</em> in the first 1000 days of a child’s life. Learn how to prevent stunting, monitor growth, and provide balanced meals on a limited budget.</p>`,
    content: [
      {
        title: "Nutrition Basics",
        lessons: [
          { title: "Micronutrients and Malnutrition", duration: "00:50" },
        ],
      },
    ],
    reviews: [
      {
        name: "Mama Louise",
        rating: 5,
        message:
          "Helped me understand how to use local foods to feed my children better.",
      },
    ],
  },

  {
    id: 7,
    title: "Mental Health First Aid",
    instructor: "Dr. Leonard Habimana",
    thumbnail: assets.coursethumbnail,
    language: ["EN"],
    duration: "4 hours",
    enrollments: 33,
    certificate: true,
    status: "completed",
    progress: 5,
    chapters: 6,
    lastOpened: "September 4, 2025",
    description: `<p>This beginner course introduces you to common mental health conditions, how to provide psychological first aid, and when to seek professional help.</p>`,
    content: [
      {
        title: "Understanding Mental Health",
        lessons: [
          { title: "Stress, Anxiety, and Depression", duration: "00:40" },
        ],
      },
    ],
    reviews: [
      {
        name: "Sam D.",
        rating: 5,
        message:
          "Everyone should take this. It opened my eyes to silent struggles in my community.",
      },
    ],
  },
];
