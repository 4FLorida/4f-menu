import React, { Component } from 'react';
import Row from '../Row';
import Col from '../Col';
import Searchbox from '../Searchbox';
import Button from '../Button';
import { inject, observer } from 'mobx-react';
import Title from '../Title';

@inject('ProductStore')
@observer
class Top extends Component {
  handleSearchChange(e) {
    const { ProductStore } = this.props;
    ProductStore.query = e.target.value;
    ProductStore.filteredProducts = ProductStore.products.filter(product =>
      product.name.toLowerCase().includes(ProductStore.query.toLowerCase())
    );
  }

  deleteManyProducts() {
    const { ProductStore } = this.props;
    ProductStore.deleteManyProduct();
  }

  render() {
    const { ProductStore } = this.props;
    return (
      <Row>
        <Col>
          <Searchbox
            value={ProductStore.query}
            onChange={this.handleSearchChange.bind(this)}
            placeholder="Ürün Arama"
          ></Searchbox>

          <Button create>+</Button>
          {/* <Button create onClick={this.deleteManyProducts.bind(this)}>Hepsini Sil</Button> // çoklu silme */}
        </Col>
        <Col>
          <Title float="right">Ürünler ({ProductStore.products.length})</Title>
        </Col>
      </Row>
    );
  }
}

export default Top;
