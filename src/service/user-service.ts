class UserService {
  async create(user: string) {
    // 將user存到database
    console.log(user)
    return "創建成功"
  }
}

module.exports = new UserService();