# Part5 Exercise: Frontend for bloglist

## Exercises 5.1.-5.4.

We will now create a frontend for the bloglist backend we created in the last part. You can use [this application](https://github.com/fullstack-hy/bloglist-frontend/) from GitHub as the base of your solution. The application expects your backend to be running on port 3003.

The first few exercises revise everything we have learned about React so far. They can be challenging, especially if your backend is incomplete. It might be best to use the backend from model answers of part 4.

While doing the exercises, remember all of the debugging methods we have talked about, especially keeping an eye on the console.

**Warning:** If you notice you are mixing in same function async/await and `then` commands, it's 99.9% certain you are doing something wrong. Use either or, never both.

## Step 1

Clone the application from [Github](https://github.com/fullstack-hy/bloglist-frontend) with the command:

```Shell
git clone https://github.com/fullstack-hy/bloglist-frontend
```

_remove the git configuration of the cloned application_

```Shell
cd bloglist-frontend   // go to cloned repository
rm -rf .git
```

The application is started the usual way, but you have to install its dependencies first:

```Shell
npm install
npm start
```

Implement login functionality to the frontend. The token returned with a successful login is saved to the application's state _user_.

If a user is not logged-in, _only_ the login form is visible.

If user is logged-in, the name of the user and a list of blogs is shown.

User details of the logged-in user do not have to be saved to the local storage yet.
