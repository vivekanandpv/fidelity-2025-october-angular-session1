import { MyClass } from './my-class';

describe('MyClass', () => {
  it('should create an instance', () => {
    const directive = new MyClass();
    expect(directive).toBeTruthy();
  });
});
