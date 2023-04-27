import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiBaseService } from './api-base.service';

@Injectable({
  providedIn: 'root',
})
export class DocumentsService {
  constructor(private apiBase: ApiBaseService) {}

  getType(): Observable<any> {
    return this.apiBase.get(
      '/cfeGeneradorNotificaciones-version1/resources/catalogo/listar/tipoUrgencia'
    );
  }
}
