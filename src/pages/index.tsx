import styles from './index.less';
export default function IndexPage(props: any) {
  return(
    <div className={styles.normal}>
      { props.children }
    </div>
  )
}
