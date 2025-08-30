export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: 'web-app' | 'automation' | 'platform' | 'tool';
  image: string;
  liveLink?: string;
  sourceLink: string;
  features: string[];
  achievements?: string[];
  status: 'live' | 'development' | 'maintenance';
}

export const projects: Project[] = [
  {
    id: 'libread',
    title: 'LibRead',
    subtitle: 'Multi-Modal Text-to-Speech Platform',
    description: 'Revolutionary content-to-audio transformation platform with advanced Speech Synthesis and multi-format support.',
    longDescription: 'LibRead is a comprehensive Next.js 15 application that transforms any text content into engaging audio experiences. Built with cutting-edge technologies, it supports 4 specialized readers and offers cross-platform compatibility across 20+ browsers.',
    tech: ['Next.js 15', 'React 19', 'TypeScript', 'Web Speech API', 'Tailwind CSS', 'Cheerio', 'Mammoth'],
    category: 'platform',
    image: '/images/libread.png',
    liveLink: 'https://libread.vercel.app/',
    sourceLink: 'https://github.com/Musyonchez/libread',
    features: [
      '4 Specialized Readers (Text, Document, Web, Novel)',
      'Advanced Speech Synthesis with custom hooks',
      'PDF, DOCX, TXT document processing (10MB support)',
      'Intelligent web content extraction with ad filtering',
      '20+ browser compatibility detection',
      'Real-time paragraph-level navigation',
      'Speed adjustment during playback',
      'Mobile-first responsive design'
    ],
    achievements: [
      'Bulletproof callback synchronization system',
      'Race condition prevention with ref flags',
      'Professional responsive design implementation',
      'Comprehensive error handling and validation'
    ],
    status: 'live'
  },
  {
    id: 'stocksync',
    title: 'StockSync',
    subtitle: 'Enterprise Inventory Management System',
    description: 'Full-stack inventory management solution with real-time synchronization, multi-store support, and advanced analytics.',
    longDescription: 'StockSync is an enterprise-grade inventory management platform featuring a sophisticated multi-database architecture, real-time synchronization, and comprehensive GraphQL API. Built for scalability and performance.',
    tech: ['Next.js 14', 'Redux-Saga', 'Apollo Client', 'GraphQL', 'Node.js', 'Express', 'Prisma', 'MongoDB', 'AWS S3'],
    category: 'web-app',
    image: '/images/stocksync.png',
    liveLink: 'https://stocksync-client.vercel.app',
    sourceLink: 'https://github.com/Musyonchez/StockSync-Client',
    features: [
      'Real-time inventory synchronization',
      'Multi-store management (4 locations)',
      'Advanced state management with Redux-Saga',
      'GraphQL API with authentication',
      'Role-based access control',
      'PDF invoice and order generation',
      'AWS S3 file handling integration',
      'Multi-database MongoDB architecture',
      'Complex async workflow management'
    ],
    achievements: [
      'Multi-database system with separate domain schemas',
      'Advanced Redux-Saga implementation for complex workflows',
      'Comprehensive authentication and authorization system',
      'Production-ready with live users'
    ],
    status: 'live'
  },
  {
    id: 'mp3ninja',
    title: 'MP3Ninja',
    subtitle: 'YouTube Search & Processing Platform',
    description: 'Advanced YouTube search and management system with Python integration and smart optimization techniques.',
    longDescription: 'MP3Ninja is an innovative YouTube processing platform that integrates yt-dlp Python library for advanced video management. Features multiple search methods and intelligent deployment handling.',
    tech: ['Next.js 15', 'TypeScript', 'Python', 'yt-dlp', 'Tailwind CSS', 'Node.js'],
    category: 'tool',
    image: '/images/mp3ninja.png',
    liveLink: 'https://mp3ninja.vercel.app/',
    sourceLink: 'https://github.com/Musyonchez/yt',
    features: [
      'Triple search methods (Name, Video URL, Playlist)',
      'yt-dlp Python integration via Node.js processes',
      'Smart pagination with 50-result batching',
      'Environment detection (localhost vs production)',
      'Professional UI with complete theme system',
      'Responsive grid layouts (1-4 columns)',
      'Timeout management (30s-90s based on operation)',
      'GitHub setup instructions modal'
    ],
    achievements: [
      'Complex Python subprocess integration',
      'Advanced pagination optimization',
      'Comprehensive hosting limitation handling',
      'SaaS-level UI/UX implementation'
    ],
    status: 'live'
  },
  {
    id: 'syntaxmem',
    title: 'SyntaxMem',
    subtitle: 'Code Practice & Authentication Platform',
    description: 'Modern authentication system with glassmorphism design, built on Next.js 15 with Supabase integration.',
    longDescription: 'SyntaxMem represents the future of code learning platforms, featuring a beautiful glassmorphism UI, modern authentication flows, and real-time database integration with Supabase.',
    tech: ['Next.js 15', 'React 19', 'Supabase', 'PostgreSQL', 'OAuth', 'TypeScript', 'Tailwind CSS'],
    category: 'platform',
    image: '/images/syntaxmem.png',
    liveLink: 'https://syntaxmemdev.vercel.app',
    sourceLink: 'https://github.com/Musyonchez/syntax',
    features: [
      'Modern Google OAuth integration',
      'SSR-compatible authentication',
      'Protected route guards with loading states',
      'Premium glassmorphism design system',
      'Blue-to-purple gradient color palette',
      'Real-time database integration',
      'Mobile-first responsive design',
      'User session management'
    ],
    achievements: [
      'Server-side rendering compatible auth system',
      'Beautiful glassmorphism UI implementation',
      'Clean separation of concerns architecture',
      'Type-safe development workflow'
    ],
    status: 'development'
  }
];