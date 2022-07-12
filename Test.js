import * as fs from "node:fs";
class TestComet{
    constructor(){
       this.alphabet= ['a', 'b', 'c', 'd', 'e']
       this.testDir='./test/'
       this.files=[]
       this.createFiles()
    }
    createFiles(){
        this.alphabet.forEach((letter)=>{
            var l1 = this.testDir+letter
            if(!fs.existsSync(l1)){
                fs.mkdirSync(l1)
            }
        })

        this.alphabet.forEach(()=>{
            this.alphabet.forEach((letter)=>{
                var l2 = this.testDir+letter+'/'+letter
                var file = l2+'.js'
                if(!fs.existsSync(l2)){
                    fs.mkdirSync(l2)
                }
                this.files.push(file)
                if(!fs.existsSync(file)){
                    fs.writeFileSync(
                        file, 
                        "import {Comet} from '../../../Comet.js'\n new Comet().comet('this is a wacky wacky comet')" 
                    );
                    
                }

            })
        })
    }

}



var testComet = new TestComet()
