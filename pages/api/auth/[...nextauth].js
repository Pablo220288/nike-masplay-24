import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const pass = "airmax2024";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize: async (credentials, req) => {
        const { user, password } = credentials;

        try {
          if (password !== pass) {
            throw new Error("Invalid Credentials");
          }

          return { name: user };
        } catch (error) {
          console.error("Error: ", error);
        }
      },
    }),
  ],
  callbacks: {
    session: async (session) => {
      if (!session) return;

      return {
        user: {
          name: session.session.user.name,
        },
      };
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
    singOut: "/auth/signout",
  },
};

export default NextAuth(authOptions);
