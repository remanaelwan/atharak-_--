import { useTranslation } from 'react-i18next';
import { GlassCard } from '@/src/components/ui/LegacyUI';
import { Filter, Search, Plus, Calendar, Grid, Play, Mic, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';

export default function Memories() {
  const { t } = useTranslation();
  const [view, setView] = useState('grid');

  const categories = [
    { label: 'الصور', id: 'photos' },
    { label: 'الفيديوهات', id: 'videos' },
    { label: 'المناسبات', id: 'events' },
  ];

  const items = [
    { id: 1, type: 'photo', url: 'https://images.unsplash.com/photo-1510563800743-aed236490d08?w=300&h=300&fit=crop' },
    { id: 2, type: 'photo', url: 'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?w=300&h=300&fit=crop' },
    { id: 3, type: 'photo', url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=300&h=300&fit=crop' },
    { id: 4, type: 'photo', url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300&h=300&fit=crop' },
    { id: 5, type: 'photo', url: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=300&h=300&fit=crop' },
    { id: 6, type: 'photo', url: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=300&h=300&fit=crop' },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">التذكيرات</h1>
        <div className="flex gap-2">
          <button className="p-2 bg-surface rounded-lg border border-border">
            <Filter className="w-5 h-5 text-text-secondary" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className="px-6 py-2 bg-primary/20 border border-primary/40 rounded-xl text-sm font-bold active:bg-accent/20 active:border-accent"
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Masonry-like Grid */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="aspect-square rounded-2xl overflow-hidden relative border border-border shadow-lg"
          >
            <img 
              src={item.url} 
              alt="Memory" 
              className="w-full h-full object-cover transition-transform hover:scale-110 duration-700" 
              referrerPolicy="no-referrer"
            />
            {item.type === 'video' && <div className="absolute inset-0 flex items-center justify-center bg-black/20"><Play className="w-8 h-8 text-white fill-white" /></div>}
            {item.type === 'voice' && <div className="absolute inset-0 flex items-center justify-center bg-black/20"><Mic className="w-8 h-8 text-white" /></div>}
          </motion.div>
        ))}
      </div>

      {/* New Activity section */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold">تقارير الأثر</h3>
        <ChevronDown className="w-5 h-5 text-text-secondary" />
      </div>

      <GlassCard className="mb-8 overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-[10px] text-text-secondary uppercase">إجمالي التبرعات</p>
            <h4 className="text-xl font-black text-accent">5,760 د.م</h4>
          </div>
          <p className="text-xs text-text-muted">آخر 6 أشهر</p>
        </div>
        
        {/* Simple Chart Visualization */}
        <div className="flex items-end justify-between gap-2 h-24 mb-4">
          {[40, 70, 50, 90, 80, 100].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                className="w-full bg-primary-light rounded-t-lg glow-shadow"
              />
              <span className="text-[8px] text-text-muted">{['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'][i]}</span>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
