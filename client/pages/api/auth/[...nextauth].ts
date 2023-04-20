import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { NextApiRequest, NextApiResponse } from "next";
import axios from "@/libs/axios";
import jwt from "jsonwebtoken";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }: any) {
      if (account) {
        token.token = account.token;
        token.id = account.id;
      }

      //check jwt
      if (token.token) {
        try {
          jwt.verify(token.token, process.env.NEXT_PUBLIC_SECRET_JWT as string);
        } catch (error) {
          //logout
          console.log(error);
          return null;
        }
      }
      return token;
    },
    async session({ session, token, user }: any) {
      session.token = token.token;
      session.id = token.id;
      return session;
    },
    //sign in
    async signIn({ account }: any) {
      if (account.provider === "google") {
        try {
          const res = await axios.post("/auth/google", {
            id_token: account.id_token,
          });
          account.token = await res.data.token;
          account.id = await res.data.id;

          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
  },
  pages: {},
  secret: process.env.NEXT_PUBLIC_SECRET_JWT,
};
const Auth = (req: NextApiRequest, res: NextApiResponse<any>) =>
  NextAuth(req, res, authOptions);
export default Auth;
