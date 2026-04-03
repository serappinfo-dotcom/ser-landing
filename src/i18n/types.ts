export type Locale = "es" | "en";

export interface Dictionary {
  navbar: {
    links: { label: string; href: string }[];
    cta: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    cta: string;
    stats: { value: string; label: string }[];
    floatingTitle: string;
    floatingSubtitle: string;
  };
  problemSolution: {
    label: string;
    title: string;
    titleHighlight: string;
    sinSer: {
      title: string;
      items: string[];
      emptyMessage: string;
    };
    conSer: {
      title: string;
      liveBadge: string;
      items: { title: string; desc: string }[];
    };
  };
  benefits: {
    label: string;
    title: string;
    titleHighlight: string;
    items: string[];
    mockups: { label: string; desc: string; src: string }[];
  };
  howItWorks: {
    label: string;
    title: string;
    imageCaption: string;
    steps: { num: string; title: string; description: string }[];
  };
  plans: {
    label: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    trialNote: string;
    popularBadge: string;
    perMonth: string;
    choosePlan: string;
    items: {
      name: string;
      price: string;
      tagline: string;
      description: string;
      features: string[];
      ideal: string;
      color: string;
      highlighted: boolean;
    }[];
  };
  socialProof: {
    label: string;
    title: string;
    titleHighlight: string;
    trustBadges: string[];
    testimonials: {
      quote: string;
      name: string;
      location: string;
      photo: string;
    }[];
  };
  faq: {
    label: string;
    title: string;
    items: { q: string; a: string }[];
  };
  ctaFinal: {
    title: string;
    description: string;
    cta1: string;
    cta2: string;
    note: string;
    comingSoon: string;
    appStore: string;
    googlePlay: string;
  };
  footer: {
    tagline: string;
    productTitle: string;
    productLinks: { label: string; href: string }[];
    supportTitle: string;
    supportLinks: { label: string; href: string }[];
    copyright: string;
  };
}
