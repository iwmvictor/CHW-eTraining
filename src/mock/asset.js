import playstore from "/images/img/playstore.svg";

import authBg from "/images/img/auth-bg.png";

import userProfile from "/images/img/user.png";
import userProfileCover from "/images/img/cover.png";

import placeholderImg from "/images/img/placeholder.svg";

import homeHero from "/images/bg/hero.png";
import ctaImg from "/images/bg/cta.png";
import abtHero from "/images/bg/abthero.png";

const coursethumbnail =
  "https://malariatraining.org/wp-content/uploads/2022/01/banner-malaria-course-01-1-1024x518.jpg";

import certificate from "/images/img/certificate.svg";
import medal from "/images/img/medal.svg";

import profile1 from "/images/img/user1.png";
import profile2 from "/images/img/user3.png";
import profile3 from "/images/img/user2.png";

import adCourse from "/images/img/advert.png";

import errorBg from "/images/img/woman.png";

export const assets = {
  playstore,
  userProfile,
  certificate,
  placeholderImg,
  userProfileCover,
  coursethumbnail,
  medal,
  adCourse,

  learners: {
    profile1,
    profile2,
    profile3,
  },

  auth: {
    bg: authBg,
  },

  bg: {
    homeHero,
    ctaImg,
    abtHero,
    errorBg,
  },
};

export const rwanda = {
  northern: {
    musanze: {
      cyuve: {
        kigombe: ["Rugarama", "Kinyababa", "Kigombe I", "Kigombe II"],
        kabazungu: ["Kabazungu I", "Kabazungu II", "Nyakabanda"],
      },
      muhoza: {
        rwambogo: ["Rwebeya", "Gasave"],
        kabeza: ["Kabeza I", "Kabeza II"],
      },
    },
    gakenke: {
      busengo: {
        butereri: ["Butereri", "Rugendabari", "Gasakuza", "Rubaga"],
        kamina: ["Kamina"],
      },
      rusasa: {
        nyundo: ["Nyundo I", "Nyundo II"],
        kabuga: ["Kabuga A", "Kabuga B"],
      },
    },
  },
  southern: {
    huye: {
      ngoma: {
        gikingo: ["Gikingo I", "Gikingo II"],
        cyarwa: ["Rango A", "Rango B"],
      },
      tumba: {
        karama: ["Karama I", "Karama II"],
        buhimba: ["Buhimba I", "Buhimba II"],
      },
    },
    nyanza: {
      busasamana: {
        kabuga: ["Kabuga I", "Kabuga II"],
        muganza: ["Muganza I", "Muganza II"],
      },
    },
  },
  eastern: {
    kayonza: {
      mukarange: {
        gikaya: ["Gikaya I", "Gikaya II"],
        nyagatovu: ["Nyagatovu I", "Nyagatovu II"],
      },
      rwimishinya: {
        kabarondo: ["Kabarondo I", "Kabarondo II"],
        nyamugari: ["Nyamugari I", "Nyamugari II"],
      },
    },
    bugesera: {
      nyamata: {
        kigarama: ["Kigarama I", "Kigarama II"],
        nyarugenge: ["Nyarugenge I", "Nyarugenge II"],
      },
    },
  },
  western: {
    rubavu: {
      gisenyi: {
        umudugudu: ["Umudugudu A", "Umudugudu B"],
        rugerero: ["Rugerero I", "Rugerero II"],
      },
    },
    rusizi: {
      kamembe: {
        nyakarenzo: ["Nyakarenzo I", "Nyakarenzo II"],
        bugoyi: ["Bugoyi I", "Bugoyi II"],
      },
    },
  },
  kigali: {
    gasabo: {
      kimironko: {
        bibare: ["Bibare I", "Bibare II"],
        kigabiro: ["Kigabiro I", "Kigabiro II"],
      },
      remera: {
        nyabisindu: ["Nyabisindu I", "Nyabisindu II"],
        nyarutarama: ["Nyarutarama I", "Nyarutarama II"],
      },
    },
    kicukiro: {
      kanombe: {
        karama: ["Karama I", "Karama II"],
        busanza: ["Busanza I", "Busanza II"],
      },
      gatenga: {
        nyarurama: ["Nyarurama I", "Nyarurama II"],
        kagina: ["Kagina I", "Kagina II"],
      },
    },
    nyarugenge: {
      nyamirambo: {
        bilyogo: ["Bilyogo I", "Bilyogo II"],
        rwezamenyo: ["Rwezamenyo I", "Rwezamenyo II"],
      },
      kigali: {
        nyabugogo: ["Nyabugogo I", "Nyabugogo II"],
        cyahafi: ["Cyahafi I", "Cyahafi II"],
      },
    },
  },
};

