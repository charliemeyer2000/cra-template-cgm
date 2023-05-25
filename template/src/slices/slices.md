# Redux Slices

This folder contains all of the Redux slices for the app. Each slice is a self-contained piece of Redux logic that can be used in any part of the app.

Consider having redux slices represent an "idea," such as "user" or "cart." Each slice should contain all of the logic for that idea, such as fetching data, updating data, and storing data.

## Example

Here is an example of a slice that stores the user's name and email address:

```js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// add functions, asyncThunks, and other logic above here.

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
  // you may add builder cases for asyncThunks here.
});

export const { setName, setEmail } = userSlice.actions;
export const selectName = (state) => state.user.name;
export const selectEmail = (state) => state.user.email;

export default userSlice.reducer;
```

Now, if i wanted to use this slice in a component, I could make a simple component that allows the user to edit their name and email address:

```js
// imports from react-redux
import { useDispatch, useSelector } from "react-redux";
// imports from this slice
import { selectName, selectEmail, setName, setEmail } from "path/to/userSlice";

const MyComponent = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const email = useSelector(selectEmail);

  const handleNameChange = (e) => {
    dispatch(setName(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <input value={email} onChange={handleEmailChange} />
    </div>
  );
};
```




