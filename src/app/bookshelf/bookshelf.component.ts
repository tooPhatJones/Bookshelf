import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import books from "../../assets/books"

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {

  constructor() { }
  testdata = ['test5', 'test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8']
  permanantBookdata = books;
  bookdata = books;
  pagesSort = false;
  nameSort = false;
  dateSort = false;
  pagesvalue = 0;
  ngOnInit() {
  }
  numberOfPagesRadio(event: Event) {
    this.pagesSort = !this.pagesSort;
    var temp = this.pagesSort;
    this.bookdata.sort(function (a, b) {
      if (temp) {
        return a.pages - b.pages;
      } else {
        return b.pages - a.pages;
      }
    });
  }

  releaseDateRadio(event: Event) {
    this.dateSort = !this.dateSort;
    var temp = this.dateSort;
    this.bookdata.sort(function (a, b) {
      var rx = /(\d+)\/(\d+)\/(\d+)/;
      var aa = Number(a.releaseDate.replace(rx, '$3$1$20000'));
      var bb = Number(b.releaseDate.replace(rx, '$3$1$20000'));
      if (temp) {
        return aa > bb ? -1 : aa == bb ? 0 : 1;
      } else {
        return aa < bb ? -1 : aa == bb ? 0 : 1;
      }
    });
  }

  AuthorNameRadio(event: Event) {
    this.nameSort = !this.nameSort;
    var temp = this.nameSort;
    this.bookdata.sort(function (a, b) {
      if (temp) {
        return a.author > b.author ? -1 : a.author == b.author ? 0 : 1;
      } else {
        return b.author > a.author ? -1 : b.author == a.author ? 0 : 1;
      }
    })
  }

  filterByNumberOfPages() {
    this.pagesvalue == null ? this.pagesvalue = 0 : null;
    var temppagesvalue = this.pagesvalue;

    this.bookdata = this.permanantBookdata.filter(function (item) {
      return item.pages > temppagesvalue
    });
  }








  // // Get the modal
  // @ViewChild('.myModal', { static: true }) myModal: ElementRef;

  // // Get the image and insert it inside the modal - use its "alt" text as a caption
  // @ViewChild('.myImg', { static: true }) myImg: ElementRef;
  // @ViewChild('#img01', { static: true }) img01: ElementRef;
  // @ViewChild('#caption', { static: true }) caption: ElementRef;

  // clickImage(event: Event) {
  //   var temp = <HTMLImageElement>event.target
  //   console.log(temp)
  //   console.log((<HTMLImageElement>event.srcElement.currentSrc))
  //   // this.myModal.nativeElement.style.display = "block";
  //   // this.img01.nativeElement.style.src = this.src;
  //   // captionText.innerHTML = this.alt;
  // }

  // // Get the <span> element that closes the modal
  // // var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  // span.onclick = function() {
  //   modal.style.display = "none";
  // }







}
