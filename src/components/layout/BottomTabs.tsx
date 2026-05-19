import { Home, ScrollText, Heart, Image as ImageIcon, User, Bot } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export function BottomTabs() {
  const { t } = useTranslation();

  const tabs = [
    { to: '/', icon: Home, label: t('tabs.home') },
    { to: '/will', icon: ScrollText, label: t('tabs.will') },
    { to: '/charity', icon: Heart, label: t('tabs.charity') },
    { to: '/memories', icon: ImageIcon, label: t('tabs.memories') },
    { to: '/assistant', icon: Bot, label: t('actions.aiAssistant') },
    { to: '/profile', icon: User, label: t('tabs.profile') },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-surface border-t border-border flex items-center justify-around px-2 z-50">
      {tabs.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          className={({ isActive }) =>
            cn(
              "flex flex-col items-center justify-center gap-1 transition-colors relative px-2 py-1",
              isActive ? "text-accent" : "text-text-secondary hover:text-text-primary"
            )
          }
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <motion.div
                  layoutId="tabBackground"
                  className="absolute inset-0 bg-primary/20 rounded-xl -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <tab.icon className={cn("w-6 h-6", isActive && "text-accent-light")} />
              <span className="text-[10px] font-medium tracking-tight">
                {tab.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="tabUnderline"
                  className="absolute -bottom-1 w-1 h-1 bg-accent rounded-full"
                />
              )}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
