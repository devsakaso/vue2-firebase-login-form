// firebaseをimport ①/5
import firebase from 'firebase/app'
import 'firebase/auth'



// firebaseの構成をコピペ ②/5
const firebaseConfig = {
  apiKey: "APIキー",
  authDomain: "ドメインアドレス",
  projectId: "プロジェクトID",
  storageBucket: "ストレージバケット",
  messagingSenderId: "メッセージの送信者ID",
  appId: "appID"
};
// firebaseを初期化する ③/5→SignUp.vueに移動して使う
firebase.initializeApp(firebaseConfig)

// init servises
const projectAuth = firebase.auth()


export { projectAuth }
