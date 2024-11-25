'use client'
import React, { useRef, Suspense } from "react";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Arrow } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";
import useProducts from "@/Hooks/useProducts";
import SkeletonDestacado from "../Tienda/Card/SkeletonDestacados";
import CardDestacado from "../Tienda/Card/CardDestacado";
import Modals from "../Tienda/Modal/Modals";
import Loading from "../Loading/Loading";

const DemoComponent = () => {
  const flickingRef = useRef(null);
  const pluginsRef = useRef([new Arrow()]);

  const {
    isModalOpen,
    closeModal,
    selectedProduct,
    handleProductSelect,
    allDestacados,
    isLoading,
  } = useProducts();


  // Render skeleton content while loading
  const skeletonContent = [...Array(4)].map((_, index) => (
    <div key={index} className="m-8 transition-transform transform hover:scale-105 w-64 p-6">
      <SkeletonDestacado />
    </div>
  ));

  // Determine content to render based on isLoading and allDestacados
  let sliderContent;
  if (isLoading) {
    sliderContent = skeletonContent;
  } else if (allDestacados.length === 0) {
    sliderContent = null;
  } else {
    sliderContent = allDestacados.map((item, i) => (
      <div key={i} className="items-center justify-center m-8 transition-transform transform hover:scale-105 w-64 p-6">
        <CardDestacado selectedProduct={item} handleProductSelect={handleProductSelect} />
      </div>
    ));
  }

  return (
    <Suspense fallback={<Loading/>}>
      <section className="text-center max-w-6xl mx-auto" id="marcasDestacado">
        <article>
          {isModalOpen && selectedProduct && <Modals closeModal={closeModal} selectedProduct={selectedProduct} />}
        </article>
        <article>
          {sliderContent ? (
            <Flicking circular={true} ref={flickingRef} plugins={pluginsRef.current} defaultIndex={Math.floor(sliderContent.length / 3)}>
              <ViewportSlot>
                <span className="flicking-arrow-prev"></span>
                <span className="flicking-arrow-next"></span>
              </ViewportSlot>
              {sliderContent}
            </Flicking>
          ) : (
            null
          )}
        </article>
      </section>
    </Suspense>
  );
};

export default DemoComponent;
