import "server-only";
import { db } from "@/server/db";
import { UserJSON, WebhookEvent } from "@clerk/nextjs/server";
import { users } from "./db/schema";
import { eq } from "drizzle-orm";

export async function handleUserSync(evt: WebhookEvent) {
    const eventType = evt.type;

    if (eventType === "user.created") {
        await handleUserCreated(evt.data);
    } else if (eventType === "user.updated") {
        await handleUserUpdated(evt.data);
    } else if (eventType === "user.deleted") {
        await handleUserDeleted(evt.data.id as string);
    }
}


async function handleUserCreated(data: UserJSON) {
    await db
        .insert(users)
        .values({
            email: data.email_addresses[0].email_address,
            firstName: data.first_name,
            lastName: data.last_name,
            clerkUserId: data.id,
            // createdAt: new Date(),
            // updatedAt: new Date(),
        })
        .execute();
}

async function handleUserUpdated(data: UserJSON) {
    await db
        .update(users)
        .set({
            email: data.email_addresses[0].email_address,
            firstName: data.first_name,
            lastName: data.last_name,
            // updatedAt: new Date(),
        })
        .where(eq(users.clerkUserId, data.id))
        .execute();
}

async function handleUserDeleted(id: string) {
    await db
        .update(users)
        .set({
            email: null,
            clerkUserId: null,
            // updatedAt: new Date(),
        })
        .where(eq(users.clerkUserId, id))
        .execute();
}
