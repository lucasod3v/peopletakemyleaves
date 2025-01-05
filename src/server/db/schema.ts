import { sql } from "drizzle-orm";
import {
  index,
  integer,
  pgTable,
  timestamp,
  varchar,
  text,
  boolean,
  foreignKey,
  uniqueIndex,
} from "drizzle-orm/pg-core";

// Users table
export const users = pgTable("users", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  clerkUserId: varchar("clerk_user_id"),
  email: varchar("email", { length: 256 }),
  firstName: varchar("first_name", { length: 256 }),
  lastName: varchar("last_name", { length: 256 }),
  canCreateOrganization: boolean("can_create_organization").default(false).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date()
  ),
});

// Trees (Organizations/Sites)
export const trees = pgTable("trees", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  name: varchar("name", { length: 256 }).notNull(),
  ownerId: integer("owner_id").references(() => users.id).notNull(), // Owner of the tree
  isDefault: boolean("is_default").default(false).notNull(), // Indicates if it's a default self-assigned tree
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date()
  ),
});

// Subjects
export const subjects = pgTable("subjects", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  name: varchar("name", { length: 256 }).notNull(),
  treeId: integer("tree_id").references(() => trees.id).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date()
  ),
});

// Learning Goals (Leaves)
export const learningGoals = pgTable("learning_goals", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  name: varchar("name", { length: 256 }).notNull(),
  description: text("description"),
  subjectId: integer("subject_id").references(() => subjects.id).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date()
  ),
});

// User Learning Goals (Pupil's progress)
export const userLearningGoals = pgTable("user_learning_goals", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  userId: integer("user_id").references(() => users.id).notNull(),
  learningGoalId: integer("learning_goal_id").references(() => learningGoals.id).notNull(),
  status: varchar("status", { length: 50 }).notNull(), // 'Pending', 'Completed', etc.
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date()
  ),
});

// User Trees (Memberships)
export const roleTrees = pgTable("role_trees", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  userId: integer("user_id").references(() => users.id).notNull(),
  treeId: integer("tree_id").references(() => trees.id).notNull(),
  role: varchar("role", { length: 50 }).notNull(), // 'Administrator', 'Teacher', 'Pupil'
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date()
  ),
});