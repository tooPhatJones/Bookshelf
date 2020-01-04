import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookshelfComponent } from './bookshelf.component';
import { FormsModule } from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox';
import books from "../../assets/books"

describe('BookshelfComponent', () => {
  let component: BookshelfComponent;
  let fixture: ComponentFixture<BookshelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookshelfComponent],
      imports: [FormsModule, LightboxModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookshelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('books in first order', () => {
    expect(component.bookdata.length).toBe(6);
    expect(component.bookdata).toBe(books);
  });

  it('filter by author', () => {
    //innitial call to sort by author sorts in a-z
    component.AuthorNameRadio()
    expect(component.bookdata[0].author).toBe("Addy Osmani");
    expect(component.bookdata[1].author).toBe("Cody Lindley");
    expect(component.bookdata[2].author).toBe("David Flanagan");
    expect(component.bookdata[3].author).toBe("Douglas Crockford");
    expect(component.bookdata[4].author).toBe("Eric Elliott");
    expect(component.bookdata[5].author).toBe("Nicolas Bevacqua");
    //second call to sort by author sorts in z-a
    component.AuthorNameRadio()
    expect(component.bookdata[0].author).toBe("Nicolas Bevacqua");
    expect(component.bookdata[1].author).toBe("Eric Elliott");
    expect(component.bookdata[2].author).toBe("Douglas Crockford");
    expect(component.bookdata[3].author).toBe("David Flanagan");
    expect(component.bookdata[4].author).toBe("Cody Lindley");
    expect(component.bookdata[5].author).toBe("Addy Osmani");
  });

  it('filter by page number', () => {
    //innitial call to sort by page number sorts in a-z
    component.numberOfPagesRadio()
    expect(component.bookdata[0].pages).toBe(166);
    expect(component.bookdata[1].pages).toBe(172);
    expect(component.bookdata[2].pages).toBe(254);
    expect(component.bookdata[3].pages).toBe(254);
    expect(component.bookdata[4].pages).toBe(334);
    expect(component.bookdata[5].pages).toBe(936);
    //second call to sort by page number sorts in z-a
    component.numberOfPagesRadio()
    expect(component.bookdata[0].pages).toBe(936);
    expect(component.bookdata[1].pages).toBe(334);
    expect(component.bookdata[2].pages).toBe(254);
    expect(component.bookdata[3].pages).toBe(254);
    expect(component.bookdata[4].pages).toBe(172);
    expect(component.bookdata[5].pages).toBe(166);
  });
  it('filter by release date', () => {
    //innitial call to sort by page number sorts in a-z
    component.releaseDateRadio()
    expect(component.bookdata[0].releaseDate).toBe("11/01/2001");
    expect(component.bookdata[1].releaseDate).toBe("12/01/2008");
    expect(component.bookdata[2].releaseDate).toBe("08/01/2012");
    expect(component.bookdata[3].releaseDate).toBe("12/01/2012");
    expect(component.bookdata[4].releaseDate).toBe("07/01/2014");
    expect(component.bookdata[5].releaseDate).toBe("07/01/2017");
    //second call to sort by page number sorts in z-a
    component.releaseDateRadio()
    expect(component.bookdata[0].releaseDate).toBe("07/01/2017");
    expect(component.bookdata[1].releaseDate).toBe("07/01/2014");
    expect(component.bookdata[2].releaseDate).toBe("12/01/2012");
    expect(component.bookdata[3].releaseDate).toBe("08/01/2012");
    expect(component.bookdata[4].releaseDate).toBe("12/01/2008");
    expect(component.bookdata[5].releaseDate).toBe("11/01/2001");
  });

  it('sort above x number of pages', () => {
    //filter above 100 pages
    component.pagesvalue = 100;
    component.filterByNumberOfPages()
    expect(component.bookdata.length).toBe(6);
    expect(checkNumberOfPagesInBookArray(100)).toBeFalsy();

    //filter above 200 pages
    component.pagesvalue = 200;
    component.filterByNumberOfPages()
    expect(component.bookdata.length).toBe(4);
    expect(checkNumberOfPagesInBookArray(200)).toBeFalsy();

    //filter above 300 pages
    component.pagesvalue = 300;
    component.filterByNumberOfPages()
    expect(component.bookdata.length).toBe(2);
    expect(checkNumberOfPagesInBookArray(300)).toBeFalsy();

    //filter above 400 pages
    component.pagesvalue = 400;
    component.filterByNumberOfPages()
    expect(component.bookdata.length).toBe(1);
    expect(checkNumberOfPagesInBookArray(400)).toBeFalsy();

    //filter above 1000 pages
    component.pagesvalue = 1000;
    component.filterByNumberOfPages()
    expect(component.bookdata.length).toBe(0);
    expect(checkNumberOfPagesInBookArray(1000)).toBeFalsy();

  });

  function checkNumberOfPagesInBookArray(number) {
    for (var i in component.bookdata) {
      if (component.bookdata[i].pages < number) {
        return true;
      }
    }
    return false;
  }

});
