## 1.first build the project set up:  
1.fetchMetadata: sill resolveWithNewModule caniuse-lite@1.0.30001008 checking issue fix  
1.Chinese Developer use:[npm换源](https://zhuanlan.zhihu.com/p/90561304)  
2.[npm install Error: rollbackFailedOptional](https://stackoverflow.com/questions/46011546/npm-install-error-rollbackfailedoptional)  
3.[What is the --save option for npm install?](https://stackoverflow.com/questions/19578796/what-is-the-save-option-for-npm-install) 

## 2.connect to database:
config fold needs to be under the server fold;  
[internal/modules/cjs/loader.js:582 throw err](https://stackoverflow.com/questions/53545800/internal-modules-cjs-loader-js582-throw-err#54964538)  

## 4. TypeError: Router.use() requires middleware function but got a Object and Webpack undefined 
1. You need to make sure that use the comma in the code below:  
```
v1Router.use('api/v1/auth', authRouter)  
```
2. all webpack issue in the terminal, you need to make sure that all webpack used the same version of"w" or "W".  

## 5. Issue fixing while you download the repository from the github:  
1. [nodemon not working: -bash: nodemon: command not found](https://stackoverflow.com/questions/35530930/nodemon-not-working-bash-nodemon-command-not-found)  
2. [failed to start process, "babel-node" exec not found #2](https://github.com/rwieruch/minimal-node-application/issues/2)  
```
npm install --save-dev @babel/node
```
3. The error: you cold not see " API make a reqeset to express server"  
You need to build a dist firsr to avoide this error:  
```
npm run build
```
[A Beginner’s Guide to Webpack](https://www.sitepoint.com/webpack-beginner-guide/)  
4. URL to see the content in the browser:http://localhost:3000/  

## 6.Adding Vue loader to webpack:
1.[vue-loader v15 requires VueLoaderPlugin in webpack config #1453](https://github.com/rails/webpacker/issues/1453)  
solution:
```
const VueLoaderPlugin = require('vue-loader/lib/plugin')
...
plugins: [
  new VueLoaderPlugin()
]
``` 
## 7.Installing the Tailwind CSS:
1.change in the latest version of Tailwind:
a. you need to cchange the plugins in the post.config.js to the code btaild.config.js:  
```
module.exports = {

    plugins: [require('tailwindcss')('./tailwind.config.js')]
}
```
2.add the default code to the tailwind.config.js
[tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js)  
[Rename tailwind.js to tailwind.config.js](https://tailwindcss.com/docs/upgrading-to-v1#3-rename-tailwind-js-to-tailwind-config-js)  

3.[Error: Specified Tailwind config file "...\tailwind.js" doesn't exist. #19](https://github.com/JeffreyWay/laravel-mix-tailwind/issues/19)   
solution:  
```
it will generate a file tailwind.config.js. rename it to tailwind.js and run npm run dev again.
```

## 8. file search in visualstudio:
[How do I search for files in Visual Studio Code?](https://stackoverflow.com/questions/30095376/how-do-i-search-for-files-in-visual-studio-code)  

## 9. the reason why your text could not be link to a file:

You need to go to the .balerc file and locate the "plugins" code to add the @ to the pages: @pages.

## 10.When you meet webpack is not defined error:
You need to check the lowercase or uppercase of w in the webpack.


## 11.Design home screen:

1.[Upgrading from v0.x to v1.0](https://tailwindcss.com/docs/upgrading-to-v1#3-rename-tailwind-js-to-tailwind-config-js)    
2.[Google Fonts](https://fonts.google.com/specimenTab?standard-styles)  

## 12. Design register screen:
1. You need to click the join now button to see the color UI change.  

## 11.Custom input compoent:
[VueJs dev tools panel not showing](https://stackoverflow.com/questions/41505150/vuejs-dev-tools-panel-not-showing#:~:text=Try%20the%20following%3A,look%20for%20the%20Vue%20tab)

## 12.Validating forms with vee validate:

1. To avoid the error with the version 3 vee-validate, you need to manually uninstall the installed vee-validate package, then install the 2.2.0 version of the  vee-validate.  
[npm-uninstall](https://docs.npmjs.com/cli/uninstall)  
[Vee-validate 2.2.0](https://www.npmjs.com/package/vee-validate/v/2.2.0)  
[Find the version of an installed npm package](https://stackoverflow.com/questions/10972176/find-the-version-of-an-installed-npm-package)  
[NPM List installed Package](https://docs.npmjs.com/cli/ls.html)  
[Validation in vue js using vee-validate having error](https://stackoverflow.com/questions/57674453/validation-in-vue-js-using-vee-validate-having-error)  
[Error: "export 'default' (imported as 'VeeValidate') was not found in 'vee-validate' #2234](https://github.com/logaretm/vee-validate/issues/2234)  
[VeeValidate documentation](https://logaretm.github.io/vee-validate/guide/rules.html#importing-the-rules)  


2.You need to correct the "error" to "errors" to see ereas the bug in the console in the Register.vue file:  
```
 :error="errors.first('password')"
```
3.You need to click the Sign up button to see the red sentence,  

## 13.Merge branch and delete a branch
1.[What is the best (and safest) way to merge a Git branch into master?](https://stackoverflow.com/questions/5601931/what-is-the-best-and-safest-way-to-merge-a-git-branch-into-master)  
2.[How to Delete a Git Branch Both Locally and Remotely](https://www.freecodecamp.org/news/how-to-delete-a-git-branch-both-locally-and-remotely/)  


## 14. Sending email confirmation mails:

1.if your email sending status is pending, just creat a new emai, then change the email password and user name in the .env file.  

2. Mailtrap:[Please confirm your account](https://mailtrap.io/inboxes/1080568/messages/1888814299)  

## 15.If you meet the HTML resource could not come out, 

## 16. Button Loading State:

If you could not see the image loading, you need to save the file withought running the 'npm run dev', then all files are saved once. You could "npm run dev"
once to test the performance. You need to run " npm run dev" after all the dot next to the file name dissaper.  

1.you need to clear the npm run dev history before,   
2.then have: npm run dev again.   
3.at this time, you need to refresh the localhost:3000 again.  
4.and go to the register,  
5.to clean the previous Network (chrome developer)hsitory.   
6.then fill the new username, email address, passwords and click the Sign up.   
7.to wait for the loading finish,   
8.then refresh the mailtrap to see the html content. 

Short change in a file, you do not need to go throught the process the above.

## 17.JSON Webtoken:  
Inorder to hiden the passwords, you need to change the :type="type" in the TextInput to achieve this effect. 

## 18.Persisting authentication
1. If you want to debug the code and try to figure out the code changes in the file, you could go to the fork symbol, and select the file to locate the change part code and compare it with the original code in the video.  

## 19.Fullstack Validation:

1.If you meet the error"Error: Cannot find module '@validators/register'', you need to go to the .babelrc file
to check if you add @ to the module before, like:  
```
"@validators": "./server/validators",
```
2. If you meet the" 522 code error" in the Network, you need to remove the parser in the register.js file:
```
const { name, email, password} = req.body
```
the problem could be caused by the Tabnine, so you need to unstalll it in the extensition tab, then reload the Visual studio.  
3. If you see the email address becomes white in the field in the form, then you need to type the email in the typing bar manually.  
not select the email from the sugggesting email. 

## 20. User Login server side

If you could not see the changes in the fork side, you need to run: npm run dev to trigger the change, then commit it and push it to the github.

## 21. Form mixin:

once all the files are saved and run "npm run dev" Compiled successfully, you do'nt need to refresh it in the browser again, you could just try the code effect. if problem exists, you could just repeat refresh the page again to try the code effect.

## 22. Auth Mixin:

You need cmd + save to save the code when you finish the few lines code, and check the effect if fit the video. So when the bug 
comes out, you could rewatch that part of video to check your typing with code in the video is same and fixt it.

## 23. Sending password reset Links

1.You need to wait for the whole files code in the video finish, then start to type the code in the editor to verify it.  
Make sure that you think the logical of the code both in the video adn typing in the editor.  From the line by line copy code to use the logic to guide your code typing.  

2.If you still could not see the Html content in the mailtrap, you need to rerun the "npm run dev" and refresh the Locallhost page 
three time to clear the previous history.   

3. if you could not see the token, make sure that you use the bracket {} instead of the ()  

```
url: `${config.url}/auth/passwords/reset/${token}`,

```

## 24.Bug fixing for the reset password Link could not see in the mailtrap 
1. open a new terminal and type the code below to fix the Mongodb bug:MongoDB connection error: MongoError: failed to connect to server [localhost:27017]  

````
brew services start mongodb-community@4.4

mongo
````
[Install MongoDB Community Edition on macOS](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)  

[MongoNetworkError: failed to connect to server [localhost:27017] on first connect [MongoNetworkError: connect ECONNREFUSED 127.0.0.1:27017]](https://stackoverflow.com/questions/50173080/mongonetworkerror-failed-to-connect-to-server-localhost27017-on-first-connec)  


2. Mongoose Warning message fixing:  
You need to add the code"{useUnifiedTopology: true, useNewUrlParser: true })" into the index.js to fix the error.
```
Mongoose.connect('mongodb://localhost:27017/mevn2mongo',{useUnifiedTopology: true, useNewUrlParser: true })
```


## Resource List:  
1.Project Resource List:[Fullstack Enterprise MEVN: Mongo, Express, Vue, and Node](https://learning.oreilly.com/videos/fullstack-enterprise-mevn/9781800202276/9781800202276-video2_1)  
2. Visul studio file icon extensition:[vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)  
3. Reference Code here:[PacktPublishing-Fullstack-Enterprise-MEVN---Mongo--Express--Vue--Node](https://github.com/sanjanapackt/PacktPublishing-Fullstack-Enterprise-MEVN---Mongo--Express--Vue--Node/blob/master/tailwind.js)  

