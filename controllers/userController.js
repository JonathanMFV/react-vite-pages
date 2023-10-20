
import User from '../models/userModel.js';
import EncryptionHelper from '../src/helpers/encryptionHelper.js';

class UserController {
  async createUser(data) {
    const { password } = data;
    const hashedPassword = await EncryptionHelper.encryptPassword(password);
    const user = new User({ ...data, password: hashedPassword });
    return user.save();
  }

  async authenticateUser(username, enteredPassword) {
    const user = await User.findOne({ username });
    if (!user) {
      return null;
    }
    const isValid = await EncryptionHelper.comparePassword(enteredPassword, user.password);
    return isValid ? user : null;
  }
}

export default UserController;
