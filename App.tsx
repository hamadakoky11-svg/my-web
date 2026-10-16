--- src/App.tsx (原始)
export default function App() {
  return (
    <div/>
  );
}


+++ src/App.tsx (修改后)
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  websiteUrl: string;
  apkUrl?: string;
  tags: string[];
  status: 'live' | 'beta' | 'coming-soon';
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'متجر إلكتروني',
    description: 'منصة تسوق إلكتروني متكاملة مع نظام دفع آمن',
    longDescription: 'منصة تسوق إلكتروني متكاملة توفر تجربة تسوق سلسة وآمنة. تتضمن نظام إدارة المنتجات، سلة مشتريات ذكية، بوابات دفع متعددة، ونظام تتبع الشحنات.',
    image: '🛒',
    websiteUrl: 'https://example-store.com',
    apkUrl: 'https://example-store.com/app.apk',
    tags: ['React', 'Node.js', 'MongoDB'],
    status: 'live',
    features: ['نظام دفع آمن', 'تتبع الشحنات', 'إشعارات فورية', 'لوحة تحكم']
  },
  {
    id: 2,
    title: 'تطبيق إدارة المهام',
    description: 'تطبيق ذكي لإدارة المهام والمشاريع اليومية',
    longDescription: 'تطبيق متكامل لإدارة المهام والمشاريع يساعدك على تنظيم يومك وزيادة إنتاجيتك. يدعم التعاون الجماعي والتذكيرات الذكية.',
    image: '✅',
    websiteUrl: 'https://example-tasks.com',
    apkUrl: 'https://example-tasks.com/app.apk',
    tags: ['React Native', 'Firebase', 'TypeScript'],
    status: 'live',
    features: ['تنظيم المهام', 'تذكيرات ذكية', 'تعاون جماعي', 'تقارير أسبوعية']
  },
  {
    id: 3,
    title: 'منصة تعليمية',
    description: 'منصة تعليم إلكتروني مع دورات تفاعلية',
    longDescription: 'منصة تعليمية شاملة تقدم دورات تفاعلية في مختلف المجالات. تتضمن نظام اختبارات، شهادات إتمام، ومتابعة التقدم.',
    image: '📚',
    websiteUrl: 'https://example-learn.com',
    tags: ['Next.js', 'PostgreSQL', 'Stripe'],
    status: 'beta',
    features: ['دورات تفاعلية', 'شهادات إتمام', 'نظام اختبارات', 'متابعة التقدم']
  },
  {
    id: 4,
    title: 'تطبيق توصيل الطعام',
    description: 'تطبيق طلب وتوصيل طعام سريع وسهل',
    longDescription: 'تطبيق متكامل لطلب الطعام من أفضل المطاعم في منطقتك. يوفر تتبع الطلب لحظياً، تقييمات المطاعم، وعروض حصرية.',
    image: '🍔',
    websiteUrl: 'https://example-food.com',
    apkUrl: 'https://example-food.com/app.apk',
    tags: ['Flutter', 'Dart', 'Google Maps API'],
    status: 'live',
    features: ['تتبع لحظي', 'تقييمات المطاعم', 'عروض حصرية', 'دفع إلكتروني']
  },
  {
    id: 5,
    title: 'شبكة اجتماعية',
    description: 'منصة تواصل اجتماعي للمجتمعات المحلية',
    longDescription: 'منصة تواصل اجتماعي مصممة خصيصاً للمجتمعات المحلية. تتيح مشاركة الأخبار، الفعاليات، والتواصل مع الجيران.',
    image: '🌐',
    websiteUrl: 'https://example-social.com',
    tags: ['Vue.js', 'Express', 'Redis'],
    status: 'coming-soon',
    features: ['مشاركة الأخبار', 'فعاليات محلية', 'مجموعات', 'رسائل خاصة']
  },
  {
    id: 6,
    title: 'تطبيق اللياقة البدنية',
    description: 'تطبيق تمارين وبرامج رياضية مخصصة',
    longDescription: 'تطبيق شامل للياقة البدنية يقدم برامج تمارين مخصصة حسب أهدافك. يتضمن متتبع للسعرات، خطط غذائية، وتحديات رياضية.',
    image: '💪',
    websiteUrl: 'https://example-fitness.com',
    apkUrl: 'https://example-fitness.com/app.apk',
    tags: ['Kotlin', 'Android', 'SQLite'],
    status: 'beta',
    features: ['برامج مخصصة', 'متتبع السعرات', 'خطط غذائية', 'تحديات رياضية']
  }
];

