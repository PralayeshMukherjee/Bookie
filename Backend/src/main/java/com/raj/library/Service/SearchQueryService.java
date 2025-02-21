package com.raj.library.Service;

import com.raj.library.repository.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SearchQueryService {

    @Autowired
    private SellerRepository sellerRepository;
}
