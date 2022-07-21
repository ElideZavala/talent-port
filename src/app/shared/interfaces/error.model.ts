export interface ErrorInterface {
  title: string;
  status: number;
  code: string;
  name: string;
  detail: string;
  source: string;
  statusText: string;
  error?: any;
}
