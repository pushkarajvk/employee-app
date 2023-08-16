import { Injectable } from '@angular/core';
import { DBSchema, openDB } from 'idb';
@Injectable({
  providedIn: 'root',
})
export class IndexedDBService {
  db: any;
  editData: any;
  constructor() {
    this.connectToDb();
  }

  async connectToDb() {
    this.db = await openDB<MyDB>('my-db', 1, {
      upgrade(db) {
        db.createObjectStore('employee-store');
      },
    });
  }

  addEmployee(data: string, key: any) {
    return this.db.put('employee-store', data, key);
  }

  deletEmployee(key: string) {
    return this.db.delete('employee-store', key);
  }

  getAllEmployees() {
    return this.db.getAll('employee-store');
  }
}

interface MyDB extends DBSchema {
  'employee-store': {
    key: string;
    value: string;
  };
}
