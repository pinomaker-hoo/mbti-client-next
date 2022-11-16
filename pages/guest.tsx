import styles from '../styles/guest.module.css'

export default function Guest() {
  return (
    <div className={styles.container}>
      <div className={styles.container_in}>
        <div className={styles.top}>
          <h3>김인후님의 MBTI가 무엇일 지 한 번 맞춰보세요!</h3>
        </div>
        <div className={styles.middle}></div>
        <div className={styles.bottom}>
          <button className={styles.bottom_btn}>저장하기</button>
        </div>
      </div>
    </div>
  )
}
