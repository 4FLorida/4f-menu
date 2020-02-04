import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Searchbox from '../Searchbox';
import ProductCard from '../Product/ProductCard';
import ProductPrice from './ProductPrice';
import ProductCardImage from './ProductCardImage';
import ProductName from './ProductName';
import EditIcon from './EditIcon';
import RemoveIcon from './RemoveIcon';
import Content from '../Content';
import Row from '../Row';
import Col from '../Col';
import Button from '../Button';

@inject('ProductStore')
@observer
class ProductList extends Component {
  componentDidMount() {
    const { ProductStore } = this.props;
    ProductStore.getAll();
  }

  addProduct() {
    const { ProductStore } = this.props;
    ProductStore.addProduct();
    this.resetProductStore();
  }

  deleteProduct(id) {
    const { ProductStore } = this.props;
    ProductStore.setId(id);
    ProductStore.deleteProduct();
  }

  updateHandler(id) {
    const { ProductStore } = this.props;
    const updated = this.props.ProductStore.products.filter(
      product => product._id == id
    );
    ProductStore.setProduct({
      id: updated[0]._id,
      name: updated[0].name,
      price: updated[0].price,
      info: updated[0].info,
      image: updated[0].image,
    });
    ProductStore.setEdit(true);
  }

  resetProductStore() {
    const { ProductStore } = this.props;
    ProductStore.setProduct({
      id: '',
      name: '',
      price: '',
      info: '',
      image: '',
    });
    ProductStore.isEdit = false;
    ProductStore.message = '';
  }

  handleNameChange(e) {
    const { ProductStore } = this.props;
    ProductStore.setName(e.target.value);
  }

  handlePriceChange(e) {
    const { ProductStore } = this.props;
    ProductStore.setPrice(e.target.value);
  }

  handleDescChange(e) {
    const { ProductStore } = this.props;
    ProductStore.setDescription(e.target.value);
  }

  handleSearchChange(e) {
    const { ProductStore } = this.props;
    ProductStore.query = e.target.value;
    ProductStore.filteredProducts = ProductStore.products.filter(product =>
      product.name.toLowerCase().includes(ProductStore.query.toLowerCase())
    );
  }


  
  render() {
    const { ProductStore } = this.props;

    return(
       ProductStore.filteredProducts.length > 0
                  ? ProductStore.filteredProducts.map(product => (
                    <ProductCard>
                    <ProductCardImage src={product.image}></ProductCardImage>
                    <ProductName>{product.name}</ProductName>
                    <ProductPrice>{product.price}₺</ProductPrice>
                    <EditIcon>
                      <svg
                        width="23"
                        height="24"
                        viewBox="0 0 23 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d)">
                          <path
                            d="M4 12.0842V15.2637H7.12457L16.34 5.8863L13.2154 2.70681L4 12.0842ZM18.7563 3.42749C19.0812 3.09682 19.0812 2.56267 18.7563 2.232L16.8066 0.248C16.4816 -0.0826667 15.9567 -0.0826667 15.6317 0.248L14.1069 1.79959L17.2315 4.97908L18.7563 3.42749Z"
                            fill="#707683"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d"
                            x="0"
                            y="0"
                            width="23"
                            height="23.2637"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </EditIcon>
                    <RemoveIcon onClick={this.deleteProduct.bind(this,product._id)}>
                      <svg
                        width="21"
                        height="24"
                        viewBox="0 0 21 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d)">
                          <path
                            d="M4.92857 13.5677C4.92857 14.5005 5.76429 15.2637 6.78571 15.2637H14.2143C15.2357 15.2637 16.0714 14.5005 16.0714 13.5677V3.39193H4.92857V13.5677ZM17 0.847982H13.75L12.8214 0H8.17857L7.25 0.847982H4V2.54395H17V0.847982Z"
                            fill="#707683"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d"
                            x="0"
                            y="0"
                            width="21"
                            height="23.2637"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </RemoveIcon>
                    <br/> 
                  </ProductCard>
                    ))
                  : ProductStore.query.length > 0 && ProductStore.filteredProducts.length == 0
                  ? null
      : ProductStore.products.map(product => (
        <ProductCard>
        <ProductCardImage src={product.image}></ProductCardImage>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.price}₺</ProductPrice>
        <EditIcon>
          <svg
            width="23"
            height="24"
            viewBox="0 0 23 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d)">
              <path
                d="M4 12.0842V15.2637H7.12457L16.34 5.8863L13.2154 2.70681L4 12.0842ZM18.7563 3.42749C19.0812 3.09682 19.0812 2.56267 18.7563 2.232L16.8066 0.248C16.4816 -0.0826667 15.9567 -0.0826667 15.6317 0.248L14.1069 1.79959L17.2315 4.97908L18.7563 3.42749Z"
                fill="#707683"
              />
            </g>
            <defs>
              <filter
                id="filter0_d"
                x="0"
                y="0"
                width="23"
                height="23.2637"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </EditIcon>
        <RemoveIcon onClick={this.deleteProduct.bind(this,product._id)}>
          <svg
            width="21"
            height="24"
            viewBox="0 0 21 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d)">
              <path
                d="M4.92857 13.5677C4.92857 14.5005 5.76429 15.2637 6.78571 15.2637H14.2143C15.2357 15.2637 16.0714 14.5005 16.0714 13.5677V3.39193H4.92857V13.5677ZM17 0.847982H13.75L12.8214 0H8.17857L7.25 0.847982H4V2.54395H17V0.847982Z"
                fill="#707683"
              />
            </g>
            <defs>
              <filter
                id="filter0_d"
                x="0"
                y="0"
                width="21"
                height="23.2637"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </RemoveIcon>
        <br/> 
      </ProductCard>
          
           
    )));
  }
}

export default ProductList;
