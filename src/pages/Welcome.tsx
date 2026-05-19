import { motion } from 'motion/react';
import { GlowButton } from '@/src/components/ui/LegacyUI';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Welcome() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="relative h-screen bg-background flex flex-col items-center justify-center overflow-hidden">
      {/* Background Cinematic Visual */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-floating-light-particles-in-the-dark-32729-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />
      </div>

      <div className="relative z-10 text-center px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative">
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-accent rounded-full blur-[60px] opacity-20"
            />
            <h1 className="text-7xl font-bold text-accent mb-2 tracking-tighter filter drop-shadow-2xl">أثرك</h1>
            <p className="text-accent underline underline-offset-8 decoration-accent/30 font-light tracking-[0.4em] uppercase text-xs">Atharak</p>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-2xl font-light text-text-primary mb-12 tracking-wide"
        >
          {t('app.tagline')}
        </motion.h2>

        <div className="space-y-4 w-full max-w-xs mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <GlowButton variant="gold" className="w-full text-lg py-4" onClick={() => navigate('/')}>
              ابدأ رحلتك
            </GlowButton>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <button className="text-text-secondary text-sm font-bold uppercase tracking-widest hover:text-white transition-colors">
              تسجيل الدخول
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2, duration: 2 }}
        className="absolute bottom-8 text-[10px] text-text-muted text-center uppercase tracking-[0.2em]"
      >
        Designed for eternity
      </motion.div>
    </div>
  );
}
