import mongoose from 'mongoose';

const UserRoles = Object.freeze({
  Admin: 'admin',
  NonAuthenticated: 'non-authenticated',
  Authenticated: 'authenticated'
});

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  secondname: {
    type: String,
    default: null
  },
  first_lastname: {
    type: String,
    required: true
  },
  second_lastname: {
    type: String,
    required: true
  },
  cellphone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  rol: {
    type: String,
    enum: Object.values(UserRoles),
    default: UserRoles.NonAuthenticated
  },
  password: {
    type: String,
    required: true
  },
  province: {
    type: String,
    required: true
  },
  canton: {
    type: String,
    required: true
  },
  district: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  profilePicUrl: {
    type: String,
    default: null
  }
});

Object.assign(UserSchema.statics, { UserRoles });

const User = mongoose.model('User', UserSchema);

export default User;
