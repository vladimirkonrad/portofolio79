export type WorkTile = {
  title: string;
  description: string;
  long_description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export const workTiles: WorkTile[] = [
  {
    description: `Here are things`,
    title: `I've worked on`,
    long_description: 'Look: ↓↓↓',
    image: {
      src: '/static/images/aphex-apps.webp',
      width: 600,
      height: 770,
    },
  },
  {
    description: 'Wordpress',
    title: 'Plugins & Customization',
    long_description: 'WooCommerce conecting to ERP, makeing custom APIs ...',
    image: {
      src: '/static/images/field-app.webp',
      width: 600,
      height: 554,
    },
  },
  {
    description: `I build`,
    title: 'Web Applications',
    long_description: 'I use diferent frameworks WP, Laravel, NEXT.js ...',
    image: {
      src: '/static/images/planner-app.webp',
      width: 600,
      height: 717,
    },
  },
  {
    description: `I build`,
    title: 'API & Database Apps',
    long_description: 'TransactSQL-MsSQL, MySQL, Postgress, Supabase (Firebase)',
    image: {
      src: '/static/images/publication-app.webp',
      width: 600,
      height: 717,
    },
  },
];
