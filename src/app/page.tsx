import Image from 'next/image';
import styles from './page.module.css';

const info = {
  features: [
    'Intelligent algorithm for personalized learning',
    'Progressive point system to track your improvement',
    'Comprehensive statistics to monitor your progress',
    'Simple and intuitive onboarding process',
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

        <div>
          <h2>Key Features</h2>
          <ul>
            {info.features.map((feature, index) => (
              <li key={`${index}-feature`}>{feature}</li>
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
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
