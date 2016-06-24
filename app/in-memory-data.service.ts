export class InMemoryDataService {
  createDb() {
    let providers = [
      {id: 11, name: 'Dr. Smith'},
      {id: 12, name: 'Dr. Dan'},
      {id: 13, name: 'Dr. Robert'},
      {id: 14, name: 'Dr. Jack'},
      {id: 15, name: 'Dr. Alan'},
      {id: 16, name: 'Dr. Mike'},
      {id: 17, name: 'Dr. Joe'},
      {id: 18, name: 'Dr. John'},
      {id: 19, name: 'Dr. Philip'},
      {id: 20, name: 'Dr. Sam'}
    ];
    return {providers};
  }
}
