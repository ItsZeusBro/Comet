import { TikaPrims } from "../TikaPrims/TikaPrims.js";
import * as fs from "node:fs";
export class Comet{
    constructor(){
        this.verbose;
        this.flags()
        this.tp = new TikaPrims()
        this.cometsDir=process.cwd()+'/comets/'
        if (!fs.existsSync(this.cometsDir)){
            this.tp.mkdr(this.cometsDir)
        }
        this.instance = process.pid
        this.cometFile = this.cometsDir+"comet_"+this.instance+'.comet'
        if (!fs.existsSync(this.cometFile)){
            this.tp.create(this.cometFile)
        }

    }
    flags(){
        var flags = process.argv
        flags.forEach(element => {
            if (element=='--verbose'){
                this.verbose=true
            }
        });
    }
    comet(...data){
        var obj={}
        obj[this.cometFile]= data.join()+'\n'
        this.tp.write(obj)
        if (this.verbose){
            console.log(data.join(' '))
        }
    }
}
