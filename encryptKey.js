const fs = require("fs-extra");
const ethers = require("ethers");
const dotEnv = require("dotenv");

dotEnv.config();

async function main() {
    const wallet = await new ethers.Wallet(process.env.PRIVATE_KEY);
    const encryptedJsonKey = await wallet.encrypt(
        "password",
        process.env.PRIVATE_KEY
    );
    fs.writeFileSync("./.encryptedKey.json", encryptedJsonKey);
}

main()
    .then(() => {
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
