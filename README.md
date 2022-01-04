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

## Step 2

Make the login 'permanent' by using the local storage. Also implement a way to log out.

Ensure the browser does not remember the details of the user after logging out.

## Step 3

Expand your application to allow a logged-in user to add new blogs.

## Step 4

Implement notifications which inform the user about successful and unsuccessful operations at the top of the page.

The notifications must be visible for a few seconds. It is not compulsory to add colors.

## Exercises 5.5.-5.10.

### Step 5

Change the form for creating blog posts so that it is only displayed when appropriate. Use functionality similar to what was shown [earlier in this part of the course material](https://fullstackopen.com/en/part5/props_children_and_proptypes#displaying-the-login-form-only-when-appropriate). If you wish to do so, you can use the _Togglable_ component defined in part 5.

By default the form is not visible. It expands when button _create new blog_ is clicked. The form closes when a new blog is created.

### Step 6

Separate the form for creating a new blog into its own component (if you have not already done so), and move all the states required for creating a new blog to this component.

The component must work like the _NoteForm_ component from the [material](https://fullstackopen.com/en/part5/props_children_and_proptypes) of this part.
