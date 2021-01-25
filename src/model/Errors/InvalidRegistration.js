class InvalidRegistration extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidRegistrationCredentials';
  }
}

export default InvalidRegistration;
