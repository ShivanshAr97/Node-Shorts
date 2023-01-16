const bcrypt = require('bcrypt');

const securePass = async(password)=>{
    const passHash = await bcrypt.hash(password,10);
    console.log(passHash);
    const passMatch = await bcrypt.compare(password, passHash);
    // const passMatch = await bcrypt.compare("Hello", passHash);
    console.log(passMatch);
}

securePass("Hello world")