import bcrypt from 'bcrypt'

export const encryptPassword = async (password) => {
    try {
        let encPassword = await bcrypt.hash(password, 10)
        return encPassword
    } catch (error) {
        console.log(error.message);
    }
}

export const decryptPassword=async(encPassword,rawPassword)=>{
    let pass=await bcrypt.compare(rawPassword,encPassword)
    console.log('dec',pass);
    return pass
}