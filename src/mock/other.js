import { userProfiles } from "./asset";

export const chatDiscussion = {
  courseTitle: "Understanding Public Health and HIV",
  topic: "Discussion",
  progress: "12% Completed",
  lastOpened: "July 22, 2025",
  participants: [
    {
      name: "Diane Mugenzi",
      avatar: userProfiles.user1,
      messages: [
        {
          date: "July 27",
          content:
            "Hi everyone, I’m struggling a bit with the assignment on community outreach. It's my first time doing this type of task. Does anyone have examples I can learn from?",
          reactions: {
            likes: 5,
            replies: [
              {
                name: "Eric Niyonsenga",
                avatar: userProfiles.user2,
                date: "July 27",
                content:
                  "Hey Diane! I used a case study from WHO’s website. I can share the link if that helps.",
              },
              {
                name: "Cynthia Uwase",
                avatar: userProfiles.user3,
                date: "July 28",
                content:
                  "I was in the same boat last week. Here’s a sample I submitted (attached PDF).",
                attachments: ["Outreach_Sample.pdf"],
              },
            ],
          },
        },
      ],
    },
    {
      name: "Eric Niyonsenga",
      avatar: userProfiles.user2,
      messages: [
        {
          date: "July 28",
          content:
            "I think the most important part is showing how you would engage the local community. Don’t worry too much about structure.",
          reactions: {
            likes: 3,
            replies: [],
          },
        },
      ],
    },
    {
      name: "Cynthia Uwase",
      avatar: userProfiles.user3,
      messages: [
        {
          date: "July 28",
          content:
            "Here’s the PDF I mentioned. Feel free to use it as reference but don’t copy 😊",
          attachments: ["Outreach_Sample.pdf"],
          reactions: {
            likes: 4,
            replies: [],
          },
        },
      ],
    },
    {
      name: "Samuel Iradukunda",
      avatar: userProfiles.user4,
      messages: [
        {
          date: "July 29",
          content:
            "Thanks for the resources shared! Really useful. I’m working on mine now.",
          reactions: {
            likes: 2,
            replies: [],
          },
        },
      ],
    },
    {
      name: "Fatou Diop",
      avatar: userProfiles.user5,
      messages: [
        {
          date: "July 29",
          content:
            "Just submitted mine. Took me a while, but reading others' input helped a lot. Thanks everyone!",
          reactions: {
            likes: 6,
            replies: [],
          },
        },
      ],
    },
  ],
};
