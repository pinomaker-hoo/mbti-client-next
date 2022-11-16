import styles from '../styles/Admin.module.css'

export default function Admin() {
  return (
    <div className={styles.container}>
      <div className={styles.container_in}>
        <div className={styles.top}>
          <h3 className={styles.top_text}>
            김인후님의 MBTI는 ENTJ이지만
            <br />
            사람들은 INFP라고 생각해요!
          </h3>
          <div className={styles.top_share_Outbox}>
            <div className={styles.top_share_Inbox}>
              <p className={styles.top_share_text}>www.pinodev.shop</p>
            </div>
            <button className={styles.top_share_btn}></button>
          </div>
        </div>
        <div className={styles.middle}></div>
      </div>
    </div>
  )
}
