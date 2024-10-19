import product from "./../model/product.js";
import Api from "./../services/Api.js";

const api = new Api();
let dataStore = [];

const getEleId = (id) => document.getElementById(id);
const getEleClass = (className) => document.getElementById(className);

// render product
let renderProduct = (productList) => {
  let content = "";
  productList.forEach((product) => {
    content += `
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-2">
  <a href="#">
      <img class="p-8 rounded-t-lg" src="${product.img}" alt="product image" />
  </a>
  <div class="px-5 pb-5">
      <a href="#">
          <h3 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${product.name}</h3>
          <h6 class="text-x font-semibold tracking-tight text-gray-900 dark:text-white">${product.desc}</h6>
          <h6 class="text-x font-semibold tracking-tight text-gray-900 dark:text-white">Màn hình: ${product.screen}</h6>
          <h6 class="text-x font-semibold tracking-tight text-gray-900 dark:text-white">Camera trước: ${product.frontCamera} - Camera sau:${product.backCamera} </h6>
         
          
      </a>
      <div class="flex items-center mt-2.5 mb-5">
          <div class="flex items-center space-x-1 rtl:space-x-reverse">
              <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
          </div>
          <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
      </div>
      <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-gray-900 dark:text-white">$${product.price}</span>
          <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
      </div>
  </div>
</div>

      `;
  });
  getEleId("productList").innerHTML = content;
};

// gọi api với axios
// let apiUrl = "https://6700f182b52042b542d65308.mockapi.io/capestone_js";
// axios({
//   url: apiUrl,
//   method: "GET",
// })
//   .then((res) => {
//     console.log(res.data);
//     let productList = res.data;
//     // render sản phẩm ra giao diện
//     renderProduct(productList);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fetch product list
// let fetchProductList = () => {
//   api
//     .getListProduct()
//     .then((res) => {
//       console.log("res:", res.data);
//       dataStore = res.data;
//       // let productLists = res.data;
//       renderProduct(res.data);
//       // render danh sách sản phẩm ra giao diện
//     })
//     .catch((err) => {
//       console.log("err:", err);
//     });
// };
// fetchProductList();

// Hàm lọc sản phẩm dựa trên lựa chọn từ dropdown
const filterProducts = () => {
  const selectedType = getEleId("product-filter").value.toLowerCase();

  // Kiểm tra loại sản phẩm được chọn
  console.log("Selected type:", selectedType);

  // Nếu chọn "Tất cả", hiển thị toàn bộ sản phẩm
  if (selectedType === "tất cả") {
    renderProduct(dataStore);
    return;
  }

  // Lọc các sản phẩm dựa trên thuộc tính 'type'
  const filteredProducts = dataStore.filter(
    (product) => product.type.toLowerCase() === selectedType
  );

  // Kiểm tra sản phẩm sau khi lọc
  console.log("Filtered Products:", filteredProducts);

  // Hiển thị sản phẩm đã lọc
  renderProduct(filteredProducts);
};
window.filterProducts = filterProducts;

// Hàm fetch danh sách sản phẩm từ API
let fetchProductList = () => {
  api
    .getListProduct()
    .then((res) => {
      console.log("API Response:", res.data); // Kiểm tra dữ liệu trả về từ API
      dataStore = res.data;

      // Sau khi lấy được danh sách sản phẩm, hiển thị toàn bộ sản phẩm
      renderProduct(dataStore);
    })
    .catch((err) => {
      console.log("Error:", err); // Kiểm tra lỗi nếu có
    });
};
fetchProductList();
