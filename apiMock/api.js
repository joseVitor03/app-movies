const { exec } = require("child_process");

exec("java -jar wiremock-standalone-2.35.0.jar", (err, stdout, stderr) => {
  if (err) {
    console.error(`Erro ao iniciar o WireMock: ${err.message}`);
    return;
  }
  console.log("WireMock iniciado!");
});
