class InvalidLogin extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidLoginCredentials';
  }
}

export default InvalidLogin;
