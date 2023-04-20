import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import jwt from 'jsonwebtoken'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    async jwt({ token,user, account }:any) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token, user }:any) {
      session.accessToken = token.accessToken
      return session
    },
    //sign in
    async signIn({  account, profile }:any) {
      console.log(account,profile)
      if (account.provider === 'google') {
        console.log('google')

      }
      return true
    }
  },
  secret: process.env.NEXT_PUBLIC_SECRET_JWT
}

export default NextAuth(authOptions)