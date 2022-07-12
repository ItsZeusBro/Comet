import { exec } from "node:child_process";
import * as fs from "node:fs";
class TestComet{
    constructor(){
       this.alphabet= ['a', 'b', 'c', 'd', 'e']
       this.testDir='./test/'
       this.files=[]
       this.createNRunFiles()
    }
    createNRunFiles(){
        this.alphabet.forEach((letter)=>{
            var l1 = this.testDir+letter
            if(!fs.existsSync(l1)){
                fs.mkdirSync(l1)
            }
        })
        var dirSentinal;
        this.alphabet.forEach((l1)=>{
            this.alphabet.forEach((l2)=>{
                dirSentinal = this.testDir+l1+'/'+l2+'/'
                if(!fs.existsSync(dirSentinal)){
                    fs.mkdirSync(dirSentinal)
                }
                var file = dirSentinal+l2+'.js'
                if(!fs.existsSync(file)){
                    fs.writeFileSync(
                        file, 
                        "import {Comet} from '../../../Comet.js'\n new Comet().comet('this is a wacky wacky comet')" 
                    );
                    
                }
                exec("node "+ file)
            })
        })
    }


}



var testComet = new TestComet()
