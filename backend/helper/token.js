import jwt from 'jsonwebtoken'

export const genToken=(payload)=>{
    let token=jwt.sign(payload,process.env.JWT_KEY)
    return token
}

export const decodeToken=(token)=>{
    let payload=jwt.verify(token,process.env.JWT_KEY)
    return payload
}