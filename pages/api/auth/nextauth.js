// pages/api/auth/[...nextauth].ts or .js

import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

export const authOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      authorization: "https://accounts.spotify.com/authorize?scope=user-read-email,user-read-private,user-top-read",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};


