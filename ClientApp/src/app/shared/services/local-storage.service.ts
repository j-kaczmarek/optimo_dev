import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  localStorage: Storage

  constructor() {
    this.localStorage = window.localStorage
  }

  // Getters
  get isLocalStorageSupported(): boolean {
    return !!this.localStorage
  }

  // Methods
  get(key: string): any {
    if (!this.isLocalStorageSupported) return null

    return JSON.parse(this.localStorage.getItem(key))
  }

  set(key: string, value: any): boolean {
    if (!this.isLocalStorageSupported) return false

    this.localStorage.setItem(key, JSON.stringify(value))
    return true
  }

  remove(key: string): boolean {
    if (!this.isLocalStorageSupported) return false

    this.localStorage.removeItem(key)
    return true
  }
}
