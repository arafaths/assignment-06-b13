import React, { use } from 'react';
import SectionTitle from './SectionTitle';
import ProductCard from './ProductCard';
import Card from './Card';
import CardEmty from './CardEmty';

const Section = ({
  posmisModels,
  addedIds,
  setAddedIds,
  activeModel,
  setActiveModel
}) => {
  const cards = use(posmisModels);

  

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
      ) : addedIds.length == 0 ? (
        <CardEmty setActiveModel={setActiveModel} />
      ) : (
        <Card addedIds={addedIds} setAddedIds={setAddedIds} />
      )}
    </div>
  );
};

export default Section;
