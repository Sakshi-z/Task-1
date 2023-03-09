const inputs = document.querySelectorAll('input');

const patterns = {
  source: /^[a-z\d ]{5,100}$/i,
  pipeline: /^[a-zA-Z0-9](.*[a-zA-Z0-9]{4,100})?$/,
  project: /^[a-zA-Z0-9](.*[a-zA-Z0-9]{4,100})?$/,
  bucket: /^[a-zA-Z0-9](.*[a-zA-Z0-9]{4,100})?$/,
  file: /^[a-z\d ]{5,100}$/i,
  credentials: /^[a-z\d]{5,100}$/i,
  run: /^(\d+[mM])?[a-z\d]{5,100}$/i,
};

const validate = (field, regex) => {
  const valid = regex.test(field.value);
  if (valid) {
    field.className = 'valid';
  } else {
    field.className = 'invalid';
  }
};


inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});