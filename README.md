#### Firebase

App is here: https://netflix-clone-be829.firebaseapp.com/

1. Setup Firebase project and then `firebase login` with your google creds
2. Follow Firebase instructions to `firebase init`
3. Choose **Hosting** -> name `public` as **build** -> setup Github Actions
4. For build steps (when configuring GitHub Actions): `npm ci && npm run build`
5. `firebase deploy` or if configured with GitHub Actions, it will do this automatically upon merges!
