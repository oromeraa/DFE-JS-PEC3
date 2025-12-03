import { Component } from '@angular/core';
import { Article } from '../model/article';

@Component({
    selector: 'app-article-item',
    templateUrl: './article-item.component.html',
    styleUrl: './article-item.component.css'
})
export class ArticleItemComponent {
    article: Article = {
        name: 'Mattel Games - Uno No Mercy',
        imageUrl: 'https://images.mattel.net/image/upload/w_180,h_180,f_auto,c_pad/shop-emea-prod/products/jhypq16aafd0yqm1coyv_82ba9a3f-3be0-4b24-bd58-339571dab4b2.png',
        price: 10.00,
        isOnSale: true,
        quantityInCart: 0
    };

    increaseQuantity(): void {
        this.article.quantityInCart++;
    }

    decreaseQuantity(): void {
        // Controlamos que no baje de 0
        if (this.article.quantityInCart > 0) {
            this.article.quantityInCart--;
        }
    }
    
    // Boton para alternar el estado de oferta (DEBUG)
    toggleOnSale(): void {
        this.article.isOnSale = !this.article.isOnSale;
    }
}