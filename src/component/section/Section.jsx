import React, { use, useState } from 'react';
import SectionTitle from './SectionTitle';
import ProductCard from './ProductCard';
import Card from './Card';

const Section = ({ posmisModels }) => {
  const cards = use(posmisModels);

  const [activeModel, setActiveModel] = useState('products');
  const [addedIds, setAddedIds] = useState([]);

  return (
    <div>
      <SectionTitle
        activeModel={activeModel}
        setActiveModel={setActiveModel}
        addedIds={addedIds}
      />

      {activeModel == 'products' ? (
        <ProductCard
          cards={cards}
          addedIds={addedIds}
          setAddedIds={setAddedIds}
        />
      ) : (
        <Card addedIds={addedIds} setAddedIds={setAddedIds} />
      )}
    </div>
  );
};

export default Section;
