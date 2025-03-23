-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "level" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "meta" JSONB NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
