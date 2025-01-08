-- CreateTable
CREATE TABLE "Config" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "logo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Social" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "configId" INTEGER NOT NULL,
    CONSTRAINT "Social_configId_fkey" FOREIGN KEY ("configId") REFERENCES "Config" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
