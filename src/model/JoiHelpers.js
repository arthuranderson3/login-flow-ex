const errorToMessage = (validationResult) => {
  if (
    validationResult.error !== undefined &&
    validationResult.error.details !== undefined
  ) {
    return validationResult.error.details
      .map((detail) => detail.message)
      .join(';');
  }
  return '';
};

export { errorToMessage };
