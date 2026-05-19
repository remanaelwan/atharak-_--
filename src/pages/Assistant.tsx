import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function Assistant() {
  const { t } = useTranslation();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'مرحباً، أنا مساعدك الذكي في أثرك. كيف يمكنني مساعدتك اليوم في توثيق ذكرياتك أو التخطيط لأثرك الخالد؟' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      if (data.text) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.text }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: 'عذراً، حدث خطأ ما. يرجى المحاولة مرة أخرى.' }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'حدث خطأ في الاتصال بالمساعد.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestions = [
    "ساعدني أكتب رسالة لأبنائي",
    "اقترح لي صدقة مناسبة",
    "كيف أوثق ذكرياتي؟"
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-5rem)]">
      {/* Header */}
      <div className="p-4 border-b border-border flex items-center gap-3">
        <div className="p-2 bg-primary/20 rounded-full">
          <Bot className="w-6 h-6 text-primary-glow" />
        </div>
        <div>
          <h1 className="font-bold">{t('actions.aiAssistant')}</h1>
          <p className="text-[10px] text-primary-glow uppercase tracking-widest font-bold">Spiritual Guide AI</p>
        </div>
      </div>

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
      >
        <AnimatePresence>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={cn(
                "flex gap-3 max-w-[85%]",
                msg.role === 'user' ? "ml-auto flex-row-reverse text-right" : "mr-auto text-right"
              )}
            >
              <div className={cn(
                "p-2 rounded-full h-8 w-8 flex-shrink-0 mt-1",
                msg.role === 'user' ? "bg-accent/20" : "bg-primary/20"
              )}>
                {msg.role === 'user' ? <User className="w-4 h-4 text-accent" /> : <Bot className="w-4 h-4 text-primary-glow" />}
              </div>
              <div className={cn(
                "p-3 rounded-2xl text-sm leading-relaxed",
                msg.role === 'user' 
                  ? "bg-accent/10 border border-accent/20 text-text-primary rounded-tr-none" 
                  : "bg-surface-elevated border border-border text-text-primary rounded-tl-none"
              )}>
                {msg.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {isLoading && (
          <div className="flex gap-2 p-4 text-primary-glow">
            <Sparkles className="w-4 h-4 animate-spin" />
            <span className="text-xs italic">جاري التفكير...</span>
          </div>
        )}
      </div>

      {/* Input Overlay Suggestions */}
      {!isLoading && messages.length < 5 && (
        <div className="px-4 pb-2 flex gap-2 overflow-x-auto no-scrollbar">
          {suggestions.map((s, i) => (
            <button
              key={i}
              onClick={() => { setInput(s); }}
              className="px-3 py-1.5 bg-surface text-[10px] rounded-full border border-border whitespace-nowrap text-text-secondary hover:text-accent hover:border-accent transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-border bg-surface">
        <div className="relative flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="اكتب رسالتك هنا..."
            className="flex-1 bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-accent outline-none"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className={cn(
              "p-3 rounded-xl transition-all",
              input.trim() ? "bg-accent text-background" : "bg-border text-text-muted"
            )}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
