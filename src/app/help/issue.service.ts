import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Http, RequestOptionsArgs, RequestMethod, URLSearchParams } from '@angular/http';

export class Issue {
  _id: number;
  purchaseId: string;
  issueCategory: string;
  issue: string;
  status: string;
  resolution: string;
}

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(private http: Http, private httpClient: HttpClient) {}
  saveIssue(purchaseId: string, issue: string, issueCategory: string, status: string) {
    const params: URLSearchParams = new URLSearchParams();
    params.set('purchaseId', purchaseId);
    params.set('issue', issue);
    params.set('issueCategory', issueCategory);
    params.set('status', status);
    params.set('resolution', '');
    return this.http.post('http://localhost:3000/issue', params);
  }
  getIssueById(purchaseId: string): Observable<Issue> {
    const url = 'http://localhost:3000/issue?purchaseId=' + purchaseId;
    return this.httpClient.get<Issue>(url);
  }
  getAllIssues(): Observable<Issue[]> {
    const url = 'http://localhost:3000/issue/all';
    return this.httpClient.get<Issue[]>(url);
  }
  updateIssue(purchaseId: string, status: string, resolution: string) {
    const params: URLSearchParams = new URLSearchParams();
    params.set('purchaseId', purchaseId);
    params.set('status', status);
    params.set('resolution', resolution);
    console.log(params);
    return this.http.post('http://localhost:3000/issue/update', params);

  }
}
