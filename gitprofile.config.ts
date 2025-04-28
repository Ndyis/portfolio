// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Ndyis', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Emergency Transport Dispatch System',
          description:
            'We have developed an Emergency Transport System using Microsoft technologies. Please take a look, and leave your feedback or suggestions.',
          imageUrl:
            'https://www.rdacorp.com/hs-fs/hubfs/Microsoft-Power-Platform.jpg?width=2033&height=1530&name=Microsoft-Power-Platform.jpg',
          link: 'https://www.linkedin.com/pulse/emergency-transport-dispatch-system-kelvin-sikamoi/?trackingId=0Yr7%2B3MrTR2HNI8IOMrICA%3D%3D',
        },
        {
          title: 'CYBERMAPPING',
          description:
            'comming soon.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Isaac Ndayishimiye',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'isaac-ndayishimiye',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'ndayishimiisaac@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Cloud security',
    'Network security',
    'Penetration testing and ethical hacking',
    'Web App Security',
    'Programming and scripting',
    'Security Frameworks and Tools',
    'Database Management Systems',
    'Operating system ',
    'Wireless Security',
    'Version control systems',
     'Incident Response',
    'Vulnerability Assessment',
    'Cryptography',
    'Project management tools',
   
  ],
  experiences: [
    {
      company: 'WHTA Networks',
      position: 'Cybersecurity attachee',
      from: 'January 2024',
      to: 'March 2024',
      companyLink: '',
    },
    
  ],
  certifications: [
    {
      name: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals',
      body: 'Microsoft',
      year: 'February 2023',
      link: 'https://www.credly.com/badges/60657217-2558-4f53-8488-a34a2a4c04a7/public_url',
    },
    {
      name: 'Certified in Cybersecurity',
      body: 'ISC2',
      year: 'May 2023',
      link: 'https://drive.google.com/file/d/1Lshjd6Yw6ulu0haFIgPaIqRszDF6ueT6/view',
    },
      {
      name: 'Microsoft Certified: Azure Fundamentals',
      body: 'Microsoft',
      year: 'June 2023',
      link: 'https://www.credly.com/badges/e0a48ea3-8d76-4413-96d3-9b84b9eb6c63/public_url',
    },
    {
      name: 'Ethical Hacker',
      body: 'CISCO',
      year: 'July 2024',
      link: 'https://www.credly.com/badges/1b1a3b2f-a8eb-4422-8478-d3772d8aa29c/public_url',
    },
    {
      name: 'Zero Trust Certified Associate (ZTCA)',
      body: 'Zscaler',
      year: 'March 2025',
      link: 'https://www.credly.com/badges/1b1a3b2f-a8eb-4422-8478-d3772d8aa29c/public_url',
    },
    
  ],
  educations: [
    {
      institution: 'Jomo Kenyatta University of Agriculture and Technology',
      degree: 'BSc Computer Technology',
      from: '2021',
      to: '2025',
    },
    
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
   // limit: 10, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-CVKMNCK0ZW', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'Dim',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/Ndyis/portfolio"
      target="_blank"
      rel="noreferrer"
    >Portfolio</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
