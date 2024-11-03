# The various states that an app can enter on iOS
1. **Not Running**: The app is completely closed and is not present in memory.
2. **Inactive**: The app is in the foreground but not receiving any user input (e.g., during a call or when the control center is opened).
3. **Active**: The app is running in the foreground and interacting with the user.
4. **Background**: The app is running in the background, either performing tasks or waiting to be suspended.
5. **Suspended**: The app is in memory but not executing code. It may be terminated by the system if memory is needed elsewhere.
   
# The various states that you must consider for your app, why you must consider it, and what must happen in each state.
1. **Active State**
   - **Consideration**: This is the primary state for app functionality and user interactions.
   - **Reason**: Ensures that the app is fully interactive and responsive to user actions.
   - **Action**: All UI updates, animations, and user interactions are managed, and any paused background tasks or data should be refreshed if needed.

2. **Inactive State**
   - **Consideration**: Short transition state when an interruption occurs.
   - **Reason**: Allows the app to pause ongoing processes momentarily (e.g., temporary halts when receiving a call).
   - **Action**: Pause animations and sensitive user interactions but maintain the app’s state for a quick resume.

3. **Background State**
   - **Consideration**: When the app is no longer in the foreground but may need to complete specific tasks.
   - **Reason**: Essential for maintaining activities like saving user data or completing a task, even while the app is minimized.
   - **Action**: Start tasks such as data uploads or downloads, save user data, and release any resources not needed in the background.

4. **Suspended State**
   - **Consideration**: The app is no longer active and may be removed from memory.
   - **Reason**: System management may terminate the app to free resources for active apps.
   - **Action**: Ensure any unsaved data is written to persistent storage and release resources to avoid memory leaks.

5. **Not Running State**
   - **Consideration**: The app is completely closed, either by the user or the system.
   - **Reason**: This state is reached after the app is terminated or crashes.
   - **Action**: Ensure proper state restoration is in place, so when the app launches again, the last known state can be restored for continuity.
