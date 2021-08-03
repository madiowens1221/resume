import React from 'react';
import Typewriter from 'typewriter-effect';
import './styles.scss';

const About = () => (
    <div id="about">
        <div>
            <span className="user">madiowens</span>@
            <span className="domain">Madisons-MBP</span>:
            <span class="file-path">~/workspace/my-resume-app/</span>
        </div>
        <Typewriter
            onInit={(typewriter) => {
                typewriter
                    .pasteString('♡ ')
                    .pauseFor(1000)
                    .typeString('npm init\n')
                    .pauseFor(500)
                    .pasteString('package-name: (my-resume-app) ')
                    .pauseFor(500)
                    .pasteString('\n')
                    .pasteString('version: (1.0.0)')
                    .pauseFor(500)
                    .pasteString('\n')
                    .pasteString('description: ')
                    .typeString('My resume application')
                    .pasteString('\n')
                    .pasteString('entry point: (index.js)')
                    .pauseFor(500)
                    .pasteString('\n')
                    .pasteString('test command:')
                    .pauseFor(500)
                    .pasteString('\n')
                    .pasteString('git repository: ')
                    .typeString('https://github.com/madiowens1221')
                    .pasteString('\n')
                    .pasteString('keywords:')
                    .pauseFor(500)
                    .pasteString('\n')
                    .pasteString('author: ')
                    .typeString('Madison Owens')
                    .pasteString('\n')
                    .pasteString('license: (ISC)')
                    .pauseFor(500)
                    .pasteString('\n')
                    .pasteString(`
                    About to write to C:\\Users\\madis\\Desktop\\workspace\\my-resume-app\\package.json:
                    <pre>
{
    "name": "test-init",
    "version": "1.0.0",
    "description": "My resume application",
    "main": "index.js",
    "scripts": {
        "test": "echo "Error: no test specified" && exit 1"
    },
    "repository": {
        "type": "git",
        "url": "https://github.com/madiowens1221"
    },
    "author": "Madison owens",
    "license": "ISC"
}      
                    </pre>
                    Is this OK? (yes) `)
                    .pauseFor(1000)
                    .typeString('yes')
                    .pasteString('\n')
                    .pasteString('<span class="user">madiowens</span>@ <span class="domain">Madisons-MBP</span>:<span class="file-path">~/workspace/my-resume-app/</span>')
                    .pasteString('\n♡ ')
                    .start(); 
                }
            }
        />
    </div>
)

export default About;
