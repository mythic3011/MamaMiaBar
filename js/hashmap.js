// Hashmap javascript

// Hashmap class
class Hashmap {
    constructor() {
        this.map = new Map();
    }

    // Add key-value pair to hashmap
    add(key, value) {
        this.map.set(key, value);
    }

    // Get value from hashmap
    get(key) {
        return this.map.get(key);
    }

    // Check if key exists in hashmap
    has(key) {
        return this.map.has(key);
    }

    // Remove key-value pair from hashmap
    remove(key) {
        this.map.delete(key);
    }

    // Clear all key-value pairs from hashmap
    clear() {
        this.map.clear();
    }

    // search key in hashmap and return value
    search(key) {
        return this.map.get(key);
    }
}
