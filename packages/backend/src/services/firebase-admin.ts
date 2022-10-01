import admin from 'firebase-admin'

admin.initializeApp({
  credential: admin.credential.cert(
    'credentials/cosmwander-firebase-adminsdk-ye9p3-cb68abd88f.json'
  ),
  databaseURL: 'https://cosmwander-default-rtdb.firebaseio.com'
})

export default admin