export const users = [
  {
    username: "ghzrista",
    fullname: "Christa Gihozo",
    email: "ghzrista@gmail.com",
    phonenumber: "+250788123456",
    profilePicture: "/images/img/user1.png",
    role: "trainer",
    address: {
      district: "Gasabo",
      sector: "Kimironko",
      cell: "Bibare",
      village: "Bibare I",
    },
    expertise: ["Maternal Health", "Nutrition"],
    assignedTrainees: ["jndoe", "amukamana"],
    bio: "Experienced community health trainer with 5 years in the field.",
  },
  {
    username: "jndoe",
    fullname: "John Doe",
    email: "jndoe@example.com",
    phonenumber: "+250788654321",
    profilePicture: "/images/img/user2.png",
    role: "trainee",
    address: {
      district: "Kicukiro",
      sector: "Kanombe",
      cell: "Karama",
      village: "Karama I",
    },
    enrolledCourses: ["First Aid", "Child Care"],
    trainer: "ghzrista",
    progress: 75,
    bio: "Aspiring health worker passionate about community service.",
  },
  {
    username: "amukamana",
    fullname: "Alice Mukamana",
    email: "amukamana@gmail.com",
    phonenumber: "+250788987654",
    profilePicture: "/images/img/user3.png",
    role: "admin",
    address: {
      district: "Nyarugenge",
      sector: "Nyamirambo",
      cell: "Bilyogo",
      village: "Bilyogo II",
    },
    permissions: ["manage_users", "view_reports", "assign_roles"],
    department: "System Administration",
    bio: "System administrator ensuring smooth platform operations.",
  },
];

const user1 =
  "https://media.licdn.com/dms/image/v2/D5603AQEhoBl_n0sVvw/profile-displayphoto-scale_100_100/B56ZkOpc6wHQAg-/0/1756887372915?e=1759968000&v=beta&t=4kFNqkTnQWD0LjOjEkAUZCpClyCruWzE05BSt4HAr20";
const user2 =
  "https://media.licdn.com/dms/image/v2/D4D03AQGG2xZYW_SrRA/profile-displayphoto-shrink_100_100/B4DZbZLDteHsAU-/0/1747400278177?e=1759968000&v=beta&t=90i36KXNjwhZF-HU8eX2VNGDBb3imFgGt7KpIkB_E1Y";
const user3 =
  "https://media.licdn.com/dms/image/v2/D4D03AQFw7szCCkWQ9Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1720024972772?e=1759968000&v=beta&t=_7x0uB_2WaEQjD5ioUlotn8vy8UXkiKshi5vClIhweg";
const user4 =
  "https://media.licdn.com/dms/image/v2/D4D03AQFdl-N2zS5jAQ/profile-displayphoto-scale_100_100/B4DZjnqE9FGQAc-/0/1756233224730?e=1759968000&v=beta&t=Vm0LQPMyjFpmbVfJPOCkXC_9VOln63bs2G86BPS9wDg";
const user5 =
  "https://media.licdn.com/dms/image/v2/D5603AQHB1U7D4teMmQ/profile-displayphoto-scale_100_100/B56ZiIPBcMHkAg-/0/1754632298840?e=1759968000&v=beta&t=rH8sz4WKLa3lJqs6Fv1-o5Xvm1rg8kZQD5hsGFjsHWI";
const user8 =
  "https://media.licdn.com/dms/image/v2/D5603AQEL33x4MF0W_w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1728467702964?e=1759968000&v=beta&t=NUZKdK6UPo_u5QPzwSOHfRWSV8AYT9OrZ_9c38NkX3k";
const user7 =
  "https://media.licdn.com/dms/image/v2/D4E03AQGS_9tms0LUSw/profile-displayphoto-shrink_100_100/B4EZQxiQIBHsAY-/0/1735997851768?e=1759968000&v=beta&t=PyPgOY1nTP_hdHWsm1EPFiKmZbBTx1jTfUj-FphK7TM";
const user6 =
  "https://media.licdn.com/dms/image/v2/C4D03AQHXzbQHfswenw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1564413679670?e=1759968000&v=beta&t=ZJ_sBK1BSygFV8QFHABtSD7Iqjok4kKOKNpML_Nj97A";
const user9 =
  "https://media.licdn.com/dms/image/v2/D4D03AQG7oH4qDNyM3g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723264514879?e=1759968000&v=beta&t=JnphVZNosEMcHqUi-pztdljIFNvw97yDP6pf_BMYHrs";

export const userProfiles = {
  user1,
  user2,
  user3,
  user4,
  user5,
  user6,
  user7,
  user8,
  user9,
};
