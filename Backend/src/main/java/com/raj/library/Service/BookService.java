package com.raj.library.Service;

import com.raj.library.entity.Book;
import com.raj.library.repository.BookRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepo bookRepo;

    public boolean addBooks(String title,int price,String stocks,String author){
        Book book = new Book();
        book.setAuthor(author);
        book.setTitle(title);
        book.setPrice(price);
        book.setStocks(stocks);
        try {
            bookRepo.save(book);
            return true;
        }catch (Exception e){
            System.out.println(e.getMessage());
            return false;
        }
    }
    public List<Book> getBooks(){
        return bookRepo.findAll();
    }
}
