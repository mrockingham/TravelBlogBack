import jwt from "jsonwebtoken"

const generateToken = (id: any) => {
    return jwt.sign({ id }, process.env.USER_VERIFICATION_TOKEN_SECRET || '', {
        expiresIn: "15d"
    })
}

export default generateToken