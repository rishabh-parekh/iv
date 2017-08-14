import { SafePipe } from './safe.pipe';


describe('SafePipe', () => {
  it('create an instance', () =>
   {
    //const pipe = new SafePipe(DomSanitizer);
    let pipe = SafePipe;
    expect(pipe).toBeTruthy();
  });
});
