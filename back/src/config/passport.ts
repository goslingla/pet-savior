import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: '/api/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      const { id, emails, displayName } = profile;

      if (!emails || emails.length === 0) {
        return done(new Error('No email found'), undefined);
      }

      try {
        let user = await prisma.user.findUnique({
          where: { googleId: id },
        });

        if (!user) {
          user = await prisma.user.create({
            data: {
              googleId: id,
              email: emails[0].value,
              name: displayName,
            },
          });
        }

        done(null, user);
      } catch (error) {
        done(error, undefined);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, (user as any).id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: Number(id) } });
    done(null, user);
  } catch (error) {
    done(error, undefined);
  }
});

export default passport;
