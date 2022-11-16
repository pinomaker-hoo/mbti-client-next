import styles from '../styles/Admin.module.css'
import mbti from '../styles/Mbti.module.css'

export default function Admin() {
  return (
    <div className={styles.container}>
      <div className={styles.topBox}>
        <h3 className={styles.topBoxText}>
          김인후님의 MBTI는 ENTJ이지만
          <br />
          사람들은 INFP라고 생각해요!
        </h3>
      </div>
      <div className={styles.middleBox}>
        <MbtiBox />
      </div>
      <div className={styles.bottomBox}></div>
    </div>
  )
}

const MbtiBox = () => {
  return (
    <div className={mbti.container}>
      <div className={mbti.topBox}>
        <h3 className={mbti.topBoxText}>ENFP</h3>
      </div>
      <div className={mbti.middleBox}>
        <p>나는 인후가 너무 이성적이라서 ENTJ라고 투표 했어</p>
      </div>
      <div className={mbti.bottomBox}>
        <h3>ISFP 짱구</h3>
      </div>
    </div>
  )
}
