const request = require("request");
const yargs = require("yargs");

var URL = "https://www.ipapi.co/";

const argv = yargs.options({
    ip: {
        describe: "ip address to which you want to find location ..!",
        alias: "i",
        string: true
    }
})
    .help()
    .alias('help' , 'h')
    .argv;

    if(argv.ip) {
        URL += argv.ip + "/json";
    }
    else {
        URL += "json"
    }
  
    request({
        url: URL,
        json: true
    }, (err, response, body) => {
        if(!err && response.statusCode == 200) {
            console.log(body);
        } 
    });