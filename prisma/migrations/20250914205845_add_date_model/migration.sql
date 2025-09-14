-- CreateTable
CREATE TABLE "public"."Date" (
    "id" SERIAL NOT NULL,
    "coupleId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Date_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Date" ADD CONSTRAINT "Date_coupleId_fkey" FOREIGN KEY ("coupleId") REFERENCES "public"."Couple"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
