import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ContactService } from './contact.service';

describe('ContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should ...', inject([ContactService], (service: ContactService) => {
    expect(service).toBeTruthy();
  }));
});
