import { TestBed } from '@angular/core/testing';

<<<<<<< HEAD
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
=======
import { Auth } from './auth.service';

describe('Auth', () => {
  let service: Auth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Auth);
>>>>>>> a15cfc4085d76ec305b95886dafa3d26af3982ae
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
