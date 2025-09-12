import { userProfiles } from "./asset";

export const chats = [
  {
    id: "sonia-gatete",
    name: "Sonia Gatete",
    avatar: userProfiles.user1,
    messages: [
      {
        id: 1,
        sender: "Sonia Gatete",
        isMyMessage: false,
        time: "3:40 PM",
        text: "Hey David, How are you today?",
      },
      {
        id: 2,
        sender: "Me",
        isMyMessage: true,
        time: "3:41 PM",
        text: "Hey Sonia! I'm good, just reviewing your drafts.",
      },
      {
        id: 3,
        sender: "Sonia Gatete",
        isMyMessage: false,
        time: "3:43 PM",
        text: "Which of the two versions did you like most?",
        attachments: ["/attachments/design1.png", "/attachments/design2.png"],
      },
      {
        id: 4,
        sender: "Me",
        isMyMessage: true,
        time: "3:45 PM",
        text: "Honestly, the 2nd one looks more polished!",
      },
    ],
  },
  {
    id: "dev",
    name: "Developer",
    avatar: userProfiles.user6,
    messages: [
      {
        id: 1,
        sender: "Sonia Gatete",
        isMyMessage: false,
        time: "3:40 PM",
        text: "Hey David, How are you today?",
      },
      {
        id: 2,
        sender: "Me",
        isMyMessage: true,
        time: "3:41 PM",
        text: "Hey Sonia! I'm good, just reviewing your drafts.",
      },
      {
        id: 3,
        sender: "Sonia Gatete",
        isMyMessage: false,
        time: "3:43 PM",
        text: "Which of the two versions did you like most?",
        attachments: ["/attachments/design1.png", "/attachments/design2.png"],
      },
      {
        id: 4,
        sender: "Me",
        isMyMessage: true,
        time: "3:45 PM",
        text: "Honestly, the 2nd one looks more polished!",
      },
    ],
  },

  {
    id: "aimme-bienvenue",
    name: "Aimme Bienvenue",
    avatar: userProfiles.user2,
    messages: [
      {
        id: 1,
        sender: "Aimme Bienvenue",
        isMyMessage: false,
        time: "2:15 PM",
        text: "Hello David! Just shared the latest schedule for review.",
        attachments: ["/attachments/schedule.pdf"],
      },
      {
        id: 2,
        sender: "Me",
        isMyMessage: true,
        time: "2:20 PM",
        text: "Got it. Looks perfect, thanks Aimme!",
      },
    ],
  },

  {
    id: "elia-by",
    name: "Elia BY.",
    avatar: userProfiles.user3,
    messages: [
      {
        id: 1,
        sender: "Elia BY.",
        isMyMessage: false,
        time: "10:03 AM",
        text: "Yo David, still waiting on that UI feedback 😅",
      },
      {
        id: 2,
        sender: "Me",
        isMyMessage: true,
        time: "10:06 AM",
        text: "Ah yes! I’ll send the notes in a few. It’s almost done.",
      },
    ],
  },

  {
    id: "gatere-emmanuel",
    name: "Gatere Emmanuel",
    avatar: userProfiles.user4,
    messages: [
      {
        id: 1,
        sender: "Me",
        isMyMessage: true,
        time: "3:40 PM",
        text: "Hi David, Which one do you think is better??",
        attachments: [userProfiles.user1, userProfiles.user4],
      },
      {
        id: 2,
        sender: "Me",
        isMyMessage: true,
        time: "3:41 PM",
        text: "Hello, I think the 2nd looks awesome.. can you resend the 2nd with all changes added? Curious!",
      },
    ],
  },
];

export const chatBot = [
  {
    user: "bot",
    message: `<p>Hello, Welcome on board <br/> I am CHW’s AI Assistant, give me you name and how can i help you today?</p>`,
  },
  {
    user: "you",
    message: `Hi, I am David <br/> Just curious wanna know more about CHW e-learning program and how it help local health advisors?`,
  },
  {
    user: "bot",
    message: `Sure, <b>David</b>! I'd be happy to help. <br/>The CHW e-learning program (short for Community Health Worker e-learning program) is a digital training platform designed to educate and support local health advisors or community health workers (CHWs).`,
  },
];
