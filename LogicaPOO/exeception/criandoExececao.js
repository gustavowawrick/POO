class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "Validation Error";
  }
}

function vaiDarErro() {
  throw new ValidationError("Dados inválidos!");
}

try {
  vaiDarErro();
}
catch (e) {
  console.error(`${e.name}: ${e.message}`);
}