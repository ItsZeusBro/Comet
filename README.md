# Comet (It's a space rock. It does nothing)

![DangerousComet](https://github.com/ItsZeusBro/Comet/blob/c0aef7561bbff652f689129331de6aa83d58434f/dangerousComet.png)

## Right now we are not publishing this project to npm or other package managers because it sucks right now. But for now just make sure these are in the package json for Comet:

    "name": "comet",
    "main": "Comet.js",
    "type": "module:

If you want to import this ECMA module into another ECMA script you have to create a global symlink with the global node_modules folder.

    You can use: npm link     //in your comet root directory

inside your exported module directory to create a systemwide symlink from the global node_modules folder to your projects path.

Then you have to go to your importing project root directory and run

    npm link comet 

to tell node that you wish to use the symlinked module inside your importing project.

In your source file where you wish to import the module use:

    import {Comet} from "comet/Comet.js";

Notice how the pacakge.json name "comet" is used, and remember how we used "npm link comet" from within our importing directory. That is the importance of the module name field in the package.json file. For whatever reason, the "main" field was not able to be infered by node for this example. I had to actually specify the module source file i wanted, but something tells me it should be inferred by the "main". Ohh well, this works fine.

