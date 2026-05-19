import { useTranslation } from 'react-i18next';
import { GlassCard, GlowButton } from '@/src/components/ui/LegacyUI';
import { Plus, Mail, Video, Mic, FileText, ChevronDown, Heart, User } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';

export default function Will() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');

  const willItems = [
    { type: 'letter', title: 'رسالة لأمي', content: 'أمي الغالية، أنت كل شيء في حياتي...', date: '20 مايو 2024', recipients: 1 },
    { type: 'heart', title: 'رسالة لزوجتي', content: 'شكراً لك على كل لحظة جميلة...', date: '18 مايو 2024', recipients: 1 },
    { type: 'group', title: 'رسالة لأطفالي', content: 'أبنائي الأعزاء، عندما تكبرون...', date: '15 مايو 2024', recipients: 3 },
    { type: 'mail', title: 'رسالة لأخي', content: 'أخي العزيز، كنت دائماً سندي...', date: '10 مايو 2024', recipients: 1 },
  ];

  const types = [
    { id: 'letters', label: 'رسائل', icon: Mail },
    { id: 'videos', label: 'فيديو', icon: Video },
    { id: 'files', label: 'ملفات', icon: FileText },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-accent">الوصية الرقمية</h1>
        <button className="p-2 bg-surface rounded-lg border border-border">
          <ChevronDown className="w-5 h-5 text-text-secondary" />
        </button>
      </div>

      {/* Progress */}
      <GlassCard className="mb-6 border-accent/20">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-bold">اكتمال وصيتك</span>
          <span className="text-accent font-bold">65%</span>
        </div>
        <div className="w-full bg-surface-elevated h-2 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '65%' }}
            transition={{ duration: 1 }}
            className="h-full bg-accent gold-glow"
          />
        </div>
      </GlassCard>

      {/* Filters */}
      <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar">
        {types.map((type) => (
          <button
            key={type.id}
            onClick={() => setFilter(type.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition-all whitespace-nowrap",
              filter === type.id ? "bg-accent/20 border border-accent text-accent" : "bg-surface border border-border text-text-secondary"
            )}
          >
            <type.icon className="w-4 h-4" />
            {type.label}
          </button>
        ))}
      </div>

      {/* Items List */}
      <div className="space-y-4 mb-8">
        {willItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <GlassCard className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-surface-elevated flex items-center justify-center border border-border">
                {item.type === 'letter' && <Mail className="w-5 h-5 text-accent" />}
                {item.type === 'heart' && <Heart className="w-5 h-5 text-red-400" />}
                {item.type === 'group' && <User className="w-5 h-5 text-blue-400" />}
                {item.type === 'mail' && <Mail className="w-5 h-5 text-green-400" />}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold">{item.title}</h3>
                  <ChevronDown className="w-4 h-4 text-text-muted" />
                </div>
                <p className="text-xs text-text-secondary line-clamp-1 mb-2">
                  {item.content}
                </p>
                <div className="flex items-center gap-3 text-[10px] text-text-muted">
                  <span>{item.date}</span>
                  <span>•</span>
                  <span>المستلمين: {item.recipients}</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <GlowButton variant="gold" className="w-full flex items-center justify-center gap-2">
        <Plus className="w-5 h-5" />
        إضافة رسالة جديدة
      </GlowButton>
    </div>
  );
}
