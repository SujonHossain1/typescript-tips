/**
 * ✅ Topic: The power of generic interfaces to create adaptable and reusable data structures in TypeScript
 */

// Suppose you want to create a flexible repository for various types of data.

interface Repository<T> {
  getById(id: number): T | undefined;
  getAll(): T[];
  create(item: T): void;
  update(id: number, item: T): void;
  delete(id: number): void;
}

// Usage:
class UserRepository implements Repository<User> {
  // Implement methods here for User data

  getById(id: number): User | undefined {
    // Implementation
  }

  getAll(): User[] {
    // Implementation
  }

  create(user: User): void {
    // Implementation
  }

  update(id: number, user: User): void {
    // Implementation
  }

  delete(id: number): void {
    // Implementation
  }
}
