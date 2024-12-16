const dummyData = {
  products: Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    name: `추천 상품 ${index + 1}`,
    price: `${(index + 1) * 1000}`,
    image: `https://picsum.photos/200/300?random=${index + 1}`,
  })),
};

export default dummyData;
