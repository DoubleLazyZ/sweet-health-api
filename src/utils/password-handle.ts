const bcrpyt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = '$issostrong';
const someOtherPlaintextpassword = "not_bacona";

const hashPassword = async(password: string) => {
  try {
    const result = await bcrpyt.hash(password, saltRounds)
    return result
  } catch (err) {
    return new Error("伺服器錯誤。")
  }
}

const comparePassword = async(inputPassword: string, hashedPassword: string) => {
  return await bcrpyt.compare(inputPassword, hashedPassword)
}

export {
  hashPassword,
  comparePassword
}
