// firebaseConfig.js
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBpZSr53SY34r3zhEPznEiZ5arRNgBg6pw',
	authDomain: 'portfolio-movies-697ad.firebaseapp.com',
	databaseURL:
		'https://portfolio-movies-697ad-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'portfolio-movies-697ad',
	storageBucket: 'portfolio-movies-697ad.appspot.com',
	messagingSenderId: '802788808131',
	appId: '1:802788808131:web:6c27f7cfbc500abfd6d976',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Initialize Firestore
const db = getDatabase(app)

export default db
