import profileImage from "assets/profile-pic.jpeg";
import skateImage from "assets/skate.jpg";
import pokemonImage from "assets/pokemon.jpg";

export const head = {
  image: {
    class: "py-6 order-first md:order-1 md:flex",
    picClass:
      "transition-all duration-500 filter grayscale hover:grayscale-0 flex justify-center w-full",
    src: profileImage,
    alt: "Profile Picture",
    widths: [200, 400, 560],
  },
  title: "Commercial Portfolio ",
  titleClass: "text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight",
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
  links: [
    {
      href: "https://example.com/contact1",
      target: "_blank",
      class: "flex gap-1 items-center justify-center",
      rel: "noopener",
      style: "primary",
      icon: {
        name: "bx:bxl-whatsapp",
        class: "text-white w-5 h-5",
      },
      text: "Contact me 1",
    },
    {
      href: "https://github.com/example/repo1",
      target: "_blank",
      class: "flex gap-1 items-center justify-center",
      rel: "noopener",
      style: "outline",
      icon: {
        name: "bx:bxl-github",
        class: "text-black w-5 h-5",
      },
      text: "GitHub Repo 1",
      size: "lg",
    },
  ],
};

export const features = {
  title: "Everything you need to start a website",
  subtitle:
    "Astro comes batteries included. It takes the best parts of state-of-the-art tools and adds its own innovations.",
  items: [
    {
      title: "Bring Your Own Framework",
      content:
        "Build your site using React, Svelte, Vue, Preact, web components, or just plain ol' HTML + JavaScript.",
      icon: "bx:bxs-briefcase",
    },
    {
      title: "100% Static HTML, No JS",
      content:
        "Astro renders your entire page to static HTML, removing all JavaScript from your final build by default.",
      icon: "bx:bxs-window-alt",
    },
    {
      title: "On-Demand Components",
      content:
        "Need some JS? Astro can automatically hydrate interactive components when they become visible on the page.",
      icon: "bx:bxs-data",
    },
    {
      title: "Broad Integration",
      content:
        "Astro supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX, and any other npm packages.",
      icon: "bx:bxs-bot",
    },
    {
      title: "SEO Enabled",
      content:
        "Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication. It just works!",
      icon: "bx:bxs-file-find",
    },
    {
      title: "Community",
      content:
        "Astro is an open source project powered by hundreds of contributors making thousands of individual contributions.",
      icon: "bx:bxs-user",
    },
  ],
};

export const block1 = {
  image: {
    class: "md:order-first md:flex",
    picClass: "flex justify-center w-full",
    src: pokemonImage,
    alt: "Profile Picture",
    widths: [200, 400, 460],
  },
  title: "Ola K Ase",
  titleClass: "text-4xl font-bold lg:tracking-tight",
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
};

export const block2 = {
  image: {
    class: "md:order-1 md:flex",
    picClass: "flex justify-center w-full",
    src: skateImage,
    alt: "Profile Picture",
    widths: [200, 400, 460],
  },
  title: "Ponada aki a ve",
  titleClass: "text-4xl font-bold lg:tracking-tight",
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
};
