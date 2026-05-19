import { useTranslation } from 'react-i18next';
import { GlassCard, GlowButton } from '@/src/components/ui/LegacyUI';
import { Heart, Search, CheckCircle2, ChevronRight, Settings } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';

export default function Charity() {
  const { t } = useTranslation();
  const [amount, setAmount] = useState(1);

  const categories = [
    { label: 'إطعام', icon: '🍞' },
    { label: 'مساجد', icon: '🕌' },
    { label: 'قرآن', icon: '📖' },
    { label: 'دعم طبي', icon: '🏥' },
    { label: 'أيتام', icon: '👧' },
    { label: 'مياه', icon: '💧' },
  ];

  const orgs = [
    { name: 'مؤسسة مصر الخير', id: '1', active: true, amount: '1.00', frequency: 'يومياً', logo: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=50&h=50&fit=crop' },
    { name: 'جمعية رسالة للأعمال الخيرية', id: '2', active: true, amount: '0.75', frequency: 'يومياً', logo: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=50&h=50&fit=crop' },
    { name: 'مؤسسة صناع الخير', id: '3', active: true, amount: '1.50', frequency: 'يومياً', logo: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=50&h=50&fit=crop' },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">الصدقة الجارية</h1>
        <button className="p-2 bg-surface rounded-lg border border-border">
          <Settings className="w-5 h-5 text-text-secondary" />
        </button>
      </div>

      {/* Hero Stats */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mb-4">
          <Heart className="w-8 h-8 text-primary-glow" />
        </div>
        <h2 className="text-xl font-bold text-primary-glow mb-1">تبرع يومي مستمر</h2>
        <p className="text-xs text-text-secondary text-center max-w-[250px]">
          سيتم التبرع نيابة عنك كل يوم إلى وجه الله بعد وفاتك
        </p>
      </div>

      {/* Donation Control */}
      <GlassCard className="mb-8 p-6 text-center">
        <p className="text-text-secondary text-sm mb-4">المبلغ اليومي (د.م)</p>
        <div className="flex items-center justify-center gap-6 mb-6">
          <button 
            onClick={() => setAmount(Math.max(0.5, amount - 0.5))}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-accent font-bold"
          >
            −
          </button>
          <span className="text-4xl font-black text-accent">{amount.toFixed(2)}</span>
          <button 
            onClick={() => setAmount(amount + 0.5)}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-accent font-bold"
          >
             +
          </button>
        </div>
        <div className="flex gap-2 justify-center mb-6">
          {[0.5, 1.0, 5.0, 10.0].map((v) => (
            <button
              key={v}
              onClick={() => setAmount(v)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-bold transition-all border",
                amount === v ? "bg-accent/20 border-accent text-accent" : "bg-surface border-border text-text-muted"
              )}
            >
              {v.toFixed(2)}
            </button>
          ))}
          <button className="px-3 py-1.5 rounded-lg text-xs font-bold bg-surface border border-border text-text-muted">أخرى</button>
        </div>
        
        <div className="flex items-center gap-3 p-3 bg-surface-elevated rounded-xl border border-border text-right mb-6">
          <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
            <img src={orgs[0].logo} alt="Org" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="flex-1">
            <p className="text-[10px] text-text-muted uppercase font-bold tracking-tighter">الجهة المستفيدة</p>
            <h4 className="text-sm font-bold">{orgs[0].name}</h4>
          </div>
          <ChevronRight className="w-4 h-4 text-text-muted rotate-180" />
        </div>

        <GlowButton className="w-full">حفظ الإعدادات</GlowButton>
      </GlassCard>

      {/* Tabs */}
      <div className="flex bg-surface rounded-xl p-1 mb-6">
        <button className="flex-1 py-2 rounded-lg bg-primary/20 text-accent text-sm font-bold">الصدقة الجارية</button>
        <button className="flex-1 py-2 rounded-lg text-text-muted text-sm">تبرعات أخرى</button>
      </div>

      {/* Subscriptions */}
      <div className="space-y-3">
        {orgs.map((org) => (
          <div key={org.id}>
            <GlassCard className="flex items-center gap-4 py-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                <img src={org.logo} alt="Org" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold">{org.name}</h4>
                <p className="text-[10px] text-text-secondary">{org.amount} د.م {org.frequency}</p>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-primary/5 rounded-full border border-primary/20">
                <div className="w-1.5 h-1.5 bg-primary-glow rounded-full animate-pulse" />
                <span className="text-[10px] text-primary-glow font-bold">نشط</span>
              </div>
            </GlassCard>
          </div>
        ))}
        <GlowButton variant="outline" className="w-full py-4 flex items-center justify-center gap-2 border-dashed border-2">
          <span>+</span>
          إضافة تبرع جديد
        </GlowButton>
      </div>
    </div>
  );
}
