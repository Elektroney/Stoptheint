import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Data {
  username: string;
  message: string;
}
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export class PlayerService {
  headers = new HttpHeaders()
    .set('cache-control', 'no-cache')
    .set('content-type', 'application/json')
    .set('postman-token', 'b408a67d-5f78-54fc-2fb7-00f6e9cefbd1')
    .set('Access-Control-Allow-Headers', '*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', '*');
  getDB() {
    return this.http.get(this.url, { headers: this.headers });
  }
  postDB() {
    return this.http.post(this.url, this.data, { headers: this.headers });
  }
  putDB() {
    return this.http.put(this.url, this.data, { headers: this.headers });
  }

  url: string = 'https://stopthein-db.elektroney.repl.co/';
  data: Data = { username: 'None', message: 'None' };

  constructor(private http: HttpClient) {}
  res: string = 'Please Reload!!';
  private async sendCurlRequest(method: string, data: Data) {
    if (this.data.username == 'None') return;

    switch (method) {
      case 'POST':
        await this.postDB().subscribe((res) => {
          this.res = JSON.parse(JSON.stringify(res)).message;
        });
        await delay(1000);
        return this.res;
      case 'PUT':
        await this.putDB().subscribe((res) => {
          this.res = JSON.parse(JSON.stringify(res)).message;
        });
        await delay(1000);
        return this.res;
      case 'GET':
        await this.getDB().subscribe((res) => {
          this.res = JSON.parse(JSON.stringify(res)).message;
        });
        await delay(1000);
        return this.res;

      default:
        return '';
        break;
    }
  }
  async startService() {
    return await this.sendCurlRequest('GET', this.data);
  }
  async getDescription(name: string) {
    this.data.username = name;
    return await this.sendCurlRequest('POST', this.data);
  }

  async setDescription(name: string, message: string) {
    this.data.username = name;
    this.data.message = message;

    return await this.sendCurlRequest('PUT', this.data);
  }
}
