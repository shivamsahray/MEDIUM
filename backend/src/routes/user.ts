import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { jwt, sign, verify } from 'hono/jwt'
import { signupInput, signinInput } from "@sahrayshivam/medium-common";

export const userRouter = new Hono<{
    Bindings:{
      DATABASE_URL: string,
      JWT_SECRET: string,
      // header:string
    }
  }>();

userRouter.post('/signup',async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
    const body = await c.req.json();
    const { success } = signupInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            message: "Inputs are not correct"
        })
    }
    const user = await prisma.user.create({
      data:{
        email: body.email,
        password: body.password,
      },
    })
    if (!c.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is missing from environment variables");
    }
  
  
    const token = await sign({id: user.id}, c.env.JWT_SECRET);
    return c.json({
      token: token
    })
  })
  
userRouter.post('/signin',async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
    
    const { success } = signinInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            message: "Inputs are not correct"
        })
    }
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password,
      },
    });
  
    if(!user){
      c.status(403);
      return c.json({error: "user not found"});
    }
    const token = await sign({id:user?.id},c.env.JWT_SECRET);
    return c.json({
    token
    })
  })