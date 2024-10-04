import Image from 'next/image';
import Feature from './components/Feature/Feature';
import styles from './page.module.css';

export type FeatureType = {
  image: string;
  text: string;
};

const info = {
  features: [
    { image: '/images/brain.jpeg', text: 'Intelligent algorithm for personalized learning' },
    {
      image: '/images/progressive.jpeg',
      text: 'Progressive point system to track your improvement',
    },
    { image: '/images/statistics.jpeg', text: 'Comprehensive statistics to monitor your progress' },
    { image: '/images/onboarding.jpeg', text: 'Simple and intuitive onboarding process' },
  ],
  premiumFeatures: [
    'Unlimited decks for better organization',
    'Sub-decks for granular categorization',
    'Customizable deck themes',
    'Detailed statistics and insights',
    'Adjustable knowledge level settings',
    'Additional learning customization options',
  ],
};

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Image src="/images/wordem-icon-edited.png" alt="app-icon" width={100} height={100} />

        <div>
          <h1>WordEm</h1>
          <h2>Master Your Vocabulary, One Word At A Time</h2>
        </div>
      </header>

      <main className={styles.main}>
        <div>
          <h2>Personalized Learning Journey</h2>
          <p>
            WordEm adapts to your knowledge level, categorizing words into Bad, Good, Fine an Easy
            groups for efficient learning.{' '}
          </p>
        </div>

        <div className={styles.keyFeatures}>
          <h2>Key Features</h2>
          <ul>
            {info.features.map((feature, index) => (
              <Feature key={`${index}-feature`} feature={feature} />
            ))}
          </ul>
        </div>

        <div>
          <h2>Unlock Premium Features</h2>
          <ul>
            {info.premiumFeatures.map((pf, index) => (
              <li key={`${index}-pf`}>{pf}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Perfect For All Learners</h2>
          <p>
            Whether you're a student preparing for exams, learning a new language, or simply want to
            enhance your word power, WordEm is your ideal companion.
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 WordEm. All rights reserved.</p>
      </footer>
    </div>
  );
}
