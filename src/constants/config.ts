type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Wedyan Aloufi",
    fullName: "Wedyan Aloufi",
    email: "wedyaan-aloufi@hotmail.com",
  },
  hero: {
    name: "Wedyan.",
    p: ["I create visually attractive and user-friendly web interfaces."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Hi, my name is",
      h2: "Wedyan Aloufi.",
      content: ` I'm a passionate Front-End web developer with hands-on experience in building web applications using React.js & Next.js with TypeScript,JavaScript, TailwindCSS, and Prisma, with UI/UX designing.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `I specialize in creating intuitive and responsive web applications using modern technologies, My skills in transforming client requirements into seamless digital experiences ensure optimal performance across devices.`,
    },
  },
};
