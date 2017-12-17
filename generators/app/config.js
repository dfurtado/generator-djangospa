module.exports = {

    dependencies: {
        npm: true,
        bower: false,
        yarn: false
    },

    prompt: {
        projectname: {
            type    : "input",
            name    : "projectname",
            message : "Your project name:",
            required: true
        },
        description: {
            type    : "input",
            name    : "description",
            message : "Project description:",
            required: false
        },
        appname: {
            type    : "input",
            name    : "appname",
            message : "Initial application name:",
            default : "main",
            required: true
        },
        includeloginpage: {
            type    : "confirm",
            name    : "includeloginpage",
            message : "Include login page?",
            default : true
        },
        djangoVersion: {
            type    : "list",
            name    : "djangoVersion",
            message : "Which django version you will be using:",
            choices : ["1.8.x", "1.9.x", "2.0"],
            default : "2.0",
            required: true
        },
        sitetheme: {
            type    : "list",
            name    : "sitetheme",
            message : "Which theme do you want to use:",
            choices : ["Light theme", "Dark theme"],
            default : "Light theme",
            required: true
        },
        depmanager: {
            type    : "list",
            name    : "depmanager",
            message : "Which dependency manager do you want to use?",
            choices : ["npm","yarn"],
            default : "npm",
            required: true
        },
        projectlicense: {
            type    : "list",
            name    : "projectlicense",
            message : "License:",
            choices : ["MIT","Apache 2.0", "FreeBSD", "NewBSD", "Internet Systems Consortium (ISC)", "No License (Copyrighted)"],
            default : "MIT",
            required: true
        }
    }
}
