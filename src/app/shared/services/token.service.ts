import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private storageService: StorageService) {}

  get() {
    const _tokenName = this.storageService.getItem('token');
    return _tokenName;
  }

  getWithoutBearer() {
    const _tokenName = this.storageService.getItem('token');
    return _tokenName.split(' ')[1];
  }

  save(token: string) {
    this.storageService.createItem('token', token);
  }

  clear() {
    this.storageService.clearItem('token');
  }

  getDecoded(token = '') {
    return jwt_decode(token ? token : this.storageService.getItem('token'));
  }

  exist() {
    return this.storageService.existItem('token');
  }
}
