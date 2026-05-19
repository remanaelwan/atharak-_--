import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { GlassCard } from '@/src/components/ui/LegacyUI';
import { ScrollText, Heart, Image as ImageIcon, Bot, Bell, Settings } from 'lucide-react';
import { useAuthStore } from '@/src/store/authStore';
import { cn } from '@/src/lib/utils';

export default function Home() {
  const { t } = useTranslation();
  const { user } = useAuthStore();

  const stats = [
    { label: 'أيام الاستمرار', value: '365', icon: ScrollText },
    { label: 'إجمالي التبرعات', value: '12,540', icon: Heart },
    { label: 'مستفيد', value: '1,254', icon: ImageIcon },
  ];

  const actions = [
    { label: t('actions.digitalWill'), icon: ScrollText, color: 'text-accent' },
    { label: t('actions.ongoingCharity'), icon: Heart, color: 'text-red-400' },
    { label: t('actions.myMemories'), icon: ImageIcon, color: 'text-blue-400' },
    { label: t('actions.aiAssistant'), icon: Bot, color: 'text-primary-glow' },
  ];

  return (
    <div className="p-6 pb-0">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" 
              alt="Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold">{t('app.greeting')} {user?.displayName}</h1>
            <p className="text-text-secondary text-sm">أثرك يستمر ويصنع الأثر</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-2 bg-surface rounded-full border border-border">
            <Bell className="w-5 h-5 text-text-secondary" />
          </button>
          <button className="p-2 bg-surface rounded-full border border-border">
            <Settings className="w-5 h-5 text-text-secondary" />
          </button>
        </div>
      </header>

      {/* Summary Card */}
      <GlassCard className="mb-8">
        <h2 className="text-accent font-bold mb-4">ملخص أثرك</h2>
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <stat.icon className="w-5 h-5 mx-auto mb-2 text-primary-glow" />
              <div className="text-lg font-bold">{stat.value}</div>
              <div className="text-[10px] text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Quick Actions */}
      <h3 className="font-bold mb-4">الخدمات الرئيسية</h3>
      <div className="grid grid-cols-3 gap-3 mb-8">
        {actions.map((action, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-card flex flex-col items-center justify-center gap-2 py-6 text-center cursor-pointer"
          >
            <action.icon className={cn("w-6 h-6", action.color)} />
            <span className="text-[10px] font-medium">{action.label}</span>
          </motion.div>
        ))}
        {/* Placeholder for more */}
        <div className="glass-card flex flex-col items-center justify-center gap-2 py-6 text-center opacity-50">
          <Settings className="w-6 h-6" />
          <span className="text-[10px] font-medium">المزيد</span>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold">أحدث النشاطات</h3>
        <button className="text-accent text-xs">عرض الكل</button>
      </div>
      <div className="space-y-3 pb-8">
        {[1, 2].map((_, i) => (
          <div key={i}>
            <GlassCard className="flex items-center gap-4 py-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <ScrollText className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold">رسالة مستقبلية للأبناء</h4>
                <p className="text-xs text-text-secondary">تمت الجدولة بعد الوفاة</p>
              </div>
              <div className="text-[10px] text-text-muted">منذ يومين</div>
            </GlassCard>
          </div>
        ))}
      </div>
    </div>
  );
}
