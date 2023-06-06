const bcrypt = require("bcrypt");
async function genPassword(password) {
  const salt = await bcrypt.genSalt();
  password = await bcrypt.hash(password, salt);
  console.log(password);
}
const password = "Vinumane0987@";
genPassword(password);
//$2b$10$DhBqRaDXZ.9ybUoSvUs3Ne3Jif30Af8CrGSV8k8ElH8DJa5JuOYJC
// vinayakmane0987@gmail.com -- password is test1234
