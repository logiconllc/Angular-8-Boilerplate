export class SampleModel {
  name: string;
  description: string;

  constructor(params: any = {}) {
    this.name = params.Id || '';
    this.description = params.description || '';
  }
}

