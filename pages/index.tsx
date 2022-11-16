import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.title}>
          너 내<br />
          MBTI
          <br />
          알아??
        </h1>
        <a href="http://localhost:3009/auth/kakao">
          <button className={styles.btn}>카카오 시작하기</button>
        </a>
      </div>
    </div>
  )
}
