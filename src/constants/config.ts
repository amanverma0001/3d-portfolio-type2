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
    title: "Amandeep Verma — 3D Portfolio",
    fullName: "Amandeep Verma",
    email: "amandeepverma3001@gmail.com",
  },
  hero: {
    name: "Amandeep Verma",
    p: ["I develop full-stack applications, machine learning", "models and immersive 3D user interfaces"],
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
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a motivated Computer Science undergraduate at Bennett University with a strong foundation in full-stack development, machine learning, and UI/UX design. I'm passionate about building scalable applications and exploring generative AI. I specialize in building high-performance web applications using React, Node.js, and Three.js. Let's work together to bring your ideas to life!`,
    },
    experience: {
      p: "My educational journey",
      h2: "Education.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `The following projects showcase my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
