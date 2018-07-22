import { PartialsModule } from './partials.module';

describe('PartialsModule', () => {
  let PartialsModule = PartialsModule;

  beforeEach(() => {
    PartialsModule = new PartialsModule();
  });

  it('should create an instance', () => {
    expect(PartialsModule).toBeTruthy();
  });
});