function StatusBadge({ status }: { status: Project['status'] }) {
  const config = {
    'live': { text: 'نشط', color: 'bg-green-100 text-green-800 border-green-200' },
    'beta': { text: 'تجريبي', color: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
    'coming-soon': { text: 'قريباً', color: 'bg-purple-100 text-purple-800 border-purple-200' }
  };
  const { text, color } = config[status];
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${color}`}>
      {text}
    </span>
  );
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 hover:border-indigo-200 hover:-translate-y-2"
    >
      <div className="h-48 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300"></div>
        <span className="text-7xl group-hover:scale-110 transition-transform duration-300">{project.image}</span>
        <div className="absolute top-4 left-4">
          <StatusBadge status={project.status} />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded-md text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div
        className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="h-56 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center relative rounded-t-3xl">
          <span className="text-8xl">{project.image}</span>
          <button
            onClick={onClose}
            className="absolute top-4 left-4 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-all"
          >
            <i className="fas fa-times text-lg"></i>
          </button>
          <div className="absolute top-4 right-4">
            <StatusBadge status={project.status} />
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">{project.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-6">{project.longDescription}</p>

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <i className="fas fa-star text-yellow-500"></i>
              المميزات
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {project.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 bg-gray-50 rounded-lg p-3">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="mb-8">
            <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <i className="fas fa-code text-indigo-500"></i>
              التقنيات المستخدمة
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium border border-indigo-100">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <i className="fas fa-globe text-lg"></i>
              <span>زيارة الموقع</span>
            </a>
            {project.apkUrl && (
              <a
                href={project.apkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <i className="fab fa-android text-lg"></i>
                <span>تحميل APK</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.status === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 font-[Cairo]">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-white/90 text-sm">متاح للعمل على مشاريع جديدة</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
            مشاريعي وأعمالي
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            مجموعة من أفضل المشاريع والتطبيقات اللي اشتغلت عليها. كل مشروع فيه تفاصيل كاملة وروابط للتحميل
          </p>
          <div className="mt-8 flex items-center justify-center gap-6 text-white/70">
            <div className="flex items-center gap-2">
              <i className="fas fa-rocket"></i>
              <span>{projects.length} مشروع</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-mobile-alt"></i>
              <span>{projects.filter(p => p.apkUrl).length} تطبيق موبايل</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-globe"></i>
              <span>{projects.filter(p => p.status === 'live').length} موقع نشط</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </header>

      {/* Filter Section */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            { key: 'all', label: 'الكل', icon: 'fas fa-th' },
            { key: 'live', label: 'نشط', icon: 'fas fa-circle text-green-500 text-xs' },
            { key: 'beta', label: 'تجريبي', icon: 'fas fa-flask text-yellow-500' },
            { key: 'coming-soon', label: 'قريباً', icon: 'fas fa-clock text-purple-500' },
          ].map(({ key, label, icon }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                filter === key
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                  : 'bg-white text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 shadow-sm border border-gray-100'
              }`}
            >
              <i className={icon}></i>
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <span className="text-6xl mb-4 block">🔍</span>
            <p className="text-gray-500 text-lg">مفيش مشاريع في التصنيف ده</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">تواصل معي</h3>
          <p className="text-gray-400 mb-6">لو عايز تعمل مشروع زي دول أو أحسن، تواصل معايا</p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <a href="#" className="w-12 h-12 bg-white/10 hover:bg-indigo-600 rounded-full flex items-center justify-center transition-all duration-300">
              <i className="fab fa-github text-lg"></i>
            </a>
            <a href="#" className="w-12 h-12 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300">
              <i className="fab fa-linkedin text-lg"></i>
            </a>
            <a href="#" className="w-12 h-12 bg-white/10 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300">
              <i className="fab fa-whatsapp text-lg"></i>
            </a>
            <a href="#" className="w-12 h-12 bg-white/10 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300">
              <i className="fas fa-envelope text-lg"></i>
            </a>
          </div>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">© 2024 جميع الحقوق محفوظة</p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
