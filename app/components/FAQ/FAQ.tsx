'use client';

import posthog from 'posthog-js';
import styles from "./FAQ.module.css";

const faqItems = [
  {
    question: "What if I hate being on camera?",
    answer: "Every script works as voiceover, B-roll footage, or text carousel. You choose what fits your style."
  },
  {
    question: "How is this different from AI tools or content templates?",
    answer: "This isn't generic. We analyze YOUR niche and audience first, then create scripts based on proven content formats that already convert in your space."
  },
  {
    question: "How personalized is this really?",
    answer: "You fill out a detailed questionnaire about your niche, ideal client, and current positioning. Everything is built from that foundation — not copy-pasted templates."
  },
  {
    question: "What if the content doesn't work for me?",
    answer: "Cancel anytime. You keep the strategy report and all scripts. But if the content is built for your specific audience and based on proven formats, it works."
  },
  {
    question: "What's \"early access\" mean?",
    answer: "We're in pilot phase — scripts are personally crafted, not fully automated yet. That means more hands-on attention for you while we refine the system. You get better results, we get feedback. Win-win."
  }
];

export function FAQ() {
  const handleToggle = (question: string, isOpen: boolean) => {
    posthog.capture('faq_toggled', {
      question,
      is_open: isOpen,
    });
  };

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>FAQ</div>

        <div className={styles.faqList}>
          {faqItems.map((item, index) => (
            <details
              key={index}
              className={styles.faqItem}
              onToggle={(e) => handleToggle(item.question, (e.target as HTMLDetailsElement).open)}
            >
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
