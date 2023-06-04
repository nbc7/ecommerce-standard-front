import { useState } from 'react';

import CaretLeft from '../../assets/icons/caret-left.svg';
import CaretRight from '../../assets/icons/caret-right.svg';

import { ProductCard } from '../ProductCard/ProductCard';

import './ProductShowcase.scss';

interface ProductShowcaseProps {
  showCategories?: boolean;
}

export function ProductShowcase({ showCategories = false }: ProductShowcaseProps) {
  const categories = ['celular', 'acessórios', 'tablets', 'notebooks', 'tvs', 'ver todos'];

  const [selectedCategory, setSelectedCategory] = useState<string>('celular');

  return (
    <div className="product-showcase-container">
      <div className="product-showcase-header">
        <div className="product-showcase-title">
          <div className="divider-half"></div>

          <h2>Produtos relacionados</h2>

          <div className="divider-half"></div>
        </div>

        {!showCategories ? (
          <a href="">Ver todos</a>
        ) : (
          <div className="categories-container">
            <ul>
              {categories.map((category) => {
                return (
                  <li
                    key={category}
                    className={selectedCategory === category ? 'category-selected' : ''}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      <div className="carousel">
        <img src={CaretLeft} className="caret-left" width={20} height={34} />

        <section>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </section>

        <img src={CaretRight} className="caret-right" width={20} height={34} />
      </div>
    </div>
  );
}