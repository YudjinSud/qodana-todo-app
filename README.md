# Simple todo app on React.js + firebase

https://qodana-todo-app.web.app/Todo

* User can create tasks, delete them, and mark as done
* App can read data from .json file
* If page reloaded - data doesn't dissapper - serverless architecture with firebase
* Two lists : with done and pending tasks
* Simple bar chart on HTML5 canvas which classifies done tasks by their tags

The file structure is as follows

```
{
  "id": "Json entry",
  "title": "Json entry",
  "comment" : "Comment from json entry",
  "done" : "false",
  "tags": ["json", "dev", "TypeScript"],
  "date": ""
}
```

If you want to run app locally on your machine, you have to set up firebase app for this.

https://firebase.google.com/docs/web/setup?authuser=0
