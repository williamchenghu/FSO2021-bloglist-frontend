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

### Step 7

Let's add a button to each blog, which controls whether all of the details about the blog are shown or not.

Full details of the blog open when the button is clicked.

And the details are hidden when the button is clicked again.

At this point the _like_ button does not need to do anything.

The application has a bit of additional CSS to improve its appearance.

It is easy to add styles to the application as shown in part 2 using [inline](https://fullstackopen.com/en/part2/adding_styles_to_react_app#inline-styles) styles

**NB:** even though the functionality implemented in this part is almost identical to the functionality provided by the _Togglable_ component, the component can not be used directly to achieve the desired behavior. The easiest solution will be to add state to the blog post that controls the displayed form of the blog post.

### Step 8

Implement the functionality for the like button. Likes are increased by making an HTTP `PUT` request to the unique address of the blog post in the backend.

Since the backend operation replaces the entire blog post, you will have to send all of its fields in the request body. If you wanted to add a like to the following blog post:

```json
{
  "_id": "5a43fde2cbd20b12a2c34e91",
  "user": {
    "_id": "5a43e6b6c37f3d065eaaa581",
    "username": "mluukkai",
    "name": "Matti Luukkainen"
  },
  "likes": 0,
  "author": "Joel Spolsky",
  "title": "The Joel Test: 12 Steps to Better Code",
  "url": "https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/"
}
```

You would have to make an HTTP PUT request to the address _/api/blogs/5a43fde2cbd20b12a2c34e91_ with the following request data:

```json
{
  "user": "5a43e6b6c37f3d065eaaa581",
  "likes": 1,
  "author": "Joel Spolsky",
  "title": "The Joel Test: 12 Steps to Better Code",
  "url": "https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/"
}
```

### Step 9

Modify the application to list the blog posts by the number of _likes_. Sorting the blog posts can be done with the array [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method.

### Step 10

Add a new button for deleting blog posts. Also implement the logic for deleting blog posts in the frontend.

The confirmation dialog for deleting a blog post is easy to implement with the [window.confirm](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm) function.

Show the button for deleting a blog post only if the blog post was added by the user.

## Exercises 5.11.-5.12.

### Step 11

efine PropTypes for one of the components of your application.

### Step 12

Add ESlint to the project. Define the configuration according to your liking. Fix all of the linter errors.

Create-react-app has installed ESlint to the project by default, so all that's left for you to do is to define your desired configuration in the _.eslintrc.js_ file.

**NB:** do not run the `eslint --init` command. It will install the latest version of ESlint that is not compatible with the configuration file created by create-react-app!
