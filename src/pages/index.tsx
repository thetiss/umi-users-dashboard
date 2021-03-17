import styles from './index.less';
import Staff from './staff';
export default function IndexPage(props: any) {
  // return <div style={{ padding: 20 }}>{ props.children }</div>;
  return(
    <div className={styles.normal}>
      hi index
      {props.children}
    </div>
  )
}
