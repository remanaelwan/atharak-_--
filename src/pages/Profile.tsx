import { useTranslation } from 'react-i18next';
import { GlassCard } from '@/src/components/ui/LegacyUI';
import { User, Shield, Info, HelpCircle, ChevronRight, Settings, Globe } from 'lucide-react';
import { useAuthStore } from '@/src/store/authStore';

export default function Profile() {
  const { t } = useTranslation();
  const { user, setLanguage, language } = useAuthStore();

  const menuItems = [
    { label: 'المعلومات الشخصية', icon: User },
    { label: 'إعدادات الحساب', icon: Settings },
    { label: 'الأمان والخصوصية', icon: Shield },
    { label: 'تعيين الوصي', icon: User },
    { label: 'مركز المساعدة', icon: HelpCircle },
    { label: 'عن أثرك', icon: Info },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">الملف الشخصي</h1>
        <button className="p-2 bg-surface rounded-lg border border-border">
          <Settings className="w-5 h-5 text-text-secondary" />
        </button>
      </div>

      {/* User Info */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 mb-4 p-1">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" 
            alt="Profile" 
            className="w-full h-full object-cover rounded-full"
            referrerPolicy="no-referrer"
          />
        </div>
        <h2 className="text-xl font-bold">{user?.displayName}</h2>
        <p className="text-sm text-text-secondary">{user?.email}</p>
      </div>

      {/* Language Switch */}
      <GlassCard className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Globe className="w-5 h-5 text-accent" />
          <span className="text-sm font-bold">اللغة / Language</span>
        </div>
        <div className="flex bg-background rounded-lg p-1">
          <button 
            onClick={() => setLanguage('ar')}
            className={cn(
              "px-3 py-1 rounded-md text-[10px] font-bold uppercase",
              language === 'ar' ? "bg-primary text-white" : "text-text-muted"
            )}
          >
            AR
          </button>
          <button 
            onClick={() => setLanguage('en')}
            className={cn(
              "px-3 py-1 rounded-md text-[10px] font-bold uppercase",
              language === 'en' ? "bg-primary text-white" : "text-text-muted"
            )}
          >
            EN
          </button>
        </div>
      </GlassCard>

      {/* Menu */}
      <div className="space-y-2 mb-8">
        {menuItems.map((item, i) => (
          <div key={i}>
            <GlassCard className="flex items-center justify-between active:bg-primary/5 cursor-pointer py-4">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-surface-elevated rounded-lg">
                  <item.icon className="w-5 h-5 text-text-secondary" />
                </div>
                <span className="text-sm font-bold">{item.label}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-text-muted rotate-180" />
            </GlassCard>
          </div>
        ))}
      </div>

      <button className="w-full py-4 text-red-500 font-bold bg-red-500/5 rounded-2xl border border-red-500/20">
        تسجيل الخروج
      </button>
    </div>
  );
}

import { cn } from '@/src/lib/utils';
