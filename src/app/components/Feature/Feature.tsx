import { FeatureType } from '@/app/page';
import Image from 'next/image';
import styles from './Feature.module.css';

type Props = {
  feature: FeatureType;
};

export default function Feature(props: Props) {
  const { feature } = props;

  return (
    <li className={styles.feature}>
      <Image src={feature.image} alt="feature-icon" width={100} height={100} />
      <p>{feature.text}</p>
    </li>
  );
}
