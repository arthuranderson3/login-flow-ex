class UsernameExistsError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UsernameExistsError';
  }
}

export default UsernameExistsError;
