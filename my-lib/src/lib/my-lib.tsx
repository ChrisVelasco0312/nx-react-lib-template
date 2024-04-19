import styles from './my-lib.module.scss';
import '../styles.css';
/* eslint-disable-next-line */
export interface MyLibProps {}

export function MyLib(props: MyLibProps) {
  return (
    <div className={styles['container']}>
      <h1 className="text-3xl font-light">Welcome to MyLib!</h1>
    </div>
  );
}

export default MyLib;
