import bcrypt from 'bcrypt'

export const encryptPassword = async (password) => {
    try {
        let encPassword = await bcrypt.hash(password, 10)
        return encPassword
    } catch (error) {
        console.log(error.message);
    }
}