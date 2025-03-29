import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { jwt, sign, verify } from 'hono/jwt'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'
import { cors } from 'hono/cors'


const app = new Hono<{
  Bindings:{
    DATABASE_URL: string,
    JWT_SECRET: string,
    // header:string
  }
}>()
app.use("/*", cors());

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

// app.use('/api/v1/blog/*', async (c, next) => {
//   //get the header
//   //verify the header
//   //if the header is correct, we will proceed
//   //if not we return the user a 403 status
//   const header = c.req.header("authorization") || "";

//   //bearer token 
//   const token = header.split(" ")[1];
//   const response = await verify(token, c.env.JWT_SECRET)

//   if(response.id){
//    next()
//   }else{
//      c.status(403);
//     return c.json({error : "unauthorized"});
//   }
// })




export default app
