import { getDatabase, ref, onValue, set } from 'firebase/database'
import db from './Firebase.js'

export const GetData = async setLoading => {
	try {
		setLoading(true)
		const dbRef = ref(getDatabase(db), '/movies')
		const snapshot = await onValue(dbRef)
		const data = snapshot.val()
		setLoading(false)
		return data
	} catch (error) {
		console.error('Error getting data:', error)
		setLoading(false)
		return error
	}
}

export const PostData = async dataToPost => {
	try {
		const dbRef = ref(getDatabase(db), '/movies')
		await set(dbRef, dataToPost)
		console.log('Data posted successfully.')
		return null // Success
	} catch (error) {
		console.error('Error posting data:', error)
		return error
	}
}

export const UpdateData = async dataToUpdate => {
	try {
		const dbRef = ref(getDatabase(db), '/movies')
		await update(dbRef, dataToUpdate)
		console.log('Data updated successfully.')
		return null // Success
	} catch (error) {
		console.error('Error updating data:', error)
		return error
	}
}

export const DeleteDataById = async idToDelete => {
	try {
		const dbRef = ref(getDatabase(db), '/movies')
		const query = ref(dbRef.orderByChild('_id').equalTo(idToDelete))

		// Elsőként lekérdezzük a megfelelő rekordot
		const snapshot = await get(query)

		if (snapshot.exists()) {
			// Ha találtunk egyezést, töröljük az adatot
			const keyToDelete = Object.keys(snapshot.val())[0]
			const dataRef = ref(dbRef, keyToDelete)
			await remove(dataRef)
			console.log('Data with _id:', idToDelete, 'deleted successfully.')
			return null // Success
		} else {
			console.log('Data with _id:', idToDelete, 'not found.')
			return 'Data not found'
		}
	} catch (error) {
		console.error('Error deleting data:', error)
		return error
	}
}
