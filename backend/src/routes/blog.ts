import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createBlogInput, updateBlogInput } from "@sahrayshivam/medium-common";
import { Hono } from "hono";
import { use } from "hono/jsx";
import { decode, verify } from "hono/jwt";


export const blogRouter = new Hono<{
    Bindings:{
      DATABASE_URL: string,
      JWT_SECRET: string,
      // header:string
    },
    Variables: {
        userId: string;
    }
}>();

blogRouter.use("/*",async (c, next) => {
    const authHeader = await c.req.header("authorization")||"";
    const user =await verify(authHeader, c.env.JWT_SECRET);
    if(user){
        //@ts-ignore   
        c.set("userId", user.id);
        await next();
    }else{
        c.status(403)
        return c.json({
            message: "You are not logged in"
        })
    }
})

blogRouter.post('/',async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const userID = c.get("userId");
    const body = await c.req.json();
    
    const { success } = createBlogInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            message: "Inputs are not correct"
        })
    }
    const blog = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: userID
        }
    })
  
    
    return c.json({
        id: blog.id,
    })
})
  
blogRouter.put('/',async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
  
    const body = await c.req.json();

    const { success } = updateBlogInput.safeParse(body);
    if(!success){
         c.status(411);
            return c.json({
                message: "Inputs are not correct"
            })
    }
      const blog = await prisma.post.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content,
              
        }
      })
    
      
      return c.json({
          id: blog.id,
      })
})
  
blogRouter.get('/bulk',async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())

    const blogs = await prisma.post.findMany();
    return c.json({
        blogs
    })
})


blogRouter.get('/:id',async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
  
      const id = await c.req.param("id");

      try{
        const blog = await prisma.post.findFirst({
            where: {
              id: id
            }
        })
      
        
        return c.json({
           blog
        })
      }catch(e){
        c.status(411);
        return c.json({
            message: "Error while fetching details"
        })
      }
      
})


  