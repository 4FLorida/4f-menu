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

  render() {
    const { ProductStore } = this.props;
    return (
      <Row>
        <Col>
        <Searchbox
        value={ProductStore.query}
        onChange={this.handleSearchChange.bind(this)}
      ></Searchbox>
      
      <Button create>Ürün Oluştur</Button>
        </Col>
        <Col><Title float="right">Ürünler</Title></Col>
      </Row>
      
    );
  }
}

export default Top;
