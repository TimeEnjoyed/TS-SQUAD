# TWITCH CODE JAM - TimeEnjoyed

- This is supposed to be a typing racer for the twitch community, where chat can join in an race, with a leaderboard at the end
- Unfortunately due to time constraints, its just a plain old typing test


- Deployed version, cuz idk how you'd download and demo without the auth-id/secret
- https://twitch-codejam.vercel.app/


# RUNNING LOCALLY
- The only roadblock is twitch auth, to set that up (Or follow https://next-auth.js.org/providers/twitch)
1. Add TWITCH_CLIENT_ID, TWITCH_CLIENT_SECRET to .env - both obtained from dev.twitch/console/apps
2. Add NEXT_PUBLIC_SECRET to env as well, which can be anything
3. Finally, within the same place the twitch id and secret is generated, add the redirect-url in the following format `http://<your-next-app-url>/api/auth/callback/twitch`
