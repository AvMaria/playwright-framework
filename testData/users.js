export const users = {
  valid: {
    username: process.env.ADMIN_USER,
    password: process.env.ADMIN_PASS,
  },
  invalid: {
    username: 'wronguser',
    password: 'wrongpass',
  },
};
