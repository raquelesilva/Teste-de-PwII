import API_URL from './config.js'

const apiService = {
    async addUser(name, school, email, password, contact, birth, imgProfile) {
        const response = await fetch(`${API_URL}/register`, {
            method: "POST",
            body: JSON.stringify({ name:name, pass:password, img:imgProfile, data:birth, telemovel:contact, idE:school, email:email, })
        })

        if (response.ok) {
            return response.json()
        }
        else {
            throw Error(response)
        }
    }
}

export default apiService