import bcrypt from 'bcryptjs';

class EncryptionHelper {
  static async encryptPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }

  static async comparePassword(enteredPassword, storedPassword) {
    return bcrypt.compare(enteredPassword, storedPassword);
  }
}

export default EncryptionHelper;
